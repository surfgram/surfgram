use super::TypeExtension;
use crate::codegen::ident::{doc_attr, make_ident_with_rename, parse_type};
use crate::ir::{Ir, IrEnum, IrField, IrStruct, IrType};
use proc_macro2::TokenStream;
use quote::quote;

pub struct Constructors;

impl TypeExtension for Constructors {
    fn extend(&self, ty: &IrType, ir: &Ir) -> Option<TokenStream> {
        let IrType::Struct(s) = ty else { return None };
        if s.binary || s.fields.is_empty() || !ir.request_only.contains(&s.name) {
            return None;
        }
        if s.fields.iter().any(|f| f.flatten) {
            return None;
        }

        let single_values: Vec<&IrEnum> = ir
            .types
            .iter()
            .filter_map(|t| match t {
                IrType::Enum(e) if e.is_single_value() => Some(e),
                _ => None,
            })
            .collect();
        let is_fixed = |f: &IrField| single_values.iter().any(|e| e.name == f.rust_type);

        Some(gen_impl(s, &is_fixed))
    }
}

fn gen_impl(s: &IrStruct, is_fixed: &dyn Fn(&IrField) -> bool) -> TokenStream {
    let name = make_ident_with_rename(&s.name).0;
    let doc = format!("Creates a `{}` with its required fields set.", s.name);

    let is_arg = |f: &IrField| f.is_required_arg() && !is_fixed(f);

    let args: Vec<TokenStream> = s
        .fields
        .iter()
        .filter(|f| is_arg(f))
        .map(|f| {
            let id = make_ident_with_rename(&f.name).0;
            let ty = parse_type(&f.rust_type);
            quote! { #id: impl Into<#ty> }
        })
        .collect();

    let inits: Vec<TokenStream> = s
        .fields
        .iter()
        .map(|f| {
            let id = make_ident_with_rename(&f.name).0;
            if is_arg(f) {
                quote! { #id: #id.into(), }
            } else if let Some(b) = f.bool_const {
                let v = if f.is_required { b } else { !b };
                quote! { #id: #v, }
            } else if f.rust_type.starts_with("Option<") {
                quote! { #id: None, }
            } else {
                quote! { #id: Default::default(), }
            }
        })
        .collect();

    let setters: Vec<TokenStream> = s
        .fields
        .iter()
        .filter(|f| f.bool_const.is_none() && f.rust_type.starts_with("Option<"))
        .map(gen_setter)
        .collect();

    quote! {
        impl #name {
            #[doc = #doc]
            pub fn new(#(#args),*) -> Self {
                Self { #(#inits)* }
            }

            #(#setters)*
        }
    }
}

fn gen_setter(f: &IrField) -> TokenStream {
    let id = make_ident_with_rename(&f.name).0;
    let doc = doc_attr(&f.description);
    let inner = f
        .rust_type
        .strip_prefix("Option<")
        .and_then(|s| s.strip_suffix('>'))
        .unwrap_or(&f.rust_type);

    let (accept, construct) =
        if let Some(unboxed) = inner.strip_prefix("Box<").and_then(|s| s.strip_suffix('>')) {
            (unboxed, quote! { ::std::boxed::Box::new(value.into()) })
        } else {
            (inner, quote! { value.into() })
        };

    let ty = parse_type(accept);
    quote! {
        #doc
        pub fn #id(mut self, value: impl Into<#ty>) -> Self {
            self.#id = Some(#construct);
            self
        }
    }
}
