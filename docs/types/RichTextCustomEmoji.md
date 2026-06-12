# RichTextCustomEmoji

A custom emoji.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “custom\_emoji” |
| customEmojiId | `string` | Yes | Unique identifier of the custom emoji. Use getCustomEmojiStickers to get full information about the sticker. |
| alternativeText | `string` | Yes | Alternative emoji for the custom emoji |


## Event Handlers

You can listen for RichTextCustomEmoji events using:

```typescript
// Type-specific handler
bot.onRichTextCustomEmoji(async (richtextcustomemoji: RichTextCustomEmoji) => {
  console.log('Received:', richtextcustomemoji);
});

// Generic handler
bot.on('richtextcustomemoji', async (data: RichTextCustomEmoji) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextCustomEmoji).
