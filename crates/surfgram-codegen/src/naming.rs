use crate::ir::IrVariant;
use std::collections::HashSet;

pub fn dedup_variant_names(variants: &mut [IrVariant]) {
    let mut seen: HashSet<String> = HashSet::new();
    for v in variants.iter_mut() {
        if seen.insert(v.name.clone()) {
            continue;
        }
        let base = v.name.clone();
        let mut n = 2u32;
        loop {
            let candidate = format!("{}{}", base, n);
            if seen.insert(candidate.clone()) {
                v.name = candidate;
                break;
            }
            n += 1;
        }
    }
}

pub fn to_snake_case(s: &str) -> String {
    let mut out = String::new();
    let mut prev_lower = false;
    for c in s.chars() {
        if c.is_uppercase() {
            if prev_lower {
                out.push('_');
            }
            out.extend(c.to_lowercase());
            prev_lower = false;
        } else if c.is_ascii_alphanumeric() || c == '_' {
            out.push(c);
            prev_lower = c.is_ascii_lowercase() || c.is_ascii_digit();
        } else {
            out.push('_');
            prev_lower = false;
        }
    }
    out
}

pub fn to_pascal_case(s: &str) -> String {
    let mut out = String::new();
    let mut cap = true;
    for c in s.chars() {
        if c == '_' || c == '-' || c == ' ' {
            cap = true;
        } else if cap {
            out.extend(c.to_uppercase());
            cap = false;
        } else {
            out.push(c);
        }
    }
    out
}

pub fn enum_variant_name(value: &str, index: usize) -> String {
    let p = to_pascal_case(value);
    let first = p.chars().next();
    let valid = !p.is_empty()
        && first.is_some_and(|c| c.is_ascii_alphabetic() || c == '_')
        && p.chars().all(|c| c.is_ascii_alphanumeric() || c == '_');
    if valid {
        p
    } else {
        format!("V{}", index)
    }
}
