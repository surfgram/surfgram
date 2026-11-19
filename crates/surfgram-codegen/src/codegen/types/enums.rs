use crate::codegen::ident::{doc_attr, make_ident, make_ident_with_rename, parse_type};
use crate::ir::{IrEnum, IrEnumTag, IrVariant};
use proc_macro2::{Span, TokenStream};
use quote::quote;
use syn::LitStr;

pub fn gen_enum(e: &IrEnum) -> TokenStream {
    let name = make_ident(&e.name);
    let doc = doc_attr(&e.description);

    let serde_attr = match &e.tag {
        IrEnumTag::Untagged => quote! { #[serde(untagged)] },
        IrEnumTag::StringEnum => quote! {},
    };

    let variants: Vec<TokenStream> = e.variants.iter().map(|v| gen_variant(e, v)).collect();

    let single_value = e.is_single_value();
    let default_derive = if single_value {
        quote! { Default, }
    } else {
        quote! {}
    };

    quote! {
        #doc
        #[derive(Debug, Clone, PartialEq, #default_derive serde::Serialize, serde::Deserialize)]
        #serde_attr
        pub enum #name {
            #(#variants)*
        }
    }
}

fn gen_variant(e: &IrEnum, v: &IrVariant) -> TokenStream {
    let (id, needs_rename) = make_ident_with_rename(&v.name);
    let doc = doc_attr(&v.description);

    let rename = if needs_rename {
        let orig = LitStr::new(&v.name, Span::call_site());
        quote! { #[serde(rename = #orig)] }
    } else {
        match (&e.tag, &v.serde_rename) {
            (IrEnumTag::StringEnum, Some(r)) => {
                let r = r.as_str();
                quote! { #[serde(rename = #r)] }
            }
            _ => quote! {},
        }
    };

    if v.rust_type.is_empty() {
        let default_attr = if e.is_single_value() {
            quote! { #[default] }
        } else {
            quote! {}
        };
        quote! { #doc #rename #default_attr #id, }
    } else {
        let ty = parse_type(&v.rust_type);
        quote! { #doc #rename #id(#ty), }
    }
}

