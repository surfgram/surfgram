mod error;
mod method;
mod rust_type;
mod trigger;
mod ty;

pub use error::{IrError, IrErrorField, IrErrorParameters};
pub use method::{IrBinding, IrMethod};
pub use rust_type::{boxify, type_names};
pub use trigger::{IrFilter, IrPayload, IrTrigger};
pub use ty::{IrAlias, IrEnum, IrEnumTag, IrField, IrStruct, IrType, IrVariant};

use std::collections::{HashMap, HashSet};

#[derive(Debug, Clone, Default)]
pub struct Ir {
    pub types: Vec<IrType>,
    pub methods: Vec<IrMethod>,
    pub triggers: Vec<IrTrigger>,
    pub errors: Vec<IrError>,
    /// Names of structs that can `#[derive(Default)]`, filled by the `DeriveDefaults` pass.
    pub defaultable: HashSet<String>,
    /// Types that are only ever sent to Telegram, filled by the `FindRequestTypes` pass.
    pub request_only: HashSet<String>,
}

pub fn type_map(types: &[IrType]) -> HashMap<String, IrType> {
    types
        .iter()
        .map(|t| (t.name().to_string(), t.clone()))
        .collect()
}