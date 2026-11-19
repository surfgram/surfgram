mod enums;
mod errors;
mod field;
mod methods;
mod schema;
mod typemap;
mod util;

use crate::ir::Ir;
use serde_json::Value;

pub fn parse_ir(api_json: &str) -> Result<Ir, String> {
    let root: Value = serde_json::from_str(api_json).map_err(|e| e.to_string())?;

    let mut extra_types = Vec::new();
    let mut types = schema::parse_schemas(&root, &mut extra_types)?;
    let methods = methods::parse_methods(&root, &mut extra_types)?;
    let errors = errors::parse_errors(&root)?;
    types.extend(extra_types);

    Ok(Ir {
        types,
        methods,
        triggers: Vec::new(),
        errors,
        defaultable: Default::default(),
        request_only: Default::default(),
    })
}