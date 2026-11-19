use super::ident::{doc_attr, make_ident, parse_type};
use super::request;
use super::{layout, GeneratedFile, Generator};
use crate::ir::{Ir, IrField, IrMethod, IrStruct};
use proc_macro2::TokenStream;
use quote::quote;

pub struct BuildersGenerator;

impl Generator for BuildersGenerator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile> {
        ir.methods
            .iter()
            .filter_map(|m| {
                let params = request::buildable(ir, m)?;
                Some(GeneratedFile {
                    path: layout::method_file(&m.name),
                    preamble: layout::METHOD_PREAMBLE.to_string(),
                    tokens: gen_builder(m, params),
                })
            })
            .collect()
    }
}

fn gen_builder(m: &IrMethod, params: &IrStruct) -> TokenStream {
    let builder = request::builder_ident(m);
    let params_ty = make_ident(&params.name);
    let doc = format!("Builder for the `{}` method.", m.name);

    let args: Vec<TokenStream> = request::required_args(params)
        .into_iter()
        .map(request::arg_decl)
        .collect();
    let inits: Vec<TokenStream> = params.fields.iter().map(gen_init).collect();
    let setters: Vec<TokenStream> = params
        .fields
        .iter()
        .filter(|f| is_setter(f))
        .map(gen_setter)
        .collect();

    quote! {
        #[doc = #doc]
        #[derive(Clone)]
        pub struct #builder {
            params: #params_ty,
            transport: ::core::option::Option<::std::sync::Arc<dyn crate::runtime::Transport>>,
        }

        impl #builder {
            pub fn new(#(#args),*) -> Self {
                Self {
                    params: #params_ty { #(#inits)* },
                    transport: ::core::option::Option::None,
                }
            }

            /// Sends the request through `transport` instead of the default one.
            pub fn with_transport(
                mut self,
                transport: ::std::sync::Arc<dyn crate::runtime::Transport>,
            ) -> Self {
                self.transport = ::core::option::Option::Some(transport);
                self
            }

            #(#setters)*

            /// Finishes the builder and returns the request parameters.
            pub fn build(self) -> #params_ty {
                self.params
            }
        }

        impl From<#builder> for #params_ty {
            fn from(builder: #builder) -> Self {
                builder.params
            }
        }

        impl ::core::future::IntoFuture for #builder {
            type Output =
                ::core::result::Result<<#params_ty as ApiMethod>::Response, crate::runtime::Error>;
            type IntoFuture = crate::runtime::BoxFuture<'static, Self::Output>;

            fn into_future(self) -> Self::IntoFuture {
                ::std::boxed::Box::pin(crate::runtime::call(self.transport, self.params))
            }
        }
    }
}

fn gen_init(f: &IrField) -> TokenStream {
    let id = request::field_ident(f);
    if f.is_required_arg() {
        return quote! { #id: #id.into(), };
    }
    if let Some(b) = f.bool_const {
        let v = if f.is_required { b } else { !b };
        return quote! { #id: #v, };
    }
    if f.rust_type.starts_with("Option<") {
        return quote! { #id: None, };
    }
    quote! { #id: Default::default(), }
}

fn is_setter(f: &IrField) -> bool {
    !f.flatten && f.bool_const.is_none() && f.rust_type.starts_with("Option<")
}

fn gen_setter(f: &IrField) -> TokenStream {
    let id = request::field_ident(f);
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
            self.params.#id = Some(#construct);
            self
        }
    }
}
