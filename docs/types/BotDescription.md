# BotDescription

This object represents the bot&#39;s description.

## Fields

| Name        | Type     | Required | Description           |
| :---------- | :------- | :------: | :-------------------- |
| description | `string` |   Yes    | The bot's description |

## Event Handlers

You can listen for BotDescription events using:

```typescript
// Type-specific handler
bot.onBotDescription(async (botdescription: BotDescription) => {
  console.log('Received:', botdescription);
});

// Generic handler
bot.on('botdescription', async (data: BotDescription) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotDescription).
