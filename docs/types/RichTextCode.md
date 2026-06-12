# RichTextCode

A monowidth text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “code” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextCode events using:

```typescript
// Type-specific handler
bot.onRichTextCode(async (richtextcode: RichTextCode) => {
  console.log('Received:', richtextcode);
});

// Generic handler
bot.on('richtextcode', async (data: RichTextCode) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextCode).
