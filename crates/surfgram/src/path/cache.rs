use serde_json::Value;
use std::collections::HashMap;

pub(crate) struct PathCache {
    entries: HashMap<String, Value>,
}

impl PathCache {
    pub(crate) fn build(value: &Value) -> Self {
        let mut entries = HashMap::new();
        collect(value, "", &mut entries);
        Self { entries }
    }

    pub(crate) fn get_exact(&self, event: &str) -> Option<&Value> {
        self.entries.get(&event.to_ascii_lowercase())
    }

    pub(crate) fn find(&self, event: &str) -> Option<&Value> {
        let event = event.to_ascii_lowercase();
        if let Some(value) = self.entries.get(&event) {
            if !value.is_null() {
                return Some(value);
            }
        }
        let suffix = format!(".{}", event);
        self.entries.iter().find_map(|(path, value)| {
            if (path.as_str() == event || path.ends_with(&suffix)) && value.is_object() {
                Some(value)
            } else {
                None
            }
        })
    }
}

fn collect(value: &Value, prefix: &str, entries: &mut HashMap<String, Value>) {
    match value {
        Value::Object(map) => {
            for (key, child) in map {
                let path = if prefix.is_empty() {
                    key.to_ascii_lowercase()
                } else {
                    format!("{}.{}", prefix, key.to_ascii_lowercase())
                };
                entries.insert(path.clone(), child.clone());
                collect(child, &path, entries);
            }
        }
        Value::Array(items) => {
            for (i, child) in items.iter().enumerate() {
                collect(child, &format!("{}[{}]", prefix, i), entries);
            }
        }
        _ => {}
    }
}