use super::Pass;
use crate::ir::*;
use std::collections::HashMap;

pub struct Validate;

impl Pass for Validate {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let mut by_name: HashMap<&str, &IrType> = HashMap::new();
        for t in &ir.types {
            if by_name.insert(t.name(), t).is_some() {
                return Err(format!("duplicate type name `{}`", t.name()));
            }
        }

        for m in &ir.methods {
            if let Some(p) = &m.params {
                match by_name.get(p.as_str()) {
                    Some(IrType::Struct(_)) => {}
                    Some(_) => {
                        return Err(format!(
                            "method `{}`: params type `{p}` is not a struct",
                            m.name
                        ))
                    }
                    None => return Err(format!("method `{}`: unknown params type `{p}`", m.name)),
                }
            }
        }
        Ok(())
    }
}
