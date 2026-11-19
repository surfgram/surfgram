use super::util;
use crate::ir::*;
use serde_json::Value;

pub(super) fn schema_to_type(
    schema: &Value,
    parent_inline_name: Option<&str>,
    extra_types: &mut Vec<IrType>,
) -> Option<String> {
    if let Some(name) = util::ref_name(schema) {
        return Some(name.to_string());
    }
    if let Some(ty) = schema.get("type").and_then(|t| t.as_str()) {
        return Some(match ty {
            "string" => "String".into(),
            "integer" => match schema.get("format").and_then(|f| f.as_str()) {
                Some("int32") => "i32".into(),
                Some("int64") => "i64".into(),
                _ => "i64".into(),
            },
            "number" => "f64".into(),
            "boolean" => "bool".into(),
            "array" => {
                let items = schema.get("items")?;
                let item_ty = array_item_type(items, parent_inline_name, extra_types)?;
                format!("Vec<{}>", item_ty)
            }
            "object" => "serde_json::Value".into(),
            _ => return None,
        });
    }
    if schema.get("oneOf").is_some() || schema.get("anyOf").is_some() {
        return Some("serde_json::Value".into());
    }
    None
}

fn array_item_type(
    items: &Value,
    parent_inline_name: Option<&str>,
    extra_types: &mut Vec<IrType>,
) -> Option<String> {
    if let Some(name) = util::ref_name(items) {
        return Some(name.to_string());
    }
    for key in ["anyOf", "oneOf"] {
        if let Some(arr) = items.get(key).and_then(|a| a.as_array()) {
            let refs: Option<Vec<&str>> = arr.iter().map(util::ref_name).collect();
            if let Some(refs) = refs {
                if !refs.is_empty() {
                    if let Some(parent) = parent_inline_name {
                        let enum_name = format!("{}Item", parent);
                        if !extra_types.iter().any(|t| t.name() == enum_name) {
                            let mut variants: Vec<IrVariant> = refs
                                .iter()
                                .map(|r| IrVariant {
                                    name: r.to_string(),
                                    rust_type: r.to_string(),
                                    description: None,
                                    serde_rename: None,
                                })
                                .collect();
                            crate::naming::dedup_variant_names(&mut variants);
                            extra_types.push(IrType::Enum(IrEnum {
                                name: enum_name.clone(),
                                description: None,
                                variants,
                                tag: IrEnumTag::Untagged,
                            }));
                        }
                        return Some(enum_name);
                    }
                    return Some("serde_json::Value".into());
                }
            }
            return Some("serde_json::Value".into());
        }
    }
    schema_to_type(items, parent_inline_name, extra_types)
}

pub(super) fn maybe_optional(t: String, is_required: bool, nullable: bool) -> String {
    if t.starts_with("Option<") {
        return t;
    }
    if !is_required || nullable {
        format!("Option<{}>", t)
    } else {
        t
    }
}
