//! Surfgram: an elegant Telegram Bot framework
//!
//! ```no_run
//! use surfgram::{Bot, Message, Path};
//!
//! #[surfgram::on_message("/start")]
//! async fn start_cmd(message: Message) -> Result<(), surfgram::Error> {
//!     message.send_message("Hello world!").await?;
//!     Ok(())
//! }
//!
//! #[surfgram::bot]
//! async fn main() {
//!     Bot::new("TOKEN").start_polling().await;
//! }
//! ```

mod client;
mod dispatch;
mod download;
mod http;
mod middleware;
mod path;
mod upload;
pub mod runtime;
mod webhooks;
mod long_polling;

include!(concat!(env!("OUT_DIR"), "/api.rs"));

pub use bot::{Api, Bot};
pub use long_polling::Polling;
pub use webhooks::{Webhook, WebhookServer};
pub use dispatch::{Handler, HandlerFuture};
pub use download::{Download, HasFile};
pub use errors::*;
pub use http::HttpTransport;
pub use middleware::{Middleware, MiddlewareFuture, MiddlewareResult};
pub use path::{Captures, Path, PathRejection};
pub use upload::{Attachment, Upload};
pub use runtime::{BoxFuture, Context, Error, FromState, State, Transport};
pub use surfgram_macros::*;
pub use types::*;

#[doc(hidden)]
pub mod __private {
    pub use inventory;
    pub use tokio;
}