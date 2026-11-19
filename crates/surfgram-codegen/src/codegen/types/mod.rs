mod aliases;
mod enums;
pub mod ext;
mod structs;

use super::{layout, GeneratedFile, Generator};
use crate::ir::{Ir, IrType};
use ext::TypeExtension;
use proc_macro2::TokenStream;
use std::path::PathBuf;

const HELPERS: &str = include_str!("helpers.txt");

pub struct TypesGenerator {
    extensions: Vec<Box<dyn TypeExtension>>,
}

impl Default for TypesGenerator {
    fn default() -> Self {
        Self {
            extensions: ext::default_extensions(),
        }
    }
}

impl Generator for TypesGenerator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile> {
        let mut files = Vec::new();
        let mut modules = Vec::new();

        for t in &ir.types {
            let mut tokens = gen_type(t, ir);
            for e in &self.extensions {
                tokens.extend(e.extend(t, ir));
            }
            files.push(GeneratedFile {
                path: layout::type_file(t.name()),
                preamble: layout::TYPE_PREAMBLE.to_string(),
                tokens,
            });
            modules.push(layout::module_name(t.name()));
        }

        files.push(GeneratedFile {
            path: PathBuf::from("types/mod.rs"),
            preamble: HELPERS.to_string(),
            tokens: layout::module_decls(&modules),
        });
        files
    }
}

fn gen_type(t: &IrType, ir: &Ir) -> TokenStream {
    match t {
        IrType::Struct(s) if s.binary => structs::gen_binary(s),
        IrType::Struct(s) => structs::gen_struct(s, ir.defaultable.contains(&s.name)),
        IrType::Enum(e) => enums::gen_enum(e),
        IrType::Alias(a) => aliases::gen_alias(a),
    }
}
