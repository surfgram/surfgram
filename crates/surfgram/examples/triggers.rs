use surfgram::{Bot, CallbackQuery, ChatMemberUpdated, InlineQuery, Message};

#[surfgram::on_message("/start")]
async fn start(message: Message) {
    let _ = message.send_message("hi there").await;
}

#[surfgram::on_callback_query("buy")]
async fn buy(query: CallbackQuery) {
    println!("callback {:?}", query.data);
}

#[surfgram::on_inline_query]
async fn inline(query: InlineQuery) {
    println!("inline {}", query.query);
}

#[surfgram::on_chat_member]
async fn member(update: ChatMemberUpdated) {
    println!("member {:?}", update.chat.id);
}

#[surfgram::bot]
async fn main() {
    let token = std::env::var("BOT_TOKEN").expect("BOT_TOKEN is not set");

    Bot::new(token)
        .start_polling()
        .await;
}
