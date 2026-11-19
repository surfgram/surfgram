use crate::codegen::ident::{doc_attr, make_ident, make_ident_with_rename, parse_type};
use crate::ir::{IrField, IrStruct};
use proc_macro2::{Span, TokenStream};
use quote::quote;
use syn::LitStr;

pub fn gen_struct(s: &IrStruct, derive_default: bool) -> TokenStream {
    let name = make_ident(&s.name);
    let doc = doc_attr(&s.description);
    let deny = if s.deny_unknown {
        quote! { #[serde(deny_unknown_fields)] }
    } else {
        quote! {}
    };

    let default = if derive_default {
        quote! { Default, }
    } else {
        quote! {}
    };

    let fields: Vec<TokenStream> = s.fields.iter().map(gen_field).collect();

    quote! {
        #doc
        #[derive(Debug, Clone, PartialEq, #default serde::Serialize, serde::Deserialize)]
        #deny
        pub struct #name {
            #(#fields)*
        }
    }
}

pub fn gen_binary(s: &IrStruct) -> TokenStream {
    let name = make_ident(&s.name);
    let doc = doc_attr(&s.description);
    quote! {
        #doc
        pub type #name = crate::upload::Upload;
    }
}

fn gen_field(f: &IrField) -> TokenStream {
    let (id, needs_rename) = make_ident_with_rename(&f.name);
    let rename = if needs_rename {
        let orig = LitStr::new(&f.name, Span::call_site());
        quote! { #[serde(rename = #orig)] }
    } else {
        quote! {}
    };
    let doc = doc_attr(&f.description);

    if f.flatten {
        let ty = parse_type(&f.rust_type);
        return quote! {
            #doc
            #rename
            #[serde(flatten)]
            pub #id: #ty,
        };
    }

    if let Some(b) = f.bool_const {
        return gen_bool_const_field(f, b, &id, &doc, &rename);
    }

    let ty = parse_type(&f.rust_type);
    let serde_skip = if f.rust_type.starts_with("Option<") && !f.is_required {
        quote! { #[serde(skip_serializing_if = "Option::is_none")] }
    } else {
        quote! {}
    };
    quote! {
        #doc
        #rename
        #serde_skip
        pub #id: #ty,
    }
}

fn gen_bool_const_field(
    f: &IrField,
    b: bool,
    id: &proc_macro2::Ident,
    doc: &Option<TokenStream>,
    rename: &TokenStream,
) -> TokenStream {
    if f.is_required {
        let default_attr = if b {
            quote! { default = "super::_bool_default_true" }
        } else {
            quote! { default }
        };
        return quote! {
            #doc
            #rename
            #[serde(#default_attr)]
            pub #id: bool,
        };
    }

    let (default_attr, skip_fn) = if b {
        (quote! { default }, "super::_bool_is_false")
    } else {
        (
            quote! { default = "super::_bool_default_true" },
            "super::_bool_is_true",
        )
    };
    let skip_fn_lit = LitStr::new(skip_fn, Span::call_site());
    quote! {
        #doc
        #rename
        #[serde(#default_attr, skip_serializing_if = #skip_fn_lit)]
        pub #id: bool,
    }
}
