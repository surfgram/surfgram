#[derive(Debug)]
enum Segment {
    Lit(String),
    Param(String),
}

fn split_template(pattern: &str) -> Vec<Segment> {
    let mut segs = Vec::new();
    let bytes = pattern.as_bytes();
    let mut i = 0;
    let mut lit_start = 0;

    while i < bytes.len() {
        if bytes[i] == b'{' {
            if i > lit_start {
                segs.push(Segment::Lit(pattern[lit_start..i].to_string()));
            }
            let name_start = i + 1;
            let Some(end_rel) = pattern[name_start..].find('}') else {
                break;
            };
            let end = name_start + end_rel;
            segs.push(Segment::Param(pattern[name_start..end].to_string()));
            i = end + 1;
            lit_start = i;
        } else {
            i += 1;
        }
    }

    if lit_start < pattern.len() {
        segs.push(Segment::Lit(pattern[lit_start..].to_string()));
    }
    segs
}

pub(crate) fn match_template(text: &str, pattern: &str) -> Option<Vec<(String, String)>> {
    let segs = split_template(pattern);
    let mut captures = Vec::new();
    let mut pos = 0;

    for (i, seg) in segs.iter().enumerate() {
        match seg {
            Segment::Lit(lit) => {
                if !text[pos..].starts_with(lit.as_str()) {
                    return None;
                }
                pos += lit.len();
            }
            Segment::Param(name) => {
                let next_lit = segs[i + 1..].iter().find_map(|s| match s {
                    Segment::Lit(l) if !l.is_empty() => Some(l.as_str()),
                    _ => None,
                });
                if let Some(next_lit) = next_lit {
                    let end_rel = text[pos..].find(next_lit)?;
                    captures.push((name.clone(), text[pos..pos + end_rel].to_string()));
                    pos += end_rel;
                } else {
                    captures.push((name.clone(), text[pos..].to_string()));
                    pos = text.len();
                }
            }
        }
    }

    if pos != text.len() {
        return None;
    }
    Some(captures)
}