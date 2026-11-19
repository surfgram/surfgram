use super::Pass;
use crate::ir::*;
use std::collections::{HashMap, HashSet};

pub struct ApplyBoxing;

impl Pass for ApplyBoxing {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        box_cycles(&mut ir.types);
        box_optional_user_types(&mut ir.types);
        Ok(())
    }
}

fn box_cycles(types: &mut [IrType]) {
    let deps = dependencies(types);
    let reachable = reachability(&deps);

    for t in types.iter_mut() {
        let self_name = t.name().to_string();
        match t {
            IrType::Struct(s) => {
                for f in &mut s.fields {
                    if f.flatten {
                        continue;
                    }
                    for n in type_names(&f.rust_type) {
                        if let Some(r) = reachable.get(&n) {
                            if r.contains(&self_name) {
                                f.rust_type = boxify(&f.rust_type, &n);
                            }
                        }
                    }
                }
            }
            IrType::Enum(e) => {
                for v in &mut e.variants {
                    if v.rust_type.is_empty() {
                        continue;
                    }
                    for n in type_names(&v.rust_type) {
                        if let Some(r) = reachable.get(&n) {
                            if r.contains(&self_name) {
                                v.rust_type = boxify(&v.rust_type, &n);
                            }
                        }
                    }
                }
            }
            IrType::Alias(_) => {}
        }
    }
}

fn box_optional_user_types(types: &mut [IrType]) {
    let user: HashSet<String> = types
        .iter()
        .filter_map(|t| match t {
            IrType::Struct(s) => Some(s.name.clone()),
            IrType::Enum(e) => Some(e.name.clone()),
            IrType::Alias(_) => None,
        })
        .collect();

    for t in types.iter_mut() {
        match t {
            IrType::Struct(s) => {
                for f in &mut s.fields {
                    if f.flatten {
                        continue;
                    }
                    let Some(inner) = f
                        .rust_type
                        .strip_prefix("Option<")
                        .and_then(|s| s.strip_suffix('>'))
                    else {
                        continue;
                    };
                    if inner.starts_with("Box<") {
                        continue;
                    }
                    if user.contains(inner) {
                        f.rust_type = format!("Option<Box<{}>>", inner);
                    }
                }
            }
            IrType::Enum(e) if matches!(e.tag, IrEnumTag::Untagged) => {
                for v in &mut e.variants {
                    if v.rust_type.is_empty() || v.rust_type.starts_with("Box<") {
                        continue;
                    }
                    if user.contains(&v.rust_type) {
                        v.rust_type = format!("Box<{}>", v.rust_type);
                    }
                }
            }
            _ => {}
        }
    }
}

fn dependencies(types: &[IrType]) -> HashMap<String, HashSet<String>> {
    let mut deps: HashMap<String, HashSet<String>> = HashMap::new();
    for t in types {
        let mut d = HashSet::new();
        match t {
            IrType::Struct(s) => {
                for f in &s.fields {
                    if !f.flatten {
                        d.extend(type_names(&f.rust_type));
                    }
                }
            }
            IrType::Enum(e) => {
                for v in &e.variants {
                    if !v.rust_type.is_empty() {
                        d.extend(type_names(&v.rust_type));
                    }
                }
            }
            IrType::Alias(a) => d.extend(type_names(&a.target)),
        }
        deps.insert(t.name().to_string(), d);
    }
    deps
}

fn reachability(deps: &HashMap<String, HashSet<String>>) -> HashMap<String, HashSet<String>> {
    let mut reachable: HashMap<String, HashSet<String>> = HashMap::new();
    for name in deps.keys() {
        let mut visited: HashSet<String> = HashSet::new();
        let mut stack: Vec<String> = deps[name].iter().cloned().collect();
        while let Some(n) = stack.pop() {
            if !visited.insert(n.clone()) {
                continue;
            }
            if let Some(nd) = deps.get(&n) {
                stack.extend(nd.iter().cloned());
            }
        }
        reachable.insert(name.clone(), visited);
    }
    reachable
}
