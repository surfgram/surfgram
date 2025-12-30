import { Bot, Message } from 'surfgram';

const bot = new Bot('TOKEN');

bot.onMessage(async (msg: Message) => {
  await msg.sendMessage({
    text: 'Hi there!',
  });
});

bot.startPolling({ skipUpdates: true });
