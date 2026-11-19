use crate::runtime::Context;
use crate::{Bot, Update};
use std::any::Any;
use std::future::Future;
use std::pin::Pin;

pub enum MiddlewareResult {
    Continue,
    Block,
    Inject(Box<dyn Any + Send + Sync>),
}

pub type MiddlewareFuture<'a> = Pin<Box<dyn Future<Output = MiddlewareResult> + Send + 'a>>;

pub trait Middleware: Send + Sync {
    fn process<'a>(
        &'a self,
        update: &'a Update,
        bot: &'a Bot,
        ctx: &'a Context,
    ) -> MiddlewareFuture<'a>;
}