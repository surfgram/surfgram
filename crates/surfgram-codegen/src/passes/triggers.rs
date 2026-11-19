use super::Pass;
use crate::ir::*;
use std::collections::HashMap;

const FILTER_FIELDS: &[&str] = &["text", "data", "query", "invoice_payload", "question"];

pub struct DeriveTriggers;

impl Pass for DeriveTriggers {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let types = type_map(&ir.types);
        let Some(IrType::Struct(update)) = types.get("Update") else {
            return Err("the schema has no `Update` struct".to_string());
        };

        let mut triggers = Vec::new();
        for f in &update.fields {
            if f.flatten || f.bool_const.is_some() {
                continue;
            }
            let Some(inner) = f
                .rust_type
                .strip_prefix("Option<")
                .and_then(|s| s.strip_suffix('>'))
            else {
                continue;
            };
            let name = unbox(inner);
            let Some((payload_enum, payloads)) = payloads_of(name, &types) else {
                continue;
            };
            triggers.push(IrTrigger {
                field: f.name.clone(),
                payload_enum,
                payloads,
            });
        }

        ir.triggers = triggers;
        Ok(())
    }
}

fn unbox(s: &str) -> &str {
    s.strip_prefix("Box<")
        .and_then(|s| s.strip_suffix('>'))
        .unwrap_or(s)
}

fn payloads_of(
    name: &str,
    types: &HashMap<String, IrType>,
) -> Option<(Option<String>, Vec<IrPayload>)> {
    match types.get(name)? {
        IrType::Struct(s) => Some((
            None,
            vec![IrPayload {
                ty: s.name.clone(),
                variant: None,
                filter: find_filter(s),
            }],
        )),
        IrType::Enum(e) if matches!(e.tag, IrEnumTag::Untagged) => {
            let mut payloads = vec![IrPayload {
                ty: e.name.clone(),
                variant: None,
                filter: None,
            }];
            for v in &e.variants {
                let inner = unbox(&v.rust_type);
                if let Some(IrType::Struct(s)) = types.get(inner) {
                    payloads.push(IrPayload {
                        ty: s.name.clone(),
                        variant: Some(v.name.clone()),
                        filter: find_filter(s),
                    });
                }
            }
            if payloads.len() == 1 {
                return None;
            }
            Some((Some(e.name.clone()), payloads))
        }
        _ => None,
    }
}

fn find_filter(s: &IrStruct) -> Option<IrFilter> {
    FILTER_FIELDS.iter().find_map(|candidate| {
        let f = s.field(candidate)?;
        match f.rust_type.as_str() {
            "String" => Some(IrFilter {
                field: f.name.clone(),
            }),
            "Option<String>" => Some(IrFilter {
                field: f.name.clone(),
            }),
            _ => None,
        }
    })
}