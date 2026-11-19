use crate::runtime::Error;
use serde::de;
use serde::{Deserialize, Deserializer, Serialize, Serializer};
use std::cell::RefCell;
use std::path::{Path, PathBuf};
use std::sync::Arc;

#[derive(Debug, Clone, PartialEq)]
pub struct Upload {
    source: Source,
    file_name: Option<String>,
    mime_type: Option<String>,
}

#[derive(Clone, PartialEq)]
enum Source {
    Bytes(Arc<[u8]>),
    Path(PathBuf),
}

impl std::fmt::Debug for Source {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Source::Bytes(data) => write!(f, "Bytes({} bytes)", data.len()),
            Source::Path(path) => f.debug_tuple("Path").field(path).finish(),
        }
    }
}

impl Upload {
    pub fn path(path: impl Into<PathBuf>) -> Self {
        Self {
            source: Source::Path(path.into()),
            file_name: None,
            mime_type: None,
        }
    }

    pub fn bytes(data: impl Into<Vec<u8>>) -> Self {
        let data: Vec<u8> = data.into();
        Self {
            source: Source::Bytes(Arc::from(data)),
            file_name: None,
            mime_type: None,
        }
    }

    pub fn file_name(mut self, name: impl Into<String>) -> Self {
        self.file_name = Some(name.into());
        self
    }

    pub fn mime_type(mut self, mime: impl Into<String>) -> Self {
        self.mime_type = Some(mime.into());
        self
    }
}

impl Serialize for Upload {
    fn serialize<S: Serializer>(&self, serializer: S) -> Result<S::Ok, S::Error> {
        let name = register(self.clone());
        serializer.serialize_str(&format!("attach://{name}"))
    }
}

impl<'de> Deserialize<'de> for Upload {
    fn deserialize<D: Deserializer<'de>>(_deserializer: D) -> Result<Self, D::Error> {
        Err(de::Error::custom("an upload cannot be deserialized"))
    }
}

#[derive(Debug, Clone)]
pub struct Attachment {
    name: String,
    upload: Upload,
}

impl Attachment {
    pub fn name(&self) -> &str {
        &self.name
    }

    pub fn file_name(&self) -> String {
        if let Some(name) = &self.upload.file_name {
            return name.clone();
        }
        if let Source::Path(path) = &self.upload.source {
            if let Some(name) = path.file_name() {
                return name.to_string_lossy().into_owned();
            }
        }
        self.name.clone()
    }

    pub fn mime_type(&self) -> Option<&str> {
        self.upload.mime_type.as_deref()
    }

    pub async fn read(&self) -> Result<Vec<u8>, Error> {
        match &self.upload.source {
            Source::Bytes(data) => Ok(data.to_vec()),
            Source::Path(path) => read_file(path).await,
        }
    }
}

async fn read_file(path: &Path) -> Result<Vec<u8>, Error> {
    tokio::fs::read(path)
        .await
        .map_err(|e| Error::Transport(format!("failed to read {}: {e}", path.display())))
}

thread_local! {
    static COLLECTOR: RefCell<Option<Vec<Attachment>>> = RefCell::new(None);
}

fn register(upload: Upload) -> String {
    COLLECTOR.with(|cell| match cell.borrow_mut().as_mut() {
        Some(list) => {
            let name = format!("file{}", list.len());
            list.push(Attachment {
                name: name.clone(),
                upload,
            });
            name
        }
        None => "file0".to_string(),
    })
}

struct Reset;

impl Drop for Reset {
    fn drop(&mut self) {
        COLLECTOR.with(|cell| *cell.borrow_mut() = None);
    }
}

pub(crate) fn collecting<T>(f: impl FnOnce() -> T) -> (T, Vec<Attachment>) {
    COLLECTOR.with(|cell| *cell.borrow_mut() = Some(Vec::new()));
    let _reset = Reset;
    let out = f();
    let files = COLLECTOR
        .with(|cell| cell.borrow_mut().take())
        .unwrap_or_default();
    (out, files)
}
