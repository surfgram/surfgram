use super::ident::{doc_attr, make_ident};
use super::request;
use super::{layout, GeneratedFile, Generator};
use crate::ir::{Ir, IrMethod, IrStruct};
use proc_macro2::{Ident, TokenStream};
use quote::quote;
use std::collections::BTreeMap;
use std::path::PathBuf;

pub struct BindingsGenerator;

impl Generator for BindingsGenerator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile> {
        let mut api_fns: Vec<TokenStream> = Vec::new();
        let mut owner_fns: BTreeMap<&str, Vec<TokenStream>> = BTreeMap::new();

        for m in &ir.methods {
            let Some(params) = request::buildable(ir, m) else {
                continue;
            };
            api_fns.push(gen_api_fn(m, params));
            if let Some(owner) = &m.owner {
                owner_fns
                    .entry(owner.as_str())
                    .or_default()
                    .push(gen_owner_fn(m, params));
            }
        }

        let mut files = vec![GeneratedFile {
            path: PathBuf::from("bot.rs"),
            preamble: layout::BOT_PREAMBLE.to_string(),
            tokens: quote! {
                /// The Bot API client: one function per method.
                #[derive(Clone)]
                pub struct Api {
                    pub(crate) transport: ::std::sync::Arc<dyn crate::runtime::Transport>,
                }

                impl Api {
                    pub fn with_transport(
                        transport: ::std::sync::Arc<dyn crate::runtime::Transport>,
                    ) -> Self {
                        Self { transport }
                    }

                    #(#api_fns)*
                }

                /// A Telegram bot: owns an [`Api`], a scoped user state, and middlewares.
                #[derive(Clone)]
                pub struct Bot {
                    /// The API client: `bot.api.send_message(..)`.
                    pub api: Api,
                    /// User-provided state; handlers receive it as arguments.
                    pub state: crate::runtime::State,
                    /// Middlewares run before handlers.
                    pub(crate) middlewares: ::std::sync::Arc<::std::vec::Vec<::std::sync::Arc<dyn crate::Middleware>>>,
                }

                impl Bot {
                    /// Creates a bot that sends every request through `transport`.
                    pub fn with_transport(
                        transport: ::std::sync::Arc<dyn crate::runtime::Transport>,
                    ) -> Self {
                        Self {
                            api: Api::with_transport(transport),
                            state: crate::runtime::State::new(),
                            middlewares: ::std::sync::Arc::new(::std::vec::Vec::new()),
                        }
                    }
                }
            },
        }];

        for (owner, fns) in &owner_fns {
            let ty = make_ident(owner);
            files.push(GeneratedFile {
                path: layout::type_file(owner),
                preamble: layout::TYPE_PREAMBLE.to_string(),
                tokens: quote! {
                    impl #ty {
                        #(#fns)*
                    }
                },
            });
        }
        files
    }
}

fn gen_api_fn(m: &IrMethod, params: &IrStruct) -> TokenStream {
    let name = request::method_fn(m);
    let builder = request::builder_ident(m);
    let doc = doc_attr(&m.description);
    let required = request::required_args(params);
    let decls: Vec<TokenStream> = required.iter().map(|f| request::arg_decl(f)).collect();
    let idents: Vec<Ident> = required.iter().map(|f| request::field_ident(f)).collect();

    quote! {
        #doc
        pub fn #name(&self, #(#decls),*) -> #builder {
            #builder::new(#(#idents),*).with_transport(self.transport.clone())
        }
    }
}

fn gen_owner_fn(m: &IrMethod, params: &IrStruct) -> TokenStream {
    let name = request::method_fn(m);
    let builder = request::builder_ident(m);
    let doc = doc_attr(&m.description);

    let mut decls: Vec<TokenStream> = Vec::new();
    let mut values: Vec<TokenStream> = Vec::new();
    for f in request::required_args(params) {
        match m.bindings.iter().find(|b| b.param == f.name) {
            Some(binding) => {
                let path: Vec<Ident> = binding.path.iter().map(|p| make_ident(p)).collect();
                values.push(quote! { self #( . #path )* .clone() });
            }
            None => {
                let id = request::field_ident(f);
                decls.push(request::arg_decl(f));
                values.push(quote! { #id });
            }
        }
    }

    quote! {
        #doc
        pub fn #name(&self, #(#decls),*) -> #builder {
            #builder::new(#(#values),*)
        }
    }
}