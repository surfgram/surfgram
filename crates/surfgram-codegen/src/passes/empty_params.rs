use super::Pass;
use crate::ir::*;
use crate::naming::to_pascal_case;

pub struct MaterializeEmptyParams;

impl Pass for MaterializeEmptyParams {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        for m in &mut ir.methods {
            if m.params.is_some() {
                continue;
            }
            let name = format!("{}Params", to_pascal_case(&m.name));
            ir.types.push(IrType::Struct(IrStruct {
                name: name.clone(),
                description: Some(format!(
                    "Parameters of `{}` (the method takes none).",
                    m.name
                )),
                fields: Vec::new(),
                deny_unknown: false,
                binary: false,
            }));
            m.params = Some(name);
        }
        Ok(())
    }
}
