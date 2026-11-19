#[derive(Debug, Clone)]
pub enum IrType {
    Struct(IrStruct),
    Enum(IrEnum),
    Alias(IrAlias),
}

impl IrType {
    pub fn name(&self) -> &str {
        match self {
            IrType::Struct(s) => &s.name,
            IrType::Enum(e) => &e.name,
            IrType::Alias(a) => &a.name,
        }
    }
}

#[derive(Debug, Clone)]
pub struct IrStruct {
    pub name: String,
    pub description: Option<String>,
    pub fields: Vec<IrField>,
    pub deny_unknown: bool,
    pub binary: bool,
}

#[derive(Debug, Clone)]
pub struct IrField {
    pub name: String,
    pub rust_type: String,
    pub description: Option<String>,
    pub flatten: bool,
    pub bool_const: Option<bool>,
    pub is_required: bool,
}

impl IrStruct {
    pub fn field(&self, name: &str) -> Option<&IrField> {
        self.fields.iter().find(|f| f.name == name)
    }
}

impl IrField {
    pub fn is_required_arg(&self) -> bool {
        self.is_required
            && !self.flatten
            && self.bool_const.is_none()
            && !self.rust_type.starts_with("Option<")
    }

    pub fn new(
        name: String,
        rust_type: String,
        description: Option<String>,
        is_required: bool,
    ) -> Self {
        Self {
            name,
            rust_type,
            description,
            flatten: false,
            bool_const: None,
            is_required,
        }
    }
}

#[derive(Debug, Clone)]
pub struct IrEnum {
    pub name: String,
    pub description: Option<String>,
    pub variants: Vec<IrVariant>,
    pub tag: IrEnumTag,
}

impl IrEnum {
    pub fn is_single_value(&self) -> bool {
        matches!(self.tag, IrEnumTag::StringEnum)
            && self.variants.len() == 1
            && self.variants[0].rust_type.is_empty()
    }
}

#[derive(Debug, Clone)]
pub enum IrEnumTag {
    StringEnum,
    Untagged,
}

#[derive(Debug, Clone)]
pub struct IrVariant {
    pub name: String,
    pub rust_type: String,
    pub description: Option<String>,
    pub serde_rename: Option<String>,
}

#[derive(Debug, Clone)]
pub struct IrAlias {
    pub name: String,
    pub description: Option<String>,
    pub target: String,
}
