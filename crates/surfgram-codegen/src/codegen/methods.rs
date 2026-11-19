use super::ident::{doc_attr, make_ident, parse_type};
use super::{layout, GeneratedFile, Generator};
use crate::ir::{Ir, IrMethod};
use crate::naming::to_pascal_case;
use proc_macro2::{Ident, TokenStream};
use quote::quote;
use std::path::PathBuf;

pub struct MethodsGenerator;

impl Generator for MethodsGenerator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile> {
        if ir.methods.is_empty() {
            return Vec::new();
        }

        let mut files: Vec<GeneratedFile> = ir
            .methods
            .iter()
            .map(|m| GeneratedFile {
                path: layout::method_file(&m.name),
                preamble: layout::METHOD_PREAMBLE.to_string(),
                tokens: gen_method_impl(m),
            })
            .collect();

        let modules: Vec<String> = ir
            .methods
            .iter()
            .map(|m| layout::module_name(&m.name))
            .collect();
        let mut tokens = layout::module_decls(&modules);
        tokens.extend(gen_method_enum(&ir.methods));
        tokens.extend(gen_api_method_trait());
        files.push(GeneratedFile {
            path: PathBuf::from("methods/mod.rs"),
            preamble: String::new(),
            tokens,
        });
        files
    }
}

fn variant_ident(m: &IrMethod) -> Ident {
    make_ident(&to_pascal_case(&m.name))
}

fn gen_method_enum(methods: &[IrMethod]) -> TokenStream {
    let variants: Vec<Ident> = methods.iter().map(variant_ident).collect();
    let names: Vec<&str> = methods.iter().map(|m| m.name.as_str()).collect();
    let docs: Vec<Option<TokenStream>> = methods.iter().map(|m| doc_attr(&m.description)).collect();

    quote! {
        /// Every method of the Bot API.
        #[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
        pub enum Method {
            #( #docs #variants, )*
        }

        impl Method {
            /// All methods, in schema order.
            pub const ALL: &'static [Method] = &[ #( Method::#variants ),* ];

            /// Name as used in the request URL: `/bot<token>/<name>`.
            pub const fn as_str(&self) -> &'static str {
                match self {
                    #( Method::#variants => #names, )*
                }
            }
        }

        impl std::fmt::Display for Method {
            fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
                f.write_str(self.as_str())
            }
        }
    }
}

fn gen_api_method_trait() -> TokenStream {
    quote! {
        /// A request type: knows which method it calls and what that method returns.
        pub trait ApiMethod: serde::Serialize {
            /// The method this request calls.
            const METHOD: Method;
            /// Whether the method accepts `multipart/form-data` (file uploads).
            const MULTIPART: bool = false;
            /// Type of the `result` field of a successful response.
            type Response: serde::de::DeserializeOwned;
        }
    }
}

fn gen_method_impl(m: &IrMethod) -> TokenStream {
    let Some(params) = &m.params else {
        return TokenStream::new();
    };
    let params = make_ident(params);
    let variant = variant_ident(m);
    let response = parse_type(&m.result);

    let multipart = if m.multipart {
        Some(quote! { const MULTIPART: bool = true; })
    } else {
        None
    };

    quote! {
        impl ApiMethod for #params {
            const METHOD: Method = Method::#variant;
            #multipart
            type Response = #response;
        }
    }
}
