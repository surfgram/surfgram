//! Shared expansion logic for the generated `#[on_<update>]` attribute macros.

use crate::handler::{handler_args, handler_await, ArgKind, PathMode};
use proc_macro2::{Span, TokenStream as TokenStream2};
use quote::{format_ident, quote};
use syn::spanned::Spanned;
use syn::{FnArg, GenericArgument, ItemFn, LitStr, PathArguments, Type};

pub(crate) struct Filter<'a> {
    pub(crate) field: &'a str,
}

pub(crate) struct Payload<'a> {
    pub(crate) ty: &'a str,
    pub(crate) variant: Option<&'a str>,
    pub(crate) filter: Option<Filter<'a>>,
}

pub(crate) struct Trigger<'a> {
    pub(crate) field: &'a str,
    pub(crate) payload_enum: Option<&'a str>,
    pub(crate) payloads: &'a [Payload<'a>],
}

pub(crate) fn expand(trigger: &Trigger, attr: TokenStream2, item: TokenStream2) -> TokenStream2 {
    let function: ItemFn = match syn::parse2(item) {
        Ok(f) => f,
        Err(e) => return e.to_compile_error(),
    };
    match try_expand(trigger, attr, &function) {
        Ok(tokens) => tokens,
        Err(e) => e.to_compile_error(),
    }
}

fn compute_priority(pattern: Option<&str>) -> u32 {
    let Some(p) = pattern else { return 0 };

    if p.contains('{') {
        let mut lit_len = 0u32;
        let mut param_count = 0u32;
        let mut in_param = false;
        for c in p.chars() {
            match c {
                '{' => {
                    in_param = true;
                    param_count += 1;
                }
                '}' => in_param = false,
                _ if !in_param => lit_len += 1,
                _ => {}
            }
        }
        1000 + lit_len * 10 + param_count
    } else if p.ends_with('*') {
        100 + (p.len() as u32 - 1)
    } else {
        10000 + p.len() as u32
    }
}

fn try_expand(
    trigger: &Trigger,
    attr: TokenStream2,
    function: &ItemFn,
) -> syn::Result<TokenStream2> {
    if function.sig.asyncness.is_none() {
        return Err(syn::Error::new(
            function.sig.ident.span(),
            "a handler must be `async fn`",
        ));
    }

    let payload_types: Vec<&str> = trigger.payloads.iter().map(|p| p.ty).collect();
    let args = handler_args(function, &payload_types)?;

    let payload_for_handler = match args.payload.as_deref() {
        Some(ty) => Some(
            trigger
                .payloads
                .iter()
                .find(|p| p.ty == ty)
                .ok_or_else(|| {
                    let expected: Vec<&str> = trigger.payloads.iter().map(|p| p.ty).collect();
                    let span = find_payload_arg_span(function, ty)
                        .unwrap_or_else(|| function.sig.ident.span());
                    let accepts = if expected.len() == 1 {
                        format!("accepts only `{}`", expected[0])
                    } else {
                        format!("accept one of: {}", expected.join(", "))
                    };
                    syn::Error::new(
                        span,
                        format!(
                            "handler takes an unknown payload type; `{field}` handlers {accepts}",
                            field = trigger.field,
                        ),
                    )
                })?,
        ),
        None => None,
    };

    let filter = match &args.payload {
        Some(_) => payload_for_handler.and_then(|p| p.filter.as_ref()),
        None => trigger
            .payloads
            .iter()
            .find(|p| p.filter.is_some())
            .and_then(|p| p.filter.as_ref()),
    };

    let pattern: Option<LitStr> = if attr.is_empty() {
        None
    } else {
        Some(syn::parse2(attr).map_err(|e| {
            syn::Error::new(
                e.span(),
                "expected a string literal pattern, e.g. `#[on_message(\"hello\")]`",
            )
        })?)
    };

    let priority = compute_priority(pattern.as_ref().map(|p| p.value()).as_deref());

    let has_path = args.kinds.iter().any(|k| matches!(k, ArgKind::Path(_)));
    let has_template = pattern.as_ref().map_or(false, |p| p.value().contains('{'));

    if has_path && !has_template {
        return Err(syn::Error::new(
            pattern
                .as_ref()
                .map_or(function.sig.ident.span(), |p| p.span()),
            "`Path<...>` requires placeholders in the pattern: \
             `#[on_message(\"/ban {user_id}\")]`",
        ));
    }

    let trigger_str: String = match (&pattern, filter) {
        (Some(_), Some(filter)) => format!("{}.{}", trigger.field, filter.field),
        (Some(p), None) => {
            return Err(syn::Error::new(
                p.span(),
                format!(
                    "`#[on_{field}]` does not accept a string pattern: this update has no filterable field",
                    field = trigger.field,
                ),
            ));
        }
        (None, _) => trigger.field.to_string(),
    };

    let pattern_tokens = match &pattern {
        Some(p) => quote! { ::core::option::Option::Some(#p) },
        None => quote! { ::core::option::Option::None },
    };

    let name = &function.sig.ident;
    let dispatch = format_ident!("__surfgram_dispatch_{}", name);
    let field = format_ident!("{}", trigger.field);
    let handler_name_str = name.to_string();

    let extract_payload = if let Some(payload) = payload_for_handler {
        let field_type_str = trigger.payload_enum.unwrap_or(payload.ty);
        let field_type = parse_type(field_type_str)?;
        let unbox_field = quote! {
            let payload: &::surfgram::#field_type = ::core::convert::AsRef::as_ref(payload);
        };
        let select_variant = match (payload.variant, trigger.payload_enum) {
            (Some(variant), Some(enum_ty)) => {
                let enum_ident = format_ident!("{}", enum_ty);
                let variant = format_ident!("{}", variant);
                Some(quote! {
                    let payload = match payload {
                        ::surfgram::#enum_ident::#variant(inner) => inner,
                        _ => return ::core::option::Option::None,
                    };
                })
            }
            _ => None,
        };
        let unbox_variant = if payload.variant.is_some() {
            let payload_type = parse_type(payload.ty)?;
            quote! {
                let payload: &::surfgram::#payload_type = ::core::convert::AsRef::as_ref(payload);
            }
        } else {
            quote! {}
        };
        Some(quote! {
            let payload = update.#field.as_ref()?;
            #unbox_field
            #select_variant
            #unbox_variant
            let payload = ::core::clone::Clone::clone(payload);
        })
    } else {
        None
    };

    let extract_bot = if args.takes_bot {
        Some(quote! { let bot = ::core::clone::Clone::clone(bot); })
    } else {
        None
    };

    let mut extract_path: Vec<TokenStream2> = Vec::new();
    let mut extract_state: Vec<TokenStream2> = Vec::new();
    let mut path_counter = 0usize;
    let mut state_counter = 0usize;

    let call_args: Vec<TokenStream2> = function
        .sig
        .inputs
        .iter()
        .zip(args.kinds.iter())
        .map(|(arg, kind)| -> syn::Result<TokenStream2> {
            Ok(match kind {
                ArgKind::Bot => quote! { bot },
                ArgKind::Payload => quote! { payload },
                ArgKind::Path(mode) => {
                    let FnArg::Typed(pat) = arg else { unreachable!() };
                    let ty: &Type = &pat.ty;
                    let var = format_ident!("__surfgram_path_{}", path_counter);
                    path_counter += 1;

                    let tokens = match mode {
                        PathMode::Required => {
                            let inner = path_inner_type(ty)?;
                            quote! {
                                let #var: #ty = match ::surfgram::Path::<#inner>::from_captures(captures) {
                                    ::core::option::Option::Some(p) => p,
                                    ::core::option::Option::None => {
                                        return ::core::option::Option::None;
                                    }
                                };
                            }
                        }
                        PathMode::Optional => {
                            let inner_path = first_type_arg(&["Option"], ty)?;
                            let inner = path_inner_type(inner_path)?;
                            quote! {
                                let #var: #ty = ::surfgram::Path::<#inner>::from_captures(captures);
                            }
                        }
                        PathMode::Result => {
                            let inner_path = first_type_arg(&["Result"], ty)?;
                            let inner = path_inner_type(inner_path)?;
                            quote! {
                                let #var: #ty = ::surfgram::Path::<#inner>::try_from_captures(captures);
                            }
                        }
                    };
                    extract_path.push(tokens);
                    quote! { #var }
                }
                ArgKind::State => {
                    let FnArg::Typed(pat) = arg else { unreachable!() };
                    let ty: &Type = &pat.ty;
                    let var = format_ident!("__surfgram_state_{}", state_counter);
                    state_counter += 1;
                    extract_state.push(quote! {
                        let #var: #ty = match <#ty as ::surfgram::FromState>::from_state(ctx) {
                            ::core::option::Option::Some(value) => value,
                            ::core::option::Option::None => {
                                ::std::eprintln!(
                                    "surfgram: handler `{}` requires `{}` in state (use `Bot::state(...)`)",
                                    #handler_name_str,
                                    ::core::stringify!(#ty),
                                );
                                return ::core::option::Option::None;
                            }
                        };
                    });
                    quote! { #var }
                }
            })
        })
        .collect::<syn::Result<Vec<_>>>()?;

    let await_handler = handler_await(function, &call_args)?;

    Ok(quote! {
        #function

        #[doc(hidden)]
        fn #dispatch(
            update: &::surfgram::Update,
            bot: &::surfgram::Bot,
            captures: &::surfgram::Captures,
            ctx: &::surfgram::Context,
        ) -> ::core::option::Option<::surfgram::HandlerFuture> {
            #extract_payload
            #extract_bot
            #(#extract_path)*
            #(#extract_state)*
            ::core::option::Option::Some(::std::boxed::Box::pin(async move {
                #await_handler
            }))
        }

        ::surfgram::__private::inventory::submit! {
            ::surfgram::Handler {
                name: ::core::stringify!(#name),
                trigger: #trigger_str,
                pattern: #pattern_tokens,
                priority: #priority,
                dispatch: #dispatch,
            }
        }
    })
}

fn path_inner_type(ty: &Type) -> syn::Result<Type> {
    let Type::Path(p) = ty else {
        return Err(syn::Error::new(ty.span(), "expected `Path<T>`"));
    };
    let seg = p
        .path
        .segments
        .last()
        .ok_or_else(|| syn::Error::new(ty.span(), "expected `Path<T>`"))?;
    let PathArguments::AngleBracketed(args) = &seg.arguments else {
        return Err(syn::Error::new(
            ty.span(),
            "`Path` needs a type argument: `Path<(i64, String)>` or `Path<Struct>`",
        ));
    };
    match args.args.first() {
        Some(GenericArgument::Type(t)) => Ok(t.clone()),
        _ => Err(syn::Error::new(
            ty.span(),
            "`Path` needs a type argument: `Path<(i64, String)>` or `Path<Struct>`",
        )),
    }
}

fn first_type_arg<'a>(wrappers: &[&str], ty: &'a Type) -> syn::Result<&'a Type> {
    let Type::Path(p) = ty else {
        return Err(syn::Error::new(ty.span(), "expected wrapper type"));
    };
    let seg = p
        .path
        .segments
        .last()
        .ok_or_else(|| syn::Error::new(ty.span(), "expected wrapper type"))?;
    let seg_name = seg.ident.to_string();
    if !wrappers.iter().any(|w| *w == seg_name) {
        return Err(syn::Error::new(ty.span(), "unexpected wrapper type"));
    }
    let PathArguments::AngleBracketed(args) = &seg.arguments else {
        return Err(syn::Error::new(ty.span(), "expected generic arguments"));
    };
    for a in &args.args {
        if let GenericArgument::Type(t) = a {
            return Ok(t);
        }
    }
    Err(syn::Error::new(ty.span(), "expected type argument"))
}

fn find_payload_arg_span(function: &ItemFn, type_name: &str) -> Option<Span> {
    function.sig.inputs.iter().find_map(|arg| {
        let FnArg::Typed(pat) = arg else { return None };
        let Type::Path(p) = &*pat.ty else { return None };
        let name = p.path.segments.last()?.ident.to_string();
        (name == type_name).then(|| pat.ty.span())
    })
}

fn parse_type(s: &str) -> syn::Result<Type> {
    syn::parse_str::<Type>(s).map_err(|e| {
        syn::Error::new(
            Span::call_site(),
            format!("unsupported payload type `{s}`: {e}"),
        )
    })
}