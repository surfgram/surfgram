# Bot

### Basic Bot Example

```typescript
import { Bot, Message } from 'surfgram';

const bot = new Bot('BOT_TOKEN');

bot.onMessage(async (message: Message) => {
  await message.sendMessage({
    text: `You said: ${message.text}`,
  });
});

bot.startPolling();
```

<details>
<summary><strong>What's going on here?</strong></summary>

**Line-by-line explanation:**

1. **`import { Bot, Message } from 'surfgram';`**  
   First, we import the `Bot` class — the main class for controlling your bot
   For strict typing, we also import the `Message` class

2. **`const bot = new Bot('BOT_TOKEN');`**
   Next, we create a new instance of the `Bot` class

   > [!IMPORTANT]
   > Replace `'BOT_TOKEN'` with your actual bot token from [@BotFather](https://t.me/botfather)

3. **`bot.onMessage(async (message: Message) => {`**
   This method sets up an event listener that triggers when the bot receives a message

4. **`await message.sendMessage({ text: message.text });`**
   This line sends a response back to the user, using the `sendMessage` method on the received message object

5. **`bot.startPolling()`**
Finally, we start the bot by calling the `startPolling()` function
</details>

### Getting Updates

You have two options to receive updates (read more on [Core Concepts](./core-concepts.md)) from Telegram:

#### Polling (Recommended for development)

```typescript
// Start long polling
await bot.startPolling();

// With options
await bot.startPolling({
  timeout: 30, // Timeout in seconds (default: 10)
  limit: 50, // Updates per request (default: 100)
  skipUpdates: true, // Skip old updates on start
});
```

#### Webhook (Recommended for production)

```typescript
await bot.startWebhook({
  port: 3000, // Server port
  path: '/webhook', // Webhook path
  url: 'https://your-domain.com', // Public URL
  secretToken: 'your-secret-token', // For security verification
});
```

### Stopping the bot

```typescript
// Stop polling
await bot.stopPolling();

// Stop webhook
await bot.stopWebhook();

// Cleanup all resources
await bot.cleanup();
```
