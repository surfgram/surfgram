use super::{GeneratedFile, Generator};
use crate::ir::{Ir, IrPayload, IrTrigger};
use proc_macro2::TokenStream;
use quote::{format_ident, quote};

pub struct MacrosGenerator;

impl Generator for MacrosGenerator {
    fn generate(&self, ir: &Ir) -> Vec<GeneratedFile> {
        if ir.triggers.is_empty() {
            return Vec::new();
        }

        let mut all_payload_fields: std::collections::HashMap<&str, &str> = std::collections::HashMap::new();
        for t in &ir.triggers {
            for p in &t.payloads {
                all_payload_fields.insert(p.ty.as_str(), t.field.as_str());
            }
        }
        let mut payload_fields: Vec<(&str, &str)> = all_payload_fields.into_iter().collect();
        payload_fields.sort_by_key(|(ty, _)| *ty);
        let payloads_tokens = payload_fields.iter().map(|(ty, field)| quote! { (#ty, #field) });

        let fields_tokens = quote! {
            pub const PAYLOAD_FIELDS: &[(&str, &str)] = &[ #(#payloads_tokens),* ];
        };

        let mut triggers_tokens = TokenStream::new();
        for t in &ir.triggers {
            triggers_tokens.extend(gen_trigger(t));
        }

        vec![
            GeneratedFile {
                path: "fields.rs".into(),
                preamble: String::new(),
                tokens: fields_tokens,
            },
            GeneratedFile {
                path: "triggers.rs".into(),
                preamble: String::new(),
                tokens: triggers_tokens,
            },
        ]
    }
}

fn gen_trigger(t: &IrTrigger) -> TokenStream {
    let name = format_ident!("on_{}", t.field);
    let field = t.field.as_str();
    let payload_enum = opt_str(&t.payload_enum);
    let payloads: Vec<TokenStream> = t.payloads.iter().map(gen_payload).collect();

    let takes: Vec<&str> = t.payloads.iter().map(|p| p.ty.as_str()).collect();
    let doc = format!(
        "Handles `{field}` updates.\n\n\
         The handler can take:\n\
         - the update payload: {takes}\n\
         - `surfgram::Bot`\n\
         - `Path<T>`, `Option<Path<T>>`, `Result<Path<T>, _>`\n\
         - any type from `Bot::state` or injected middleware",
        field = t.field,
        takes = takes.join(", "),
    );

    quote! {
        #[doc = #doc]
        #[proc_macro_attribute]
        pub fn #name(attr: TokenStream, item: TokenStream) -> TokenStream {
            expand(
                &Trigger {
                    field: #field,
                    payload_enum: #payload_enum,
                    payloads: &[ #(#payloads),* ],
                },
                attr.into(),
                item.into(),
            )
            .into()
        }
    }
}

fn gen_payload(p: &IrPayload) -> TokenStream {
    let ty = p.ty.as_str();
    let variant = opt_str(&p.variant);
    let filter = match &p.filter {
        Some(f) => {
            let field = f.field.as_str();
            quote! { Some(Filter { field: #field }) }
        }
        None => quote! { None },
    };
    quote! {
        Payload { ty: #ty, variant: #variant, filter: #filter }
    }
}

fn opt_str(value: &Option<String>) -> TokenStream {
    match value {
        Some(s) => quote! { Some(#s) },
        None => quote! { None },
    }
}