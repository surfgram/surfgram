# BotName

This object represents the bot&#39;s name.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| name | `string` | Yes | The bot's name |


## Event Handlers

You can listen for BotName events using:

```typescript
// Type-specific handler
bot.onBotName(async (botname: BotName) => {
  console.log('Received:', botname);
});

// Generic handler
bot.on('botname', async (data: BotName) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotName).
