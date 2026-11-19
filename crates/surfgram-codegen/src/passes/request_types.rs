use super::Pass;
use crate::ir::*;
use std::collections::{HashMap, HashSet};

pub struct FindRequestTypes;

impl Pass for FindRequestTypes {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let edges: HashMap<&str, Vec<String>> = ir
            .types
            .iter()
            .map(|t| (t.name(), referenced_types(t)))
            .collect();

        let params: Vec<String> = ir.methods.iter().filter_map(|m| m.params.clone()).collect();
        let results: Vec<String> = ir.methods.iter().flat_map(|m| type_names(&m.result)).collect();

        let sent = reach(&edges, params.iter().cloned());
        let received = reach(&edges, results.into_iter());

        let params_set: HashSet<&String> = params.iter().collect();
        ir.request_only = sent
            .into_iter()
            .filter(|n| !received.contains(n) && !params_set.contains(n))
            .collect();
        Ok(())
    }
}

fn referenced_types(t: &IrType) -> Vec<String> {
    match t {
        IrType::Struct(s) => s.fields.iter().flat_map(|f| type_names(&f.rust_type)).collect(),
        IrType::Enum(e) => e.variants.iter().flat_map(|v| type_names(&v.rust_type)).collect(),
        IrType::Alias(a) => type_names(&a.target),
    }
}

fn reach(
    edges: &HashMap<&str, Vec<String>>,
    roots: impl Iterator<Item = String>,
) -> HashSet<String> {
    let mut seen: HashSet<String> = HashSet::new();
    let mut stack: Vec<String> = roots.collect();
    while let Some(name) = stack.pop() {
        if !seen.insert(name.clone()) {
            continue;
        }
        if let Some(next) = edges.get(name.as_str()) {
            stack.extend(next.iter().cloned());
        }
    }
    seen
}
