use serde_json::Value;

pub fn ref_name(schema: &Value) -> Option<&str> {
    schema
        .get("$ref")
        .and_then(|r| r.as_str())
        .and_then(|r| r.split('/').next_back())
}

pub fn description(schema: &Value) -> Option<String> {
    schema
        .get("description")
        .and_then(|d| d.as_str())
        .map(String::from)
}

pub fn type_is(schema: &Value, ty: &str) -> bool {
    schema.get("type").and_then(|t| t.as_str()) == Some(ty)
}

pub fn flag(schema: &Value, key: &str) -> bool {
    schema.get(key).and_then(|n| n.as_bool()).unwrap_or(false)
}

pub fn string_values(arr: &[Value]) -> Vec<String> {
    arr.iter()
        .filter_map(|v| v.as_str().map(String::from))
        .collect()
}

pub fn non_null_variants(arr: &[Value]) -> Vec<Value> {
    arr.iter()
        .filter(|v| v.get("type").and_then(|t| t.as_str()) != Some("null"))
        .cloned()
        .collect()
}

pub fn has_real_variant(real: &[Value]) -> bool {
    real.iter().any(|v| {
        v.get("$ref").is_some() || v.get("type").is_some() || v.get("properties").is_some()
    })
}
