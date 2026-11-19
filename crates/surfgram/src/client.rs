use crate::http::HttpTransport;
use crate::runtime::{default_transport, Error};
use crate::{Bot, Middleware};
use std::sync::Arc;

impl Bot {
    pub fn new(token: impl AsRef<str>) -> Self {
        Self::with_transport(Arc::new(HttpTransport::new(token)))
    }

    pub fn from_default() -> Option<Self> {
        default_transport().map(Self::with_transport)
    }

    pub fn state<T: Send + Sync + 'static>(self, value: T) -> Self {
        self.state.insert(value);
        self
    }

    pub fn middleware(mut self, mw: impl Middleware + 'static) -> Self {
        Arc::make_mut(&mut self.middlewares).push(Arc::new(mw));
        self
    }

    pub fn with_proxy(self, proxy_url: impl AsRef<str>) -> Result<Self, Error> {
        let http = self
            .api
            .transport
            .as_any()
            .downcast_ref::<HttpTransport>()
            .ok_or_else(|| {
                Error::Transport(
                    "with_proxy: the bot is not using the built-in HttpTransport".into(),
                )
            })?;

        let transport = HttpTransport::new(http.token()).with_proxy(proxy_url)?;
        Ok(Self::with_transport(Arc::new(transport)))
    }
}