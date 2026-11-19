use crate::codegen::ident::{doc_attr, make_ident, parse_type};
use crate::ir::IrAlias;
use proc_macro2::TokenStream;
use quote::quote;

pub fn gen_alias(a: &IrAlias) -> TokenStream {
    let name = make_ident(&a.name);
    let doc = doc_attr(&a.description);
    let target = parse_type(&a.target);
    quote! {
        #doc
        pub type #name = #target;
    }
}
