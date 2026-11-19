# Surfgram

## Overview

Surfgram is SDK for Telegram Bot API with:

- Strict typing
- Proc-macro based API
- Fluent interface

### Write your first bot

```rust
use surfgram::{Bot, Message};

#[surfgram::on_message("/start")]
async fn start_cmd(message: Message) -> Result<(), surfgram::Error> {
    message.send_message("Hello world!").await?;
    Ok(())
}

#[surfgram::bot]
async fn main() {
    Bot::new("TOKEN")
        .start_polling()
        .await?;
}
```
