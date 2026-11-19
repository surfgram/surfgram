use super::ident::{make_ident, make_ident_with_rename, parse_type};
use crate::ir::{Ir, IrField, IrMethod, IrStruct, IrType};
use crate::naming::{to_pascal_case, to_snake_case};
use proc_macro2::{Ident, TokenStream};
use quote::quote;

pub fn method_fn(m: &IrMethod) -> Ident {
    make_ident(&to_snake_case(&m.name))
}

pub fn builder_ident(m: &IrMethod) -> Ident {
    make_ident(&format!("{}Builder", to_pascal_case(&m.name)))
}

pub fn buildable<'a>(ir: &'a Ir, m: &IrMethod) -> Option<&'a IrStruct> {
    let name = m.params.as_deref()?;
    let params = ir.types.iter().find_map(|t| match t {
        IrType::Struct(s) if s.name == name => Some(s),
        _ => None,
    })?;
    if params.fields.iter().any(|f| f.flatten) {
        return None;
    }
    Some(params)
}

pub fn required_args(params: &IrStruct) -> Vec<&IrField> {
    params
        .fields
        .iter()
        .filter(|f| f.is_required_arg())
        .collect()
}

pub fn field_ident(f: &IrField) -> Ident {
    make_ident_with_rename(&f.name).0
}

pub fn arg_decl(f: &IrField) -> TokenStream {
    let id = field_ident(f);
    let ty = parse_type(&f.rust_type);
    quote! { #id: impl Into<#ty> }
}
