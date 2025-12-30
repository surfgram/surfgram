# BotShortDescription

This object represents the bot&#39;s short description.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| shortDescription | `string` | Yes | The bot's short description |


## Event Handlers

You can listen for BotShortDescription events using:

```typescript
// Type-specific handler
bot.onBotShortDescription(async (botshortdescription: BotShortDescription) => {
  console.log('Received:', botshortdescription);
});

// Generic handler
bot.on('botshortdescription', async (data: BotShortDescription) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotShortDescription).
