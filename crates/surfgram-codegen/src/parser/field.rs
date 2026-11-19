use super::{enums, typemap, util};
use crate::ir::*;
use crate::naming::{to_pascal_case, to_snake_case};
use serde_json::Value;

pub(super) fn parse_field(
    name: &str,
    schema: &Value,
    is_required: bool,
    parent: &str,
    extra_types: &mut Vec<IrType>,
) -> Result<IrField, String> {
    let description = util::description(schema);

    let is_required = is_required
        && !(util::type_is(schema, "boolean")
            && description
                .as_ref()
                .is_some_and(|d| d.contains("If omitted")));

    let nullable = util::flag(schema, "nullable");
    let wrap = |t: String| typemap::maybe_optional(t, is_required, nullable);
    let finish = |rust_type: String| {
        IrField::new(
            to_snake_case(name),
            rust_type,
            description.clone(),
            is_required,
        )
    };
    let inline = format!("{}{}", parent, to_pascal_case(name));

    if let Some(c) = schema.get("const").and_then(|v| v.as_str()) {
        extra_types.push(IrType::Enum(enums::const_enum(&inline, c)));
        return Ok(finish(wrap(inline)));
    }

    if let Some(b) = schema.get("const").and_then(|v| v.as_bool()) {
        let mut f = finish("bool".to_string());
        f.bool_const = Some(b);
        return Ok(f);
    }

    let strs = enums::enum_strings(schema);
    if !strs.is_empty() {
        extra_types.push(IrType::Enum(enums::string_enum(&inline, None, &strs)));
        return Ok(finish(wrap(inline)));
    }

    if let Some(cs) = schema.get("contentSchema") {
        if let Some(target) = typemap::schema_to_type(cs, Some(&inline), extra_types) {
            let target = if util::flag(cs, "nullable") {
                format!("Option<{}>", target)
            } else {
                target
            };
            return Ok(finish(wrap(target)));
        }
    }

    if let Some(all_of) = schema.get("allOf").and_then(|a| a.as_array()) {
        if let Some(target) = all_of.iter().find_map(util::ref_name) {
            return Ok(finish(wrap(target.to_string())));
        }
    }

    if schema.get("type").is_none() {
        for key in ["oneOf", "anyOf"] {
            if let Some(arr) = schema.get(key).and_then(|o| o.as_array()) {
                let real = util::non_null_variants(arr);
                if !util::has_real_variant(&real) {
                    if let Some(target) =
                        typemap::schema_to_type(schema, Some(&inline), extra_types)
                    {
                        return Ok(finish(wrap(target)));
                    }
                } else if !real.is_empty() {
                    let new_enum = enums::parse_union(&inline, &real, schema, None, extra_types)?;
                    extra_types.push(IrType::Enum(new_enum));
                    return Ok(finish(wrap(inline)));
                }
            }
        }
    }

    let raw = typemap::schema_to_type(schema, Some(&inline), extra_types)
        .unwrap_or_else(|| "serde_json::Value".to_string());
    Ok(finish(wrap(raw)))
}
