#[derive(Debug, Clone)]
pub struct IrMethod {
    pub name: String,
    pub description: Option<String>,
    pub params: Option<String>,
    pub multipart: bool,
    pub result: String,
    pub owner: Option<String>,
    pub bindings: Vec<IrBinding>,
}

#[derive(Debug, Clone)]
pub struct IrBinding {
    pub param: String,
    pub path: Vec<String>,
}
