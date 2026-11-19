use super::{enums, typemap, util};
use crate::ir::*;
use serde_json::Value;

pub(super) fn parse_methods(
    root: &Value,
    extra_types: &mut Vec<IrType>,
) -> Result<Vec<IrMethod>, String> {
    let Some(paths) = root.get("paths").and_then(|p| p.as_object()) else {
        return Ok(Vec::new());
    };

    let mut out = Vec::new();
    for (path, item) in paths {
        if path.contains('{') {
            continue;
        }
        let Some(op) = item.get("post") else { continue };
        let Some(name) = op.get("operationId").and_then(|v| v.as_str()) else {
            continue;
        };

        let body = op.get("requestBody");
        let content = body
            .and_then(|b| b.get("content"))
            .and_then(|c| c.as_object());
        let multipart = content.is_some_and(|c| c.contains_key("multipart/form-data"));
        let params = content
            .and_then(|c| {
                c.values()
                    .find_map(|m| m.get("schema").and_then(schema_ref))
            })
            .map(String::from);

        let result =
            result_type(root, op, extra_types).unwrap_or_else(|| "serde_json::Value".to_string());

        out.push(IrMethod {
            name: name.to_string(),
            description: util::description(op),
            params,
            multipart,
            result,
            owner: None,
            bindings: Vec::new(),
        });
    }
    Ok(out)
}

fn schema_ref(schema: &Value) -> Option<&str> {
    util::ref_name(schema).or_else(|| {
        schema
            .get("allOf")
            .and_then(|a| a.as_array())
            .and_then(|a| a.iter().find_map(util::ref_name))
    })
}

fn resolve<'a>(root: &'a Value, reference: &str) -> Option<&'a Value> {
    root.pointer(reference.strip_prefix('#')?)
}

fn result_type(root: &Value, op: &Value, extra_types: &mut Vec<IrType>) -> Option<String> {
    let response_ref = op.get("responses")?.get("200")?.get("$ref")?.as_str()?;
    let response = resolve(root, response_ref)?;

    let media_ref = response
        .get("content")?
        .get("application/json")?
        .get("$ref")?
        .as_str()?;
    let media = resolve(root, media_ref)?;
    let media_name = media_ref.rsplit('/').next()?;

    let result = media.get("schema")?.get("properties")?.get("result")?;

    if result.get("type").is_none() {
        for key in ["oneOf", "anyOf"] {
            if let Some(arr) = result.get(key).and_then(|a| a.as_array()) {
                let name = media_name.strip_suffix("Result").unwrap_or(media_name);
                if !extra_types.iter().any(|t| t.name() == name) {
                    let real = util::non_null_variants(arr);
                    let e = enums::parse_union(name, &real, result, None, extra_types).ok()?;
                    extra_types.push(IrType::Enum(e));
                }
                return Some(name.to_string());
            }
        }
    }

    typemap::schema_to_type(result, Some(media_name), extra_types)
}
