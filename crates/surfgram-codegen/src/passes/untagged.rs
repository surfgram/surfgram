use super::Pass;
use crate::ir::*;
use std::collections::{HashMap, HashSet};

pub struct PatchUntagged;

impl Pass for PatchUntagged {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let to_deny = find_strict_subsets(&ir.types);
        apply_deny(&mut ir.types, &to_deny);
        sort_variants(&mut ir.types);
        dedupe_variants(&mut ir.types);
        Ok(())
    }
}

fn is_untagged(e: &IrEnum) -> bool {
    matches!(e.tag, IrEnumTag::Untagged)
}

fn find_strict_subsets(types: &[IrType]) -> HashSet<String> {
    let tm = type_map(types);

    let mut to_deny: HashSet<String> = HashSet::new();
    for t in types {
        let IrType::Enum(e) = t else { continue };
        if !is_untagged(e) {
            continue;
        }
        for i in 0..e.variants.len() {
            for j in 0..e.variants.len() {
                if i == j {
                    continue;
                }
                if is_strict_field_subset(&e.variants[i].rust_type, &e.variants[j].rust_type, &tm) {
                    to_deny.insert(e.variants[i].rust_type.clone());
                }
            }
        }
    }
    to_deny
}

fn apply_deny(types: &mut [IrType], to_deny: &HashSet<String>) {
    for t in types.iter_mut() {
        if let IrType::Struct(s) = t {
            if to_deny.contains(&s.name) {
                s.deny_unknown = true;
            }
        }
    }
}

fn sort_variants(types: &mut [IrType]) {
    let tm = type_map(types);

    for t in types.iter_mut() {
        if let IrType::Enum(e) = t {
            if !is_untagged(e) || e.variants.len() < 2 {
                continue;
            }
            e.variants.sort_by_key(|v| specificity_key(v, &tm));
        }
    }
}

fn dedupe_variants(types: &mut [IrType]) {
    for t in types.iter_mut() {
        let IrType::Enum(e) = t else { continue };
        if !is_untagged(e) {
            continue;
        }
        let mut seen: HashSet<String> = HashSet::new();
        e.variants.retain(|v| seen.insert(v.rust_type.clone()));
    }
}

fn specificity_key(v: &IrVariant, types: &HashMap<String, IrType>) -> (i64, i64, i64, i64) {
    match types.get(&v.rust_type) {
        Some(IrType::Struct(s)) => {
            let has_deny = if s.deny_unknown { 1i64 } else { 0 };
            let required = s
                .fields
                .iter()
                .filter(|f| !f.flatten && !f.rust_type.starts_with("Option<"))
                .count() as i64;
            let field_count = s.fields.len() as i64;

            let deny_priority = if has_deny != 0 && required >= 2 {
                -1
            } else {
                0
            };
            (deny_priority, -required, -field_count, 0)
        }
        _ => (0, 0, 0, 0),
    }
}

fn is_strict_field_subset(a: &str, b: &str, types: &HashMap<String, IrType>) -> bool {
    let (Some(IrType::Struct(a)), Some(IrType::Struct(b))) = (types.get(a), types.get(b)) else {
        return false;
    };
    if a.fields.iter().any(|f| f.flatten) {
        return false;
    }
    if a.fields.len() >= b.fields.len() {
        return false;
    }
    a.fields
        .iter()
        .filter(|f| !f.flatten)
        .all(|af| b.fields.iter().any(|bf| bf.name == af.name))
}
