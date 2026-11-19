mod codegen;
mod ir;
mod naming;
mod output;
mod parser;
mod passes;

use std::fs;
use std::path::Path;

fn load(schema: &Path) -> Result<ir::Ir, String> {
    let json = fs::read_to_string(schema)
        .map_err(|e| format!("failed to read {}: {e}", schema.display()))?;
    let mut ir = parser::parse_ir(&json).map_err(|e| format!("failed to parse schema: {e}"))?;
    passes::run_all(&mut ir)?;
    Ok(ir)
}

pub fn generate_api(schema: &Path, out_dir: &Path) -> Result<(), String> {
    let ir = load(schema)?;
    let files = codegen::generate(&ir, codegen::api_generators());
    let api_dir = out_dir.join("api");
    output::write_files(&api_dir, &files)?;
    output::write_api_root(out_dir, &api_dir)
}

pub fn generate_macros(schema: &Path, out_dir: &Path) -> Result<(), String> {
    let ir = load(schema)?;
    let files = codegen::generate(&ir, codegen::macro_generators());
    output::write_files(&out_dir.join("macros"), &files)
}
