use super::Pass;
use crate::ir::*;
use std::collections::HashSet;

pub struct AttachableFields;

const ATTACH_MARKER: &str = "attach://";

impl Pass for AttachableFields {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let binary: HashSet<&str> = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Struct(s) if s.binary => Some(s.name.as_str()),
                _ => None,
            })
            .collect();

        let Some(file_input) = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Enum(e) if is_file_union(e, &binary) => Some(e.name.clone()),
                _ => None,
            })
            .min()
        else {
            return Ok(());
        };

        for t in &mut ir.types {
            let IrType::Struct(s) = t else { continue };
            if s.binary {
                continue;
            }
            for f in &mut s.fields {
                let mentions_attach = f
                    .description
                    .as_deref()
                    .is_some_and(|d| d.contains(ATTACH_MARKER));
                if !mentions_attach || f.flatten || f.bool_const.is_some() {
                    continue;
                }
                match f.rust_type.as_str() {
                    "String" => f.rust_type = file_input.clone(),
                    "Option<String>" => f.rust_type = format!("Option<{file_input}>"),
                    _ => {}
                }
            }
        }
        Ok(())
    }
}

fn is_file_union(e: &IrEnum, binary: &HashSet<&str>) -> bool {
    if !matches!(e.tag, IrEnumTag::Untagged) || e.variants.len() != 2 {
        return false;
    }
    let has_binary = e.variants.iter().any(|v| binary.contains(v.rust_type.as_str()));
    let has_string = e.variants.iter().any(|v| v.rust_type == "String");
    has_binary && has_string
}
