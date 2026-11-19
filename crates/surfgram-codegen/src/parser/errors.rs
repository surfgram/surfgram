use super::typemap;
use super::util;
use crate::ir::{IrError, IrErrorField, IrErrorParameters};
use crate::naming::to_snake_case;
use serde_json::Value;
use std::collections::{BTreeMap, BTreeSet};

pub(super) fn parse_errors(root: &Value) -> Result<Vec<IrError>, String> {
    let Some(schemas) = root.pointer("/components/schemas").and_then(|s| s.as_object()) else {
        return Ok(Vec::new());
    };
    let mut out = Vec::new();
    for (name, schema) in schemas {
        if let Some(e) = parse_error(name, schema, root)? {
            out.push(e);
        }
    }
    Ok(out)
}

fn parse_error(name: &str, schema: &Value, root: &Value) -> Result<Option<IrError>, String> {
    let Some(props) = schema.get("properties").and_then(|p| p.as_object()) else {
        return Ok(None);
    };
    let is_error = props
        .get("ok")
        .and_then(|o| o.get("const"))
        .and_then(|c| c.as_bool())
        == Some(false);
    if !is_error {
        return Ok(None);
    }
    let code = props
        .get("error_code")
        .and_then(|e| e.get("const"))
        .and_then(|c| c.as_i64())
        .ok_or_else(|| format!("error schema `{name}` has no `const` error_code"))?;

    let parameters = if let Some(params) = props.get("parameters") {
        let ty_name = format!("{}Parameters", name);
        let is_required = schema
            .get("required")
            .and_then(|r| r.as_array())
            .is_some_and(|r| r.iter().any(|v| v.as_str() == Some("parameters")));

        let mut flat_props: BTreeMap<String, Value> = BTreeMap::new();
        let mut flat_required: BTreeSet<String> = BTreeSet::new();
        flatten(root, params, &mut flat_props, &mut flat_required, 0)?;

        let fields: Vec<IrErrorField> = flat_props
            .iter()
            .map(|(fname, fschema)| {
                let ty = typemap::schema_to_type(fschema, None, &mut Vec::new())
                    .unwrap_or_else(|| "serde_json::Value".to_string());
                let is_required = flat_required.contains(fname);
                let rust_type = if is_required {
                    ty
                } else {
                    format!("Option<{}>", ty)
                };
                IrErrorField {
                    name: to_snake_case(fname),
                    rust_type,
                    description: util::description(fschema),
                    is_required,
                }
            })
            .collect();
        Some(IrErrorParameters {
            ty_name,
            is_required,
            fields,
        })
    } else {
        None
    };

    Ok(Some(IrError {
        name: name.to_string(),
        description: util::description(schema),
        code,
        parameters,
    }))
}

fn flatten(
    root: &Value,
    node: &Value,
    props: &mut BTreeMap<String, Value>,
    required: &mut BTreeSet<String>,
    depth: usize,
) -> Result<(), String> {
    if depth > 16 {
        return Err("allOf/$ref nesting too deep".into());
    }
    if let Some(arr) = node.get("allOf").and_then(|a| a.as_array()) {
        for part in arr {
            flatten(root, part, props, required, depth + 1)?;
        }
    } else if let Some(r) = node.get("$ref").and_then(|r| r.as_str()) {
        let target = root
            .pointer(r.strip_prefix('#').unwrap_or(r))
            .ok_or_else(|| format!("cannot resolve `{r}`"))?;
        flatten(root, target, props, required, depth + 1)?;
    } else {
        if let Some(p) = node.get("properties").and_then(|p| p.as_object()) {
            for (k, v) in p {
                props.insert(k.clone(), v.clone());
            }
        }
        if let Some(r) = node.get("required").and_then(|r| r.as_array()) {
            for req in r {
                if let Some(s) = req.as_str() {
                    required.insert(s.to_string());
                }
            }
        }
    }
    Ok(())
}