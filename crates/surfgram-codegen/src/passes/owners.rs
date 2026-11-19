use super::bindings::bind_for;
use super::Pass;
use crate::ir::*;
use std::cmp::Reverse;
use std::collections::HashMap;

pub struct AssignMethodOwners;

impl Pass for AssignMethodOwners {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let types = type_map(&ir.types);
        let structs: Vec<(String, String)> = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Struct(s) if !s.binary => Some((s.name.clone(), s.name.to_lowercase())),
                _ => None,
            })
            .collect();

        for m in &mut ir.methods {
            m.owner = None;
            let Some(params) = m.params.as_deref() else {
                continue;
            };
            let method = m.name.to_lowercase();
            let returned = returned_struct(&m.result, &types);

            m.owner = structs
                .iter()
                .filter(|(name, lower)| {
                    returned.as_deref() == Some(name.as_str()) || method.contains(lower.as_str())
                })
                .filter_map(|(name, _)| {
                    let supplied = bind_for(name, params, &types).len();
                    (supplied > 0).then(|| {
                        let key = (
                            Reverse(supplied),
                            returned.as_deref() != Some(name.as_str()),
                            Reverse(name.len()),
                            name.clone(),
                        );
                        (key, name.clone())
                    })
                })
                .min_by(|a, b| a.0.cmp(&b.0))
                .map(|(_, name)| name);
        }
        Ok(())
    }
}

fn returned_struct(result: &str, types: &HashMap<String, IrType>) -> Option<String> {
    let mut found: Vec<String> = Vec::new();
    for name in type_names(result) {
        collect_structs(&name, types, &mut found, 0);
    }
    found.sort();
    found.dedup();
    if found.len() == 1 {
        found.pop()
    } else {
        None
    }
}

fn collect_structs(
    name: &str,
    types: &HashMap<String, IrType>,
    out: &mut Vec<String>,
    depth: usize,
) {
    if depth > 4 {
        return;
    }
    match types.get(name) {
        Some(IrType::Struct(s)) if !s.binary => out.push(s.name.clone()),
        Some(IrType::Enum(e)) => {
            for v in &e.variants {
                for inner in type_names(&v.rust_type) {
                    collect_structs(&inner, types, out, depth + 1);
                }
            }
        }
        Some(IrType::Alias(a)) => {
            for inner in type_names(&a.target) {
                collect_structs(&inner, types, out, depth + 1);
            }
        }
        _ => {}
    }
}
