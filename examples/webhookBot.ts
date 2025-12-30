import { Bot, Message } from 'surfgram';

const bot = new Bot('TOKEN');

bot.onMessage(async (msg: Message) => {
  await msg.sendMessage({
    text: 'Hi there!',
  });
});

bot.startWebhook({ url: 'your-webhook-url.com' });
