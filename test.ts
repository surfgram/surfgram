import { Bot, InlineKeyboardMarkup, Message, CallbackQuery } from './src';

const bot = new Bot('7346601222:AAG_mG8A7Ba5mX1fscyYxKShyMDbbQhLK6c');

bot.onMessage('/start', async (msg: Message) => {
  await msg.sendMessage({
    text: 'Click the button',
    replyMarkup: {
      inlineKeyboard: [[{ text: 'Click me!', callbackData: 'button_clicked' }]],
    } as InlineKeyboardMarkup,
  });
});

bot.onSticker(async (anima) => {
  console.log(anima.isAnimated);
});

bot.startPolling();
