//! Validation of handler signatures and construction of the awaited call.

use proc_macro2::TokenStream as TokenStream2;
use quote::quote;
use syn::spanned::Spanned;
use syn::{FnArg, GenericArgument, ItemFn, PathArguments, Type};

#[derive(Debug, Clone, Copy)]
pub(crate) enum PathMode {
    Required,
    Optional,
    Result,
}

pub(crate) enum ArgKind {
    Bot,
    Payload,
    Path(PathMode),
    State,
}

pub(crate) struct HandlerArgs {
    pub(crate) takes_bot: bool,
    pub(crate) payload: Option<String>,
    pub(crate) kinds: Vec<ArgKind>,
}

pub(crate) fn handler_args(
    function: &ItemFn,
    payload_types: &[&str],
) -> syn::Result<HandlerArgs> {
    let mut takes_bot = false;
    let mut payload = None;
    let mut kinds = Vec::new();

    for arg in function.sig.inputs.iter() {
        let FnArg::Typed(pat_arg) = arg else {
            return Err(syn::Error::new(
                arg.span(),
                "a handler cannot take `self`; use a free function such as `async fn h(m: Message)`",
            ));
        };
        let Type::Path(p) = &*pat_arg.ty else {
            return Err(syn::Error::new(
                pat_arg.ty.span(),
                "unsupported argument type; expected `Message`, `Bot`, `Path<...>`, `Option<Path<...>>`, `Result<Path<...>, _>`, or a state type",
            ));
        };
        let Some(seg) = p.path.segments.last() else {
            return Err(syn::Error::new(pat_arg.ty.span(), "unsupported argument type"));
        };
        let name = seg.ident.to_string();

        if name == "Bot" {
            if takes_bot {
                return Err(syn::Error::new(
                    pat_arg.ty.span(),
                    "`Bot` already taken by an earlier argument",
                ));
            }
            takes_bot = true;
            kinds.push(ArgKind::Bot);
        } else if let Some(mode) = path_mode(&name, seg) {
            kinds.push(ArgKind::Path(mode));
        } else if payload_types.contains(&name.as_str()) {
            if payload.is_some() {
                return Err(syn::Error::new(
                    pat_arg.ty.span(),
                    "payload already taken by an earlier argument",
                ));
            }
            payload = Some(name);
            kinds.push(ArgKind::Payload);
        } else {
            kinds.push(ArgKind::State);
        }
    }

    let has_path = kinds.iter().any(|k| matches!(k, ArgKind::Path(_)));
    if !takes_bot && payload.is_none() && !has_path {
        return Err(syn::Error::new(
            function.sig.ident.span(),
            "handler has no payload, `Bot`, or `Path<...>` argument",
        ));
    }

    Ok(HandlerArgs { takes_bot, payload, kinds })
}

fn path_mode(seg_name: &str, seg: &syn::PathSegment) -> Option<PathMode> {
    match seg_name {
        "Path" => Some(PathMode::Required),
        "Option" | "Result" => {
            let PathArguments::AngleBracketed(args) = &seg.arguments else {
                return None;
            };
            let inner = args.args.iter().find_map(|a| match a {
                GenericArgument::Type(t) => Some(t),
                _ => None,
            })?;
            let Type::Path(ip) = inner else { return None };
            let is_path = ip.path.segments.last().map_or(false, |s| s.ident == "Path");
            if !is_path {
                return None;
            }
            match seg_name {
                "Option" => Some(PathMode::Optional),
                "Result" => Some(PathMode::Result),
                _ => None,
            }
        }
        _ => None,
    }
}

pub(crate) fn handler_await(
    function: &ItemFn,
    call_args: &[TokenStream2],
) -> syn::Result<TokenStream2> {
    let name = &function.sig.ident;
    let output = match &function.sig.output {
        syn::ReturnType::Default => {
            return Ok(quote! { let _ = #name( #(#call_args),* ).await; });
        }
        syn::ReturnType::Type(_, ty) => &**ty,
    };

    if let Type::Tuple(t) = output {
        if t.elems.is_empty() {
            return Ok(quote! { let _ = #name( #(#call_args),* ).await; });
        }
    }

    if let Type::Path(path) = output {
        if let Some(seg) = path.path.segments.last() {
            if seg.ident == "Result" {
                if let syn::PathArguments::AngleBracketed(args) = &seg.arguments {
                    let ok_is_unit = matches!(
                        args.args.first(),
                        Some(syn::GenericArgument::Type(Type::Tuple(t))) if t.elems.is_empty()
                    );
                    if ok_is_unit {
                        let name_str = name.to_string();
                        return Ok(quote! {
                            if let ::core::result::Result::Err(error) =
                                #name( #(#call_args),* ).await
                            {
                                ::std::eprintln!(
                                    "surfgram: handler `{}` failed: {}",
                                    #name_str,
                                    error,
                                );
                            }
                        });
                    }
                }
            }
        }
    }

    Err(unsupported_output(output))
}

fn unsupported_output(ty: &Type) -> syn::Error {
    syn::Error::new_spanned(
        ty,
        "unsupported return type; a handler must return `()` or `Result<(), E>` where `E: std::fmt::Display` (e.g. `-> Result<(), String>`)",
    )
}