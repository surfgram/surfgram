mod constructors;
mod has_file;
mod untagged_from;

use crate::ir::{Ir, IrType};
use proc_macro2::TokenStream;

pub trait TypeExtension {
    fn extend(&self, ty: &IrType, ir: &Ir) -> Option<TokenStream>;
}

pub fn default_extensions() -> Vec<Box<dyn TypeExtension>> {
    vec![
        Box::new(untagged_from::UntaggedFromVariants),
        Box::new(constructors::Constructors),
        Box::new(has_file::HasFile),
    ]
}
