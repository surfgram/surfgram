use super::Pass;
use crate::ir::*;
use crate::naming::to_snake_case;
use std::collections::HashMap;

const FIELD_ALIASES: &[(&str, &str)] = &[("user", "from")];

pub struct BindOwnerParams;

impl Pass for BindOwnerParams {
    fn run(&self, ir: &mut Ir) -> Result<(), String> {
        let types = type_map(&ir.types);
        for m in &mut ir.methods {
            m.bindings = bind(m, &types);
            if m.bindings.is_empty() {
                m.owner = None;
            }
        }
        Ok(())
    }
}

fn bind(m: &IrMethod, types: &HashMap<String, IrType>) -> Vec<IrBinding> {
    let (Some(owner), Some(params)) = (&m.owner, &m.params) else {
        return Vec::new();
    };
    bind_for(owner, params, types)
}

pub(super) fn bind_for(
    owner: &str,
    params: &str,
    types: &HashMap<String, IrType>,
) -> Vec<IrBinding> {
    let (Some(IrType::Struct(owner)), Some(IrType::Struct(params))) =
        (types.get(owner), types.get(params))
    else {
        return Vec::new();
    };

    let mut bindings: Vec<IrBinding> = params
        .fields
        .iter()
        .filter(|f| f.is_required_arg())
        .filter_map(|f| {
            infer(f, owner, types).map(|path| IrBinding {
                param: f.name.clone(),
                path,
            })
        })
        .collect();

    if bindings.iter().any(|b| b.param == "from_chat_id") {
        bindings.retain(|b| b.param != "chat_id");
    }
    bindings
}

fn infer(
    param: &IrField,
    owner: &IrStruct,
    types: &HashMap<String, IrType>,
) -> Option<Vec<String>> {
    let name = param.name.as_str();

    if let Some(f) = owner.field(name) {
        if usable(f) && compatible(&f.rust_type, &param.rust_type, types) {
            return Some(vec![f.name.clone()]);
        }
    }

    if name == format!("{}_id", to_snake_case(&owner.name)) {
        if let Some(f) = owner.field("id") {
            if usable(f) && compatible(&f.rust_type, &param.rust_type, types) {
                return Some(vec!["id".to_string()]);
            }
        }
    }

    let stem = name.strip_suffix("_id")?;
    let stem = stem.strip_prefix("from_").unwrap_or(stem);
    let mut candidates = vec![stem];
    candidates.extend(
        FIELD_ALIASES
            .iter()
            .filter(|(s, _)| *s == stem)
            .map(|(_, alias)| *alias),
    );
    for cand in candidates {
        let Some(f) = owner.field(cand) else { continue };
        if !usable(f) {
            continue;
        }
        let Some(IrType::Struct(inner)) = types.get(strip_box(&f.rust_type)) else {
            continue;
        };
        let Some(id) = inner.field("id") else {
            continue;
        };
        if usable(id) && compatible(&id.rust_type, &param.rust_type, types) {
            return Some(vec![cand.to_string(), "id".to_string()]);
        }
    }
    None
}

fn usable(f: &IrField) -> bool {
    !f.flatten && f.bool_const.is_none() && !f.rust_type.starts_with("Option<")
}

fn strip_box(s: &str) -> &str {
    s.strip_prefix("Box<")
        .and_then(|s| s.strip_suffix('>'))
        .unwrap_or(s)
}

fn compatible(have: &str, want: &str, types: &HashMap<String, IrType>) -> bool {
    let have = strip_box(have);
    if have == want {
        return true;
    }
    matches!(
        types.get(want),
        Some(IrType::Enum(e))
            if matches!(e.tag, IrEnumTag::Untagged) && e.variants.iter().any(|v| v.rust_type == have)
    )
}
