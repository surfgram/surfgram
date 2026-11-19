mod cache;
mod deserializer;
mod template;

pub(crate) use cache::PathCache;
pub(crate) use template::match_template;

use deserializer::deserialize_captures;
use serde::de::DeserializeOwned;
use std::fmt;
use std::ops::Deref;

#[derive(Debug, Clone)]
pub struct Captures {
    pub(crate) values: Vec<(String, String)>,
}

impl Captures {
    pub(crate) fn empty() -> Self {
        Self { values: Vec::new() }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash)]
pub struct Path<T>(pub T);

impl<T> Path<T> {
    pub fn into_inner(self) -> T {
        self.0
    }
}

impl<T> Deref for Path<T> {
    type Target = T;
    fn deref(&self) -> &T {
        &self.0
    }
}

impl<T> From<T> for Path<T> {
    fn from(value: T) -> Self {
        Path(value)
    }
}

#[derive(Debug, Clone)]
pub struct PathRejection {
    message: String,
}

impl PathRejection {
    pub fn message(&self) -> &str {
        &self.message
    }
}

impl fmt::Display for PathRejection {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(&self.message)
    }
}

impl std::error::Error for PathRejection {}

impl<T: DeserializeOwned> Path<T> {
    pub fn try_from_captures(captures: &Captures) -> Result<Self, PathRejection> {
        deserialize_captures(&captures.values)
            .map(Path)
            .map_err(|e| PathRejection {
                message: e.to_string(),
            })
    }

    pub fn from_captures(captures: &Captures) -> Option<Self> {
        Self::try_from_captures(captures).ok()
    }
}