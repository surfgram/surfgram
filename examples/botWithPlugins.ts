import { Bot, ReplyKeyboardMarkup } from 'surfgram';
import { SurfgramFSM } from './pluginExample';

const bot = new Bot('TOKEN');

bot.use(new SurfgramFSM());

bot.onMessage('/start', async (msg) => {
  const userId = msg.from?.id;
  if (!userId) return;

  bot.fsm.set(userId, 'mainMenu', {
    firstName: msg.from?.firstName || 'Guest',
    startedAt: Date.now(),
  });

  await msg.sendMessage({
    text: `Hello${msg.from?.firstName ? `, ${msg.from.firstName}` : ''}!`,
    replyMarkup: {
      keyboard: [[{ text: 'Order' }, { text: 'Help' }]],
      resizeKeyboard: true,
    } as ReplyKeyboardMarkup,
  });
});

bot.onMessage(async (msg) => {
  const userId = msg.from?.id;
  if (!userId || !msg.text) return;

  if (msg.text === 'Order') {
    bot.fsm.set(userId, 'ordering', {
      step: 1,
      createdAt: Date.now(),
    });

    await msg.sendMessage({
      text: 'Enter product name:',
    });
    return;
  }

  if (msg.text === 'Help') {
    const userState = bot.fsm.get(userId);
    await msg.sendMessage({
      text: `Your state: ${userState?.state || 'none'}`,
    });
    return;
  }

  if (bot.fsm.is(userId, 'ordering')) {
    const currentState = bot.fsm.get(userId);

    bot.fsm.set(userId, 'orderCompleted', {
      ...currentState?.data,
      productName: msg.text,
      completedAt: Date.now(),
    });

    await msg.sendMessage({
      text: `Product "${msg.text}" added!`,
    });
  }
});

bot.onMessage('/reset', async (msg) => {
  const userId = msg.from?.id;
  if (!userId) return;

  bot.fsm.clear(userId);
  await msg.sendMessage({ text: 'State cleared!' });
});

bot.startPolling({ skipUpdates: true });
