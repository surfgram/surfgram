use super::TypeExtension;
use crate::codegen::ident::make_ident;
use crate::ir::{Ir, IrType};
use proc_macro2::TokenStream;
use quote::quote;

pub struct HasFile;

impl TypeExtension for HasFile {
    fn extend(&self, ty: &IrType, _ir: &Ir) -> Option<TokenStream> {
        let IrType::Struct(s) = ty else { return None };
        let id = s.field("file_id")?;
        if !id.is_required || id.rust_type != "String" {
            return None;
        }

        let name = make_ident(&s.name);
        let path_fn = s
            .field("file_path")
            .filter(|f| f.rust_type == "Option<String>")
            .map(|_| {
                quote! {
                    fn file_path(&self) -> ::core::option::Option<&str> {
                        self.file_path.as_deref()
                    }
                }
            });

        Some(quote! {
            impl crate::download::HasFile for #name {
                fn file_id(&self) -> &str {
                    &self.file_id
                }
                #path_fn
            }
        })
    }
}
