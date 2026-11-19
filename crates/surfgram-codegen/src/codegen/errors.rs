use super::ident::{doc_attr, make_ident, parse_type};
use super::{GeneratedFile, Generator};
use crate::ir::{Ir, IrError, IrErrorParameters};
use proc_macro2::{Span, TokenStream};
use quote::quote;
use std::collections::BTreeSet;
use std::path::PathBuf;
use syn::LitStr;

pub struct ErrorsGenerator;

impl Generator for ErrorsGenerator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile> {
        vec![GeneratedFile {
            path: PathBuf::from("errors.rs"),
            preamble: String::new(),
            tokens: gen_errors(&ir.errors),
        }]
    }
}

fn checker_fn_name(code: i64) -> String {
    format!("__expect_error_code_{}", code)
}

fn checker_ident(code: i64) -> proc_macro2::Ident {
    make_ident(&checker_fn_name(code))
}

fn checker_lit(code: i64) -> LitStr {
    LitStr::new(&checker_fn_name(code), Span::call_site())
}

fn gen_errors(errors: &[IrError]) -> TokenStream {
    let mut sorted: Vec<&IrError> = errors.iter().collect();
    sorted.sort_by_key(|e| (e.code, e.parameters.as_ref().map_or(0, |p| p.fields.len())));

    let mut codes: BTreeSet<i64> = BTreeSet::new();
    for e in &sorted {
        codes.insert(e.code);
    }

    let code_checkers: Vec<TokenStream> = codes
        .iter()
        .map(|&code| {
            let fn_name = checker_ident(code);
            quote! {
                fn #fn_name<'de, D>(d: D) -> ::core::result::Result<i64, D::Error>
                where
                    D: serde::Deserializer<'de>,
                {
                    let v = <i64 as serde::Deserialize>::deserialize(d)?;
                    if v != #code {
                        return ::core::result::Result::Err(serde::de::Error::custom(
                            format!("expected error_code {}, got {}", #code, v),
                        ));
                    }
                    ::core::result::Result::Ok(v)
                }
            }
        })
        .collect();

    let params_structs: Vec<TokenStream> = sorted
        .iter()
        .copied()
        .filter_map(|e| e.parameters.as_ref().map(gen_parameters_struct))
        .collect();
    let error_structs: Vec<TokenStream> = sorted.iter().copied().map(gen_error_struct).collect();
    let variants: Vec<TokenStream> = sorted.iter().copied().map(gen_variant).collect();
    let code_arms: Vec<TokenStream> = sorted.iter().copied().map(gen_code_arm).collect();
    let desc_arms: Vec<TokenStream> = sorted.iter().copied().map(gen_desc_arm).collect();
    let retry_arms: Vec<TokenStream> = sorted.iter().copied().map(gen_retry_arm).collect();

    quote! {
        //! API error responses, generated from the API schema.

        #(#code_checkers)*

        #(#params_structs)*

        #(#error_structs)*

        #[derive(Debug, Clone, PartialEq, serde::Deserialize)]
        #[serde(untagged)]
        pub enum ApiError {
            #(#variants,)*
            Unknown {
                #[serde(default)]
                error_code: i64,
                #[serde(default)]
                description: String,
                #[serde(default)]
                parameters: ::core::option::Option<serde_json::Value>,
            },
        }

        impl ApiError {
            pub fn code(&self) -> i64 {
                match self {
                    #(#code_arms,)*
                    ApiError::Unknown { error_code, .. } => *error_code,
                }
            }

            pub fn description(&self) -> &str {
                match self {
                    #(#desc_arms,)*
                    ApiError::Unknown { description, .. } => description,
                }
            }

            pub fn retry_after(&self) -> ::core::option::Option<i64> {
                match self {
                    #(#retry_arms,)*
                    ApiError::Unknown { parameters, .. } => parameters
                        .as_ref()
                        .and_then(|p| p.get("retry_after"))
                        .and_then(serde_json::Value::as_i64),
                }
            }
        }

        impl ::core::fmt::Display for ApiError {
            fn fmt(&self, f: &mut ::core::fmt::Formatter<'_>) -> ::core::fmt::Result {
                write!(f, "telegram error {}: {}", self.code(), self.description())
            }
        }
    }
}

fn gen_parameters_struct(params: &IrErrorParameters) -> TokenStream {
    let name = make_ident(&params.ty_name);
    let fields: Vec<TokenStream> = params
        .fields
        .iter()
        .map(|f| {
            let fname = make_ident(&f.name);
            let fdoc = doc_attr(&f.description);
            let ty = parse_type(&f.rust_type);
            let skip = if !f.is_required && f.rust_type.starts_with("Option<") {
                quote! { #[serde(default, skip_serializing_if = "Option::is_none")] }
            } else {
                quote! {}
            };
            quote! { #fdoc #skip pub #fname: #ty, }
        })
        .collect();
    quote! {
        #[derive(Debug, Clone, PartialEq, serde::Deserialize)]
        pub struct #name {
            #(#fields)*
        }
    }
}

fn gen_error_struct(err: &IrError) -> TokenStream {
    let name = make_ident(&err.name);
    let doc = doc_attr(&err.description);
    // serde requires `deserialize_with` to be a *string literal*.
    let checker = checker_lit(err.code);

    let params_field = match &err.parameters {
        Some(p) => {
            let ty = make_ident(&p.ty_name);
            if p.is_required {
                quote! { pub parameters: #ty, }
            } else {
                quote! {
                    #[serde(default, skip_serializing_if = "Option::is_none")]
                    pub parameters: ::core::option::Option<#ty>,
                }
            }
        }
        None => quote! {},
    };

    quote! {
        #doc
        /// `deny_unknown_fields` ensures that, when several variants share the
        /// same `error_code`, the narrower one (without `parameters`) is only
        /// picked for payloads that don't carry extra fields.
        #[derive(Debug, Clone, PartialEq, serde::Deserialize)]
        #[serde(deny_unknown_fields)]
        pub struct #name {
            /// Whether the request was successful, always `false`.
            pub ok: bool,
            /// Code of the error.
            #[serde(deserialize_with = #checker)]
            pub error_code: i64,
            /// Human-readable description of the error.
            pub description: String,
            #params_field
        }
    }
}

fn gen_variant(err: &IrError) -> TokenStream {
    let name = make_ident(&err.name);
    quote! { #name(#name) }
}

fn gen_code_arm(err: &IrError) -> TokenStream {
    let name = make_ident(&err.name);
    let code = err.code;
    quote! { ApiError::#name(_) => #code }
}

fn gen_desc_arm(err: &IrError) -> TokenStream {
    let name = make_ident(&err.name);
    quote! { ApiError::#name(e) => &e.description }
}

fn gen_retry_arm(err: &IrError) -> TokenStream {
    let name = make_ident(&err.name);
    let Some(params) = &err.parameters else {
        return quote! { ApiError::#name(_) => ::core::option::Option::None };
    };
    let Some(retry) = params.fields.iter().find(|f| f.name == "retry_after") else {
        return quote! { ApiError::#name(_) => ::core::option::Option::None };
    };
    if params.is_required {
        if retry.is_required {
            quote! { ApiError::#name(e) => ::core::option::Option::Some(i64::from(e.parameters.retry_after)) }
        } else {
            quote! { ApiError::#name(e) => e.parameters.retry_after.map(i64::from) }
        }
    } else if retry.is_required {
        quote! { ApiError::#name(e) => e.parameters.as_ref().map(|p| i64::from(p.retry_after)) }
    } else {
        quote! { ApiError::#name(e) => e.parameters.as_ref().and_then(|p| p.retry_after).map(i64::from) }
    }
}