use super::Pass;
use crate::ir::*;
use std::collections::{HashMap, HashSet};

pub struct DeriveDefaults;

impl Pass for DeriveDefaults {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let aliases: HashMap<&str, &str> = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Alias(a) => Some((a.name.as_str(), a.target.as_str())),
                _ => None,
            })
            .collect();
        let structs: Vec<&IrStruct> = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Struct(s) => Some(s),
                _ => None,
            })
            .collect();

        let mut defaultable: HashSet<String> = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Enum(e) if e.is_single_value() => Some(e.name.clone()),
                _ => None,
            })
            .collect();
        loop {
            let found: Vec<String> = structs
                .iter()
                .filter(|s| !defaultable.contains(&s.name))
                .filter(|s| {
                    s.fields
                        .iter()
                        .all(|f| has_default(&f.rust_type, &defaultable, &aliases, &mut Vec::new()))
                })
                .map(|s| s.name.clone())
                .collect();
            if found.is_empty() {
                break;
            }
            defaultable.extend(found);
        }

        ir.defaultable = defaultable;
        Ok(())
    }
}

fn unwrap_generic<'a>(ty: &'a str, wrapper: &str) -> Option<&'a str> {
    ty.strip_prefix(wrapper)?
        .strip_prefix('<')?
        .strip_suffix('>')
}

fn has_default<'a>(
    ty: &'a str,
    defaultable: &HashSet<String>,
    aliases: &HashMap<&'a str, &'a str>,
    seen: &mut Vec<&'a str>,
) -> bool {
    let ty = ty.trim();
    if unwrap_generic(ty, "Option").is_some() || unwrap_generic(ty, "Vec").is_some() {
        return true;
    }
    if let Some(inner) = unwrap_generic(ty, "Box") {
        return has_default(inner, defaultable, aliases, seen);
    }
    if matches!(
        ty,
        "String"
            | "bool"
            | "f32"
            | "f64"
            | "i8"
            | "i16"
            | "i32"
            | "i64"
            | "u8"
            | "u16"
            | "u32"
            | "u64"
            | "serde_json::Value"
    ) {
        return true;
    }
    if defaultable.contains(ty) {
        return true;
    }
    if let Some(target) = aliases.get(ty) {
        if seen.contains(&ty) {
            return false;
        }
        seen.push(ty);
        return has_default(target, defaultable, aliases, seen);
    }
    false
}
