pub fn type_names(s: &str) -> Vec<String> {
    let mut names = Vec::new();
    let mut cur = String::new();
    let flush = |cur: &mut String, names: &mut Vec<String>| {
        if !cur.is_empty() {
            let upper = cur
                .chars()
                .next()
                .map(|c| c.is_uppercase())
                .unwrap_or(false);
            if upper && !matches!(cur.as_str(), "Option" | "Vec" | "Box" | "String" | "Value") {
                names.push(cur.clone());
            }
            cur.clear();
        }
    };
    for c in s.chars() {
        if c.is_alphanumeric() || c == '_' {
            cur.push(c);
        } else {
            flush(&mut cur, &mut names);
        }
    }
    flush(&mut cur, &mut names);
    names
}

pub fn boxify(ty: &str, target: &str) -> String {
    if ty == target {
        return format!("Box<{}>", ty);
    }
    if let Some(inner) = ty.strip_prefix("Option<").and_then(|s| s.strip_suffix('>')) {
        return format!("Option<{}>", boxify(inner, target));
    }
    if let Some(inner) = ty.strip_prefix("Vec<").and_then(|s| s.strip_suffix('>')) {
        return format!("Vec<{}>", boxify(inner, target));
    }
    ty.to_string()
}
