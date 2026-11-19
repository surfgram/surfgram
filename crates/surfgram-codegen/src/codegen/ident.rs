use proc_macro2::{Ident, Span, TokenStream};
use quote::quote;

pub fn make_ident_with_rename(name: &str) -> (Ident, bool) {
    if matches!(name, "self" | "super" | "crate" | "Self") {
        let escaped = format!("{}_", name);
        return (Ident::new(&escaped, Span::call_site()), true);
    }
    if is_rust_keyword(name) {
        (Ident::new_raw(name, Span::call_site()), false)
    } else {
        (Ident::new(name, Span::call_site()), false)
    }
}

pub fn make_ident(name: &str) -> Ident {
    make_ident_with_rename(name).0
}

fn is_rust_keyword(s: &str) -> bool {
    matches!(
        s,
        "as" | "break"
            | "const"
            | "continue"
            | "crate"
            | "else"
            | "enum"
            | "extern"
            | "false"
            | "fn"
            | "for"
            | "if"
            | "impl"
            | "in"
            | "let"
            | "loop"
            | "match"
            | "mod"
            | "move"
            | "mut"
            | "pub"
            | "ref"
            | "return"
            | "self"
            | "Self"
            | "static"
            | "struct"
            | "super"
            | "trait"
            | "true"
            | "type"
            | "unsafe"
            | "use"
            | "where"
            | "while"
            | "async"
            | "await"
            | "dyn"
            | "abstract"
            | "become"
            | "box"
            | "do"
            | "final"
            | "macro"
            | "override"
            | "priv"
            | "try"
            | "typeof"
            | "unsized"
            | "virtual"
            | "yield"
            | "union"
    )
}

pub fn parse_type(s: &str) -> TokenStream {
    match syn::parse_str::<syn::Type>(s) {
        Ok(t) => quote! { #t },
        Err(e) => {
            eprintln!(
                "warning: failed to parse type {s:?}: {e}; falling back to serde_json::Value"
            );
            quote! { serde_json::Value }
        }
    }
}

pub fn doc_attr(description: &Option<String>) -> Option<TokenStream> {
    description.as_ref().map(|d| quote! { #[doc = #d] })
}
