import { Bot, InlineKeyboardMarkup, Message, CallbackQuery } from "surfgram";

const bot = new Bot("TOKEN");

bot.onMessage("/start", async (msg: Message) => {
	await msg.sendMessage({
		text: "Click the button",
		replyMarkup: {
			inlineKeyboard: [[{ text: "Click me!", callbackData: "button_clicked" }]],
		} as InlineKeyboardMarkup,
	});
});

bot.onCallbackQuery("button_clicked", async (cb: CallbackQuery) => {
	await cb.answerCallbackQuery({ text: "Button clicked!" });
});

bot.startPolling();
