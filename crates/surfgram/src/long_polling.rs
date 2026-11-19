use crate::dispatch;
use crate::runtime::{set_default_transport, BoxFuture, Error};
use crate::Bot;
use std::future::IntoFuture;
use std::time::Duration;

const POLL_TIMEOUT: i32 = 30;
const RETRY_DELAY: Duration = Duration::from_secs(1);

impl Bot {
    pub fn start_polling(self) -> Polling {
        Polling {
            bot: self,
            timeout: None,
            limit: None,
            allowed_updates: None,
        }
    }
}

pub struct Polling {
    bot: Bot,
    timeout: Option<i32>,
    limit: Option<i32>,
    allowed_updates: Option<Vec<String>>,
}

impl Polling {
    pub fn timeout(mut self, seconds: i32) -> Self {
        self.timeout = Some(seconds);
        self
    }

    pub fn limit(mut self, limit: i32) -> Self {
        self.limit = Some(limit);
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

    async fn run(self) -> Result<(), Error> {
        let Polling {
            bot,
            timeout,
            limit,
            allowed_updates,
        } = self;

        set_default_transport(bot.api.transport.clone());

        let poll_timeout = timeout.unwrap_or(POLL_TIMEOUT);
        let mut offset: i32 = 0;
        let mut shutdown = Box::pin(tokio::signal::ctrl_c());

        loop {
            let mut request = bot.api.get_updates().timeout(poll_timeout).offset(offset);
            if let Some(n) = limit {
                request = request.limit(n);
            }
            if let Some(ref updates) = allowed_updates {
                request = request.allowed_updates(updates.clone());
            }

            let result = tokio::select! {
                _ = &mut shutdown => return Ok(()),
                result = request.into_future() => result,
            };

            match result {
                Ok(updates) => {
                    for update in updates {
                        offset = offset.max(update.update_id.saturating_add(1));
                        dispatch::dispatch(update, bot.clone());
                    }
                }
                Err(error) => {
                    eprintln!("surfgram: getUpdates failed: {error}");
                    tokio::time::sleep(retry_delay(&error)).await;
                }
            }
        }
    }
}

impl IntoFuture for Polling {
    type Output = Result<(), Error>;
    type IntoFuture = BoxFuture<'static, Self::Output>;

    fn into_future(self) -> Self::IntoFuture {
        Box::pin(self.run())
    }
}

fn retry_delay(error: &Error) -> Duration {
    match error {
        Error::Api(api) => match api.retry_after() {
            Some(seconds) if seconds > 0 => Duration::from_secs(seconds as u64),
            _ => RETRY_DELAY,
        },
        _ => RETRY_DELAY,
    }
}