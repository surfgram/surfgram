//! Implementation of `#[surfgram::bot]`.

use proc_macro2::TokenStream as TokenStream2;
use quote::quote;
use syn::{spanned::Spanned, ItemFn};

pub(crate) fn expand_bot(attr: TokenStream2, item: TokenStream2) -> TokenStream2 {
    let mut function: ItemFn = match syn::parse2(item) {
        Ok(f) => f,
        Err(e) => return e.to_compile_error(),
    };

    if !attr.is_empty() {
        return syn::Error::new(attr.span(), "`#[surfgram::bot]` takes no arguments")
            .to_compile_error();
    }

    if function.sig.asyncness.take().is_none() {
        return syn::Error::new(function.sig.ident.span(), "the function must be `async fn`")
            .to_compile_error();
    }

    let attrs = &function.attrs;
    let vis = &function.vis;
    let sig = &function.sig;
    let block = &function.block;
    quote! {
        #(#attrs)*
        #vis #sig {
            ::surfgram::__private::tokio::runtime::Builder::new_multi_thread()
                .enable_all()
                .build()
                .expect("failed to build the tokio runtime")
                .block_on(async move #block)
        }
    }
}
