# RichTextBold

A bold text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “bold” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextBold events using:

```typescript
// Type-specific handler
bot.onRichTextBold(async (richtextbold: RichTextBold) => {
  console.log('Received:', richtextbold);
});

// Generic handler
bot.on('richtextbold', async (data: RichTextBold) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextBold).
