use super::typemap::schema_to_type;
use super::util;
use crate::ir::*;
use crate::naming::{dedup_variant_names, enum_variant_name};
use serde_json::Value;

pub(super) fn string_enum_variants(values: &[String]) -> Vec<IrVariant> {
    let mut variants: Vec<IrVariant> = values
        .iter()
        .enumerate()
        .map(|(i, s)| IrVariant {
            name: enum_variant_name(s, i),
            rust_type: String::new(),
            description: None,
            serde_rename: Some(s.clone()),
        })
        .collect();
    dedup_variant_names(&mut variants);
    variants
}

pub(super) fn string_enum(name: &str, description: Option<String>, values: &[String]) -> IrEnum {
    IrEnum {
        name: name.to_string(),
        description,
        variants: string_enum_variants(values),
        tag: IrEnumTag::StringEnum,
    }
}

pub(super) fn const_enum(name: &str, value: &str) -> IrEnum {
    IrEnum {
        name: name.to_string(),
        description: None,
        variants: vec![IrVariant {
            name: enum_variant_name(value, 0),
            rust_type: String::new(),
            description: None,
            serde_rename: Some(value.to_string()),
        }],
        tag: IrEnumTag::StringEnum,
    }
}

pub(super) fn parse_union(
    name: &str,
    variants_schema: &[Value],
    schema: &Value,
    description: Option<String>,
    extra_types: &mut Vec<IrType>,
) -> Result<IrEnum, String> {
    let mapping = schema
        .get("discriminator")
        .and_then(|d| d.get("mapping"))
        .and_then(|m| m.as_object());

    let mut variants = Vec::new();
    for (idx, v) in variants_schema.iter().enumerate() {
        if v.get("type").and_then(|t| t.as_str()) == Some("null") {
            continue;
        }
        if let Some(r) = v.get("$ref").and_then(|r| r.as_str()) {
            let target = match r.split('/').next_back() {
                Some(t) => t,
                None => continue,
            };
            let variant_name = mapping
                .and_then(|m| m.iter().find(|(_, mv)| mv.as_str() == Some(r)))
                .map(|(k, _)| enum_variant_name(k, idx))
                .unwrap_or_else(|| enum_variant_name(target, idx));
            variants.push(IrVariant {
                name: variant_name,
                rust_type: target.to_string(),
                description: None,
                serde_rename: None,
            });
        } else if let Some(t) = schema_to_type(v, None, extra_types) {
            let variant_name = match v.get("type").and_then(|x| x.as_str()) {
                Some("string") => "Text".to_string(),
                Some("integer") => "Integer".to_string(),
                Some("number") => "Number".to_string(),
                Some("boolean") => "Boolean".to_string(),
                Some("array") => "Array".to_string(),
                _ => format!("Variant{}", idx),
            };
            variants.push(IrVariant {
                name: variant_name,
                rust_type: t,
                description: None,
                serde_rename: None,
            });
        }
    }
    dedup_variant_names(&mut variants);

    Ok(IrEnum {
        name: name.to_string(),
        description,
        variants,
        tag: IrEnumTag::Untagged,
    })
}

pub(super) fn enum_strings(schema: &Value) -> Vec<String> {
    schema
        .get("enum")
        .and_then(|e| e.as_array())
        .map(|a| util::string_values(a))
        .unwrap_or_default()
}
