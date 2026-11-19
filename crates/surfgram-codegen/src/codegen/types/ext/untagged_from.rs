use super::TypeExtension;
use crate::codegen::ident::{make_ident, make_ident_with_rename, parse_type};
use crate::ir::{Ir, IrEnumTag, IrType};
use proc_macro2::TokenStream;
use quote::quote;

pub struct UntaggedFromVariants;

impl TypeExtension for UntaggedFromVariants {
    fn extend(&self, ty: &IrType, _ir: &Ir) -> Option<TokenStream> {
        let IrType::Enum(e) = ty else { return None };
        if !matches!(e.tag, IrEnumTag::Untagged) {
            return None;
        }

        let name = make_ident(&e.name);
        let impls: Vec<TokenStream> = e
            .variants
            .iter()
            .filter(|v| !v.rust_type.is_empty())
            .map(|v| {
                let variant = make_ident_with_rename(&v.name).0;
                let (inner_ty, construct) = if let Some(unboxed) = v
                    .rust_type
                    .strip_prefix("Box<")
                    .and_then(|s| s.strip_suffix('>'))
                {
                    (unboxed, quote! { ::std::boxed::Box::new(value) })
                } else {
                    (v.rust_type.as_str(), quote! { value })
                };
                let inner = parse_type(inner_ty);
                quote! {
                    impl From<#inner> for #name {
                        fn from(value: #inner) -> Self {
                            #name::#variant(#construct)
                        }
                    }
                }
            })
            .collect();

        let str_impls: Vec<TokenStream> = e
            .variants
            .iter()
            .filter(|v| v.rust_type == "String")
            .map(|v| {
                let variant = make_ident_with_rename(&v.name).0;
                quote! {
                    impl From<&str> for #name {
                        fn from(value: &str) -> Self {
                            #name::#variant(value.to_string())
                        }
                    }
                }
            })
            .collect();

        if impls.is_empty() {
            None
        } else {
            Some(quote! { #(#impls)* #(#str_impls)* })
        }
    }
}
