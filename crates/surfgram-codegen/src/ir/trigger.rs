#[derive(Debug, Clone)]
pub struct IrTrigger {
    pub field: String,
    pub payload_enum: Option<String>,
    pub payloads: Vec<IrPayload>,
}

#[derive(Debug, Clone)]
pub struct IrPayload {
    pub ty: String,
    pub variant: Option<String>,
    pub filter: Option<IrFilter>,
}

#[derive(Debug, Clone)]
pub struct IrFilter {
    pub field: String,
}