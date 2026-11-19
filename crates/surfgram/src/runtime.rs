use crate::errors::ApiError;
use crate::methods::ApiMethod;
use crate::upload::{collecting, Attachment};
use std::any::{Any, TypeId};
use std::collections::HashMap;
use std::fmt;
use std::future::Future;
use std::pin::Pin;
use std::sync::{Arc, RwLock};

pub type BoxFuture<'a, T> = Pin<Box<dyn Future<Output = T> + Send + 'a>>;

pub trait Transport: Send + Sync {
    fn send(
        &self,
        method: &'static str,
        params: serde_json::Value,
    ) -> BoxFuture<'_, Result<serde_json::Value, Error>>;

    fn send_multipart(
        &self,
        method: &'static str,
        params: serde_json::Value,
        files: Vec<Attachment>,
    ) -> BoxFuture<'_, Result<serde_json::Value, Error>> {
        let _ = (method, params, files);
        Box::pin(async {
            Err(Error::Transport(
                "this transport does not support file uploads".into(),
            ))
        })
    }

    fn download(&self, file_path: String) -> BoxFuture<'_, Result<Vec<u8>, Error>> {
        let _ = file_path;
        Box::pin(async {
            Err(Error::Transport(
                "this transport does not support file downloads".into(),
            ))
        })
    }

    fn as_any(&self) -> &dyn Any {
        &()
    }
}

#[derive(Debug)]
pub enum Error {
    NoTransport,
    Transport(String),
    Api(ApiError),
    Serialize(serde_json::Error),
    Decode(serde_json::Error),
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Error::NoTransport => f.write_str("no transport: create a bot first"),
            Error::Transport(message) => write!(f, "transport error: {message}"),
            Error::Api(err) => fmt::Display::fmt(err, f),
            Error::Serialize(error) => write!(f, "failed to serialize the request: {error}"),
            Error::Decode(error) => write!(f, "failed to decode the response: {error}"),
        }
    }
}

impl std::error::Error for Error {
    fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        match self {
            Error::Serialize(error) | Error::Decode(error) => Some(error),
            _ => None,
        }
    }
}

#[derive(Clone, Default)]
pub struct State {
    inner: Arc<RwLock<HashMap<TypeId, Box<dyn Any + Send + Sync>>>>,
}

impl State {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn insert<T: Send + Sync + 'static>(&self, value: T) {
        self.inner
            .write()
            .unwrap_or_else(|e| e.into_inner())
            .insert(TypeId::of::<T>(), Box::new(value));
    }

    pub fn get<T: Clone + Send + Sync + 'static>(&self) -> Option<T> {
        self.inner
            .read()
            .unwrap_or_else(|e| e.into_inner())
            .get(&TypeId::of::<T>())?
            .downcast_ref::<T>()
            .cloned()
    }
}

pub struct Context {
    pub state: State,
    pub extensions: HashMap<TypeId, Box<dyn Any + Send + Sync>>,
}

impl Context {
    pub fn new(state: State) -> Self {
        Self {
            state,
            extensions: HashMap::new(),
        }
    }
}

pub trait FromState: Sized {
    fn from_state(ctx: &Context) -> Option<Self>;
}

impl<T: Clone + Send + Sync + 'static> FromState for T {
    fn from_state(ctx: &Context) -> Option<Self> {
        if let Some(val) = ctx.extensions.get(&TypeId::of::<T>()) {
            if let Some(v) = val.downcast_ref::<T>() {
                return Some(v.clone());
            }
        }
        ctx.state.get::<T>()
    }
}

static DEFAULT: RwLock<Option<Arc<dyn Transport>>> = RwLock::new(None);

pub fn set_default_transport(transport: Arc<dyn Transport>) {
    *DEFAULT.write().unwrap_or_else(|e| e.into_inner()) = Some(transport);
}

pub fn default_transport() -> Option<Arc<dyn Transport>> {
    DEFAULT.read().unwrap_or_else(|e| e.into_inner()).clone()
}

pub async fn call<M: ApiMethod>(
    transport: Option<Arc<dyn Transport>>,
    params: M,
) -> Result<M::Response, Error> {
    let transport = transport
        .or_else(default_transport)
        .ok_or(Error::NoTransport)?;
    let (body, files) = collecting(|| serde_json::to_value(&params));
    let body = body.map_err(Error::Serialize)?;
    drop(params);
    let result = if files.is_empty() {
        transport.send(M::METHOD.as_str(), body).await?
    } else {
        transport
            .send_multipart(M::METHOD.as_str(), body, files)
            .await?
    };
    serde_json::from_value(result).map_err(Error::Decode)
}