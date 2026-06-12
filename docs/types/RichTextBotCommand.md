# RichTextBotCommand

A bot command.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “bot\_command” |
| text | `RichText` | Yes | The text |
| botCommand | `string` | Yes | The bot command |


## Event Handlers

You can listen for RichTextBotCommand events using:

```typescript
// Type-specific handler
bot.onRichTextBotCommand(async (richtextbotcommand: RichTextBotCommand) => {
  console.log('Received:', richtextbotcommand);
});

// Generic handler
bot.on('richtextbotcommand', async (data: RichTextBotCommand) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextBotCommand).
