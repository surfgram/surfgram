use crate::middleware::MiddlewareResult;
use crate::path::{match_template, Captures, PathCache};
use crate::runtime::Context;
use crate::{Bot, Update};
use std::collections::HashMap;
use std::future::Future;
use std::pin::Pin;
use std::sync::OnceLock;

pub type HandlerFuture = Pin<Box<dyn Future<Output = ()> + Send>>;

pub struct Handler {
    pub name: &'static str,
    pub trigger: &'static str,
    pub pattern: Option<&'static str>,
    pub priority: u32,
    pub dispatch: fn(&Update, &Bot, &Captures, &Context) -> Option<HandlerFuture>,
}

inventory::collect!(Handler);

static HANDLERS: OnceLock<Vec<&'static Handler>> = OnceLock::new();

fn handlers() -> &'static [&'static Handler] {
    HANDLERS.get_or_init(|| {
        let mut v: Vec<&'static Handler> = inventory::iter::<Handler>.into_iter().collect();
        v.sort_by_key(|h| std::cmp::Reverse(h.priority));
        v
    })
}

pub(crate) fn dispatch(update: Update, bot: Bot) {
    tokio::spawn(async move {
        let Ok(value) = serde_json::to_value(&update) else {
            return;
        };
        let cache = PathCache::build(&value);

        let mut ctx = Context::new(bot.state.clone());

        for mw in bot.middlewares.iter() {
            match mw.process(&update, &bot, &ctx).await {
                MiddlewareResult::Continue => {}
                MiddlewareResult::Block => return,
                MiddlewareResult::Inject(val) => {
                    let type_id = (*val).type_id();
                    ctx.extensions.insert(type_id, val);
                }
            }
        }

        let mut best: HashMap<&'static str, (u32, Vec<HandlerFuture>)> = HashMap::new();

        for handler in handlers() {
            let Some(captures) = resolve_captures(&cache, handler) else {
                continue;
            };

            if let Some(future) = (handler.dispatch)(&update, &bot, &captures, &ctx) {
                let entry = best
                    .entry(handler.trigger)
                    .or_insert((handler.priority, Vec::new()));

                if handler.priority > entry.0 {
                    entry.0 = handler.priority;
                    entry.1.clear();
                    entry.1.push(future);
                } else if handler.priority == entry.0 {
                    entry.1.push(future);
                }
            }
        }

        for (_, (_, futures)) in best {
            for future in futures {
                tokio::spawn(future);
            }
        }
    });
}

fn resolve_captures(cache: &PathCache, handler: &Handler) -> Option<Captures> {
    match handler.pattern {
        Some(pattern) if pattern.contains('{') => {
            let text = cache.get_exact(handler.trigger)?.as_str()?;
            let values = match_template(text, pattern)?;
            Some(Captures { values })
        }
        Some(pattern) => {
            let text = cache.get_exact(handler.trigger)?.as_str()?;
            if !pattern_matches_simple(text, pattern) {
                return None;
            }
            Some(Captures::empty())
        }
        None => {
            cache.find(handler.trigger)?;
            Some(Captures::empty())
        }
    }
}

fn pattern_matches_simple(text: &str, pattern: &str) -> bool {
    match pattern.strip_suffix('*') {
        Some(prefix) => text.starts_with(prefix),
        None => text == pattern,
    }
}