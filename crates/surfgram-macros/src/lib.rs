//! Attribute macros of surfgram: `#[bot]`, `#[middleware]` and one `#[on_<update>]` per kind of update.

use proc_macro::TokenStream;

mod bot;
mod expand;
mod handler;
mod middleware;

use expand::{expand, Filter, Payload, Trigger};

mod fields {
    include!(concat!(env!("OUT_DIR"), "/macros/fields.rs"));
}
pub(crate) use fields::PAYLOAD_FIELDS;

include!(concat!(env!("OUT_DIR"), "/macros/triggers.rs"));

#[proc_macro_attribute]
pub fn bot(attr: TokenStream, item: TokenStream) -> TokenStream {
    bot::expand_bot(attr.into(), item.into()).into()
}

#[proc_macro_attribute]
pub fn middleware(attr: TokenStream, item: TokenStream) -> TokenStream {
    middleware::expand_middleware(attr.into(), item.into()).into()
}