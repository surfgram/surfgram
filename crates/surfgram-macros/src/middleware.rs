use crate::handler::{handler_args, ArgKind};
use proc_macro2::TokenStream as TokenStream2;
use quote::{format_ident, quote};
use syn::{FnArg, GenericArgument, ItemFn, PathArguments, ReturnType, Type};

pub(crate) fn expand_middleware(attr: TokenStream2, item: TokenStream2) -> TokenStream2 {
    let mut function: ItemFn = match syn::parse2(item) {
        Ok(f) => f,
        Err(e) => return e.to_compile_error(),
    };

    if !attr.is_empty() {
        return syn::Error::new_spanned(attr, "`#[surfgram::middleware]` takes no arguments")
            .to_compile_error();
    }

    if function.sig.asyncness.is_none() {
        return syn::Error::new(function.sig.ident.span(), "middleware must be `async fn`")
            .to_compile_error();
    }

    let ret_ty = match &function.sig.output {
        ReturnType::Type(_, ty) => ty,
        _ => {
            return syn::Error::new(
                function.sig.ident.span(),
                "middleware must return `Option<T>`",
            )
            .to_compile_error()
        }
    };

    let _inner_ty = match extract_option_inner(ret_ty) {
        Some(t) => t,
        None => {
            return syn::Error::new_spanned(ret_ty, "middleware must return `Option<T>`")
                .to_compile_error()
        }
    };

    let payload_types: Vec<&str> = crate::PAYLOAD_FIELDS.iter().map(|(ty, _)| *ty).collect();
    let args = match handler_args(&function, &payload_types) {
        Ok(a) => a,
        Err(e) => return e.to_compile_error(),
    };

    for kind in &args.kinds {
        if matches!(kind, ArgKind::Path(_)) {
            return syn::Error::new(
                function.sig.ident.span(),
                "middlewares cannot take `Path<T>`",
            )
            .to_compile_error();
        }
    }

    let name = function.sig.ident.clone();
    let impl_name = format_ident!("__surfgram_mw_{}", name);

    function.sig.ident = impl_name.clone();

    let (extract_stmts, call_args) = extract_middleware_args(&args, &function, &impl_name);

    let await_call = quote! {
        match #impl_name( #(#call_args),* ).await {
            ::core::option::Option::Some(value) => {
                ::surfgram::MiddlewareResult::Inject(::std::boxed::Box::new(value))
            }
            ::core::option::Option::None => {
                ::surfgram::MiddlewareResult::Block
            }
        }
    };

    quote! {
        #function

        #[allow(non_camel_case_types)]
        pub struct #name;

        impl ::surfgram::Middleware for #name {
            fn process<'a>(
                &'a self,
                update: &'a ::surfgram::Update,
                bot: &'a ::surfgram::Bot,
                ctx: &'a ::surfgram::Context,
            ) -> ::surfgram::MiddlewareFuture<'a> {
                ::std::boxed::Box::pin(async move {
                    #(#extract_stmts)*
                    #await_call
                })
            }
        }
    }
}

fn extract_middleware_args(
    args: &crate::handler::HandlerArgs,
    function: &ItemFn,
    impl_name: &syn::Ident,
) -> (Vec<TokenStream2>, Vec<TokenStream2>) {
    let mut extract_stmts = Vec::new();
    let mut call_args = Vec::new();
    let mut state_counter: usize = 0;

    for (arg, kind) in function.sig.inputs.iter().zip(args.kinds.iter()) {
        let FnArg::Typed(pat) = arg else { unreachable!() };
        let ty: &Type = &pat.ty;

        match kind {
            ArgKind::Bot => {
                let var = format_ident!("__surfgram_bot");
                extract_stmts.push(quote! { let #var = ::core::clone::Clone::clone(bot); });
                call_args.push(quote! { #var });
            }
            ArgKind::Payload => {
                let Type::Path(p) = ty else { unreachable!() };
                let name = p.path.segments.last().unwrap().ident.to_string();
                let field_str = crate::PAYLOAD_FIELDS
                    .iter()
                    .find(|(t, _)| *t == name)
                    .map(|(_, f)| *f)
                    .unwrap();
                let field = format_ident!("{}", field_str);

                let var = format_ident!("__surfgram_payload");
                extract_stmts.push(quote! {
                    let Some(#var) = update.#field.as_ref() else {
                        return ::surfgram::MiddlewareResult::Continue;
                    };
                    let #var: &::surfgram::#ty = ::core::convert::AsRef::as_ref(#var);
                    let #var = ::core::clone::Clone::clone(#var);
                });
                call_args.push(quote! { #var });
            }
            ArgKind::State => {
                let var = format_ident!("__surfgram_state_{}", state_counter);
                state_counter += 1;
                extract_stmts.push(quote! {
                    let #var: #ty = match <#ty as ::surfgram::FromState>::from_state(ctx) {
                        ::core::option::Option::Some(v) => v,
                        ::core::option::Option::None => {
                            ::std::eprintln!(
                                "surfgram: middleware `{}` requires `{}` in state (use `Bot::state(...)`)",
                                ::core::stringify!(#impl_name),
                                ::core::stringify!(#ty),
                            );
                            return ::surfgram::MiddlewareResult::Block;
                        }
                    };
                });
                call_args.push(quote! { #var });
            }
            ArgKind::Path(_) => unreachable!(),
        }
    }
    (extract_stmts, call_args)
}

fn extract_option_inner(ty: &Type) -> Option<&Type> {
    let Type::Path(p) = ty else { return None };
    let seg = p.path.segments.last()?;
    if seg.ident != "Option" {
        return None;
    }
    let PathArguments::AngleBracketed(args) = &seg.arguments else {
        return None;
    };
    match args.args.first() {
        Some(GenericArgument::Type(t)) => Some(t),
        _ => None,
    }
}