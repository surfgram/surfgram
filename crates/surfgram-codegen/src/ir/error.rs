#[derive(Debug, Clone)]
pub struct IrError {
    pub name: String,
    pub description: Option<String>,
    pub code: i64,
    pub parameters: Option<IrErrorParameters>,
}

#[derive(Debug, Clone)]
pub struct IrErrorParameters {
    pub ty_name: String,
    pub is_required: bool,
    pub fields: Vec<IrErrorField>,
}

#[derive(Debug, Clone)]
pub struct IrErrorField {
    pub name: String,
    pub rust_type: String,
    pub description: Option<String>,
    pub is_required: bool,
}