use super::ident::make_ident;
use crate::naming::to_snake_case;
use proc_macro2::{Ident, TokenStream};
use quote::quote;
use std::path::PathBuf;

pub const TYPE_PREAMBLE: &str = "use super::*;\nuse crate::methods::*;\n\n";
pub const METHOD_PREAMBLE: &str = "use super::*;\nuse crate::types::*;\n\n";
pub const BOT_PREAMBLE: &str = "use crate::methods::*;\nuse crate::types::*;\n\n";

pub fn module_name(name: &str) -> String {
    to_snake_case(name)
}

pub fn type_file(name: &str) -> PathBuf {
    PathBuf::from("types").join(format!("{}.rs", module_name(name)))
}

pub fn method_file(name: &str) -> PathBuf {
    PathBuf::from("methods").join(format!("{}.rs", module_name(name)))
}

pub fn module_decls(modules: &[String]) -> TokenStream {
    let mut names = modules.to_vec();
    names.sort();
    names.dedup();
    let idents: Vec<Ident> = names.iter().map(|n| make_ident(n)).collect();
    quote! {
        #(
            pub mod #idents;
            pub use #idents::*;
        )*
    }
}
