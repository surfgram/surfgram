use crate::dispatch;
use crate::runtime::{set_default_transport, BoxFuture, Error};
use crate::{Bot, Update};
use axum::{
    extract::{DefaultBodyLimit, State},
    http::{HeaderMap, StatusCode},
    routing::post,
    Json, Router,
};
use std::future::IntoFuture;
use std::net::SocketAddr;
use std::sync::Arc;

const SECRET_HEADER: &str = "X-Telegram-Bot-Api-Secret-Token";

impl Bot {
    pub fn start_webhook(self, url: impl Into<String>) -> Webhook {
        Webhook {
            bot: self,
            url: url.into(),
            secret_token: None,
            bind: "0.0.0.0:8080".into(),
            max_connections: None,
            allowed_updates: None,
            drop_pending_updates: None,
        }
    }

    pub fn serve_webhook(self, bind: impl Into<String>) -> WebhookServer {
        WebhookServer {
            bot: self,
            bind: bind.into(),
            secret_token: None,
        }
    }
}

pub struct Webhook {
    bot: Bot,
    url: String,
    secret_token: Option<String>,
    bind: String,
    max_connections: Option<i32>,
    allowed_updates: Option<Vec<String>>,
    drop_pending_updates: Option<bool>,
}

impl Webhook {
    pub fn secret(mut self, token: impl Into<String>) -> Self {
        self.secret_token = Some(token.into());
        self
    }

    pub fn bind(mut self, addr: impl Into<String>) -> Self {
        self.bind = addr.into();
        self
    }

    pub fn max_connections(mut self, n: i32) -> Self {
        self.max_connections = Some(n);
        self
    }

    pub fn allowed_updates<I, S>(mut self, updates: I) -> Self
    where
        I: IntoIterator<Item = S>,
        S: Into<String>,
    {
        self.allowed_updates = Some(updates.into_iter().map(Into::into).collect());
        self
    }

    pub fn drop_pending_updates(mut self, yes: bool) -> Self {
        self.drop_pending_updates = Some(yes);
        self
    }

    async fn run(self) -> Result<(), Error> {
        let Webhook {
            bot,
            url,
            secret_token,
            bind,
            max_connections,
            allowed_updates,
            drop_pending_updates,
        } = self;

        let mut req = bot.api.set_webhook(url);
        if let Some(token) = secret_token.as_deref() {
            req = req.secret_token(token);
        }
        if let Some(n) = max_connections {
            req = req.max_connections(n);
        }
        if let Some(updates) = allowed_updates {
            req = req.allowed_updates(updates);
        }
        if let Some(yes) = drop_pending_updates {
            req = req.drop_pending_updates(yes);
        }
        req.await?;

        serve(bot, bind, secret_token).await
    }
}

impl IntoFuture for Webhook {
    type Output = Result<(), Error>;
    type IntoFuture = BoxFuture<'static, Self::Output>;

    fn into_future(self) -> Self::IntoFuture {
        Box::pin(self.run())
    }
}

pub struct WebhookServer {
    bot: Bot,
    bind: String,
    secret_token: Option<String>,
}

impl WebhookServer {
    pub fn secret(mut self, token: impl Into<String>) -> Self {
        self.secret_token = Some(token.into());
        self
    }

    pub fn bind(mut self, addr: impl Into<String>) -> Self {
        self.bind = addr.into();
        self
    }
}

impl IntoFuture for WebhookServer {
    type Output = Result<(), Error>;
    type IntoFuture = BoxFuture<'static, Self::Output>;

    fn into_future(self) -> Self::IntoFuture {
        let WebhookServer {
            bot,
            bind,
            secret_token,
        } = self;
        Box::pin(serve(bot, bind, secret_token))
    }
}

async fn serve(bot: Bot, bind: String, secret_token: Option<String>) -> Result<(), Error> {
    set_default_transport(bot.api.transport.clone());

    let state = WebhookState {
        bot: Arc::new(bot),
        secret_token: secret_token.map(Arc::<str>::from),
    };

    let router = Router::new()
        .route("/", post(handle_update))
        .route("/webhook", post(handle_update))
        .fallback(handle_update)
        .layer(DefaultBodyLimit::max(1024 * 1024))
        .with_state(state);

    let addr: SocketAddr = bind
        .parse()
        .map_err(|e| Error::Transport(format!("invalid webhook bind address: {e}")))?;

    let listener = tokio::net::TcpListener::bind(addr)
        .await
        .map_err(|e| Error::Transport(format!("failed to bind webhook server: {e}")))?;

    axum::serve(listener, router)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .map_err(|e| Error::Transport(format!("webhook server error: {e}")))?;

    Ok(())
}

#[derive(Clone)]
struct WebhookState {
    bot: Arc<Bot>,
    secret_token: Option<Arc<str>>,
}

async fn handle_update(
    State(state): State<WebhookState>,
    headers: HeaderMap,
    Json(update): Json<Update>,
) -> StatusCode {
    if let Some(expected) = &state.secret_token {
        let provided = headers.get(SECRET_HEADER).and_then(|v| v.to_str().ok());
        if provided != Some(expected.as_ref()) {
            return StatusCode::UNAUTHORIZED;
        }
    }

    dispatch::dispatch(update, (*state.bot).clone());
    StatusCode::OK
}

async fn shutdown_signal() {
    let _ = tokio::signal::ctrl_c().await;
}
