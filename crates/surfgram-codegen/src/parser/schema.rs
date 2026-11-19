use super::field::parse_field;
use super::{enums, typemap, util};
use crate::ir::*;
use crate::naming::to_snake_case;
use serde_json::Value;
use std::collections::HashSet;

pub(super) fn parse_schemas(
    root: &Value,
    extra_types: &mut Vec<IrType>,
) -> Result<Vec<IrType>, String> {
    let schemas = root
        .get("components")
        .and_then(|c| c.get("schemas"))
        .and_then(|s| s.as_object())
        .ok_or_else(|| "No components.schemas found".to_string())?;

    let mut out = Vec::new();
    for (name, schema) in schemas {
        if is_error_schema(schema) {
            continue;
        }
        if let Some(t) = parse_schema(name, schema, extra_types)? {
            out.push(t);
        }
    }
    Ok(out)
}

fn is_error_schema(schema: &Value) -> bool {
    schema
        .get("properties")
        .and_then(|p| p.get("ok"))
        .and_then(|o| o.get("const"))
        .and_then(|c| c.as_bool())
        == Some(false)
}

fn parse_schema(
    name: &str,
    schema: &Value,
    extra_types: &mut Vec<IrType>,
) -> Result<Option<IrType>, String> {
    let desc = util::description(schema);

    if schema.get("properties").is_none() {
        for key in ["oneOf", "anyOf"] {
            if let Some(arr) = schema.get(key).and_then(|o| o.as_array()) {
                let real = util::non_null_variants(arr);

                if !util::has_real_variant(&real) {
                    if let Some(target) = typemap::schema_to_type(schema, Some(name), extra_types) {
                        return Ok(Some(IrType::Alias(IrAlias {
                            name: name.to_string(),
                            description: desc,
                            target,
                        })));
                    }
                }

                return Ok(Some(IrType::Enum(enums::parse_union(
                    name,
                    &real,
                    schema,
                    desc,
                    extra_types,
                )?)));
            }
        }
    }

    if schema.get("type").is_none() && schema.get("contentMediaType").is_some() {
        return Ok(Some(IrType::Struct(IrStruct {
            name: name.to_string(),
            description: desc,
            fields: Vec::new(),
            deny_unknown: true,
            binary: true,
        })));
    }

    if util::type_is(schema, "object")
        && schema.get("properties").is_none()
        && schema.get("additionalProperties").is_none()
    {
        return Ok(Some(IrType::Struct(IrStruct {
            name: name.to_string(),
            description: desc,
            fields: Vec::new(),
            deny_unknown: false,
            binary: false,
        })));
    }

    if util::type_is(schema, "object")
        || schema.get("properties").is_some()
        || schema.get("allOf").is_some()
    {
        let s = parse_object_or_allof(name, schema, desc.clone(), extra_types)?;
        if !s.fields.is_empty() || schema.get("properties").is_some() {
            return Ok(Some(IrType::Struct(s)));
        }
    }

    let strs = enums::enum_strings(schema);
    if !strs.is_empty() {
        return Ok(Some(IrType::Enum(enums::string_enum(name, desc, &strs))));
    }

    if let Some(target) = typemap::schema_to_type(schema, Some(name), extra_types) {
        return Ok(Some(IrType::Alias(IrAlias {
            name: name.to_string(),
            description: desc,
            target,
        })));
    }

    Ok(None)
}

fn push_field(fields: &mut Vec<IrField>, seen: &mut HashSet<String>, f: IrField) {
    if seen.insert(f.name.clone()) {
        fields.push(f);
    }
}

fn parse_object_or_allof(
    name: &str,
    schema: &Value,
    description: Option<String>,
    extra_types: &mut Vec<IrType>,
) -> Result<IrStruct, String> {
    let required = extract_required(schema);
    let mut fields: Vec<IrField> = Vec::new();
    let mut seen: HashSet<String> = HashSet::new();

    if let Some(props) = schema.get("properties").and_then(|p| p.as_object()) {
        for (fname, fschema) in props {
            let f = parse_field(fname, fschema, required.contains(fname), name, extra_types)?;
            push_field(&mut fields, &mut seen, f);
        }
    }

    if let Some(all_of) = schema.get("allOf").and_then(|a| a.as_array()) {
        for part in all_of {
            if let Some(target) = util::ref_name(part) {
                push_field(
                    &mut fields,
                    &mut seen,
                    IrField {
                        name: to_snake_case(target),
                        rust_type: target.to_string(),
                        description: None,
                        flatten: true,
                        bool_const: None,
                        is_required: true,
                    },
                );
                continue;
            }
            if part.get("if").is_none()
                && part.get("then").is_none()
                && part.get("else").is_none()
                && part.get("properties").is_some()
            {
                let part_req = extract_required(part);
                if let Some(props) = part.get("properties").and_then(|p| p.as_object()) {
                    for (fname, fschema) in props {
                        let f = parse_field(
                            fname,
                            fschema,
                            required.contains(fname) || part_req.contains(fname),
                            name,
                            extra_types,
                        )?;
                        push_field(&mut fields, &mut seen, f);
                    }
                }
            }
        }
    }

    Ok(IrStruct {
        name: name.to_string(),
        description,
        fields,
        deny_unknown: false,
        binary: false,
    })
}

fn extract_required(schema: &Value) -> HashSet<String> {
    let mut out: HashSet<String> = schema
        .get("required")
        .and_then(|r| r.as_array())
        .map(|a| {
            a.iter()
                .filter_map(|v| v.as_str().map(String::from))
                .collect()
        })
        .unwrap_or_default();

    if let Some(all_of) = schema.get("allOf").and_then(|a| a.as_array()) {
        for part in all_of {
            out.extend(extract_required(part));
        }
    }

    if schema.get("if").is_some() {
        let branch = |key: &str| -> HashSet<String> {
            schema
                .get(key)
                .map(extract_required)
                .unwrap_or_default()
        };
        let then_req = branch("then");
        let else_req = branch("else");
        out.extend(then_req.intersection(&else_req).cloned());
    }

    out
}
