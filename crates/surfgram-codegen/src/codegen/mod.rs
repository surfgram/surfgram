mod bindings;
mod builders;
mod ident;
mod layout;
mod macros;
mod methods;
mod request;
mod types;
mod errors;

use crate::ir::Ir;
use proc_macro2::TokenStream;
use std::collections::HashMap;
use std::path::PathBuf;

pub struct GeneratedFile {
    pub path: PathBuf,
    pub preamble: String,
    pub tokens: TokenStream,
}

pub trait Generator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile>;
}

pub fn api_generators() -> Vec<Box<dyn Generator>> {
    vec![
        Box::new(types::TypesGenerator::default()),
        Box::new(methods::MethodsGenerator),
        Box::new(builders::BuildersGenerator),
        Box::new(bindings::BindingsGenerator),
        Box::new(errors::ErrorsGenerator),
    ]
}


pub fn macro_generators() -> Vec<Box<dyn Generator>> {
    vec![Box::new(macros::MacrosGenerator)]
}

pub fn generate(ir: &Ir, generators: Vec<Box<dyn Generator>>) -> Vec<GeneratedFile> {
    let mut order: Vec<PathBuf> = Vec::new();
    let mut files: HashMap<PathBuf, GeneratedFile> = HashMap::new();

    for generator in generators {
        for file in generator.generate(ir) {
            match files.get_mut(&file.path) {
                Some(existing) => existing.tokens.extend(file.tokens),
                None => {
                    order.push(file.path.clone());
                    files.insert(file.path.clone(), file);
                }
            }
        }
    }

    order.into_iter().filter_map(|p| files.remove(&p)).collect()
}
