use surfgram::{Bot, Message};

#[surfgram::on_message("/start")]
async fn start_cmd(message: Message) -> Result<(), surfgram::Error> {
    message.send_message("Hello world!").await?;
    Ok(())
}

#[surfgram::bot]
async fn main() {
    let token = std::env::var("BOT_TOKEN").expect("BOT_TOKEN is not set");

    Bot::new(token)
        .start_polling()
        .await?;
}