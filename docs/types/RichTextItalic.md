# RichTextItalic

An italicized text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “italic” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextItalic events using:

```typescript
// Type-specific handler
bot.onRichTextItalic(async (richtextitalic: RichTextItalic) => {
  console.log('Received:', richtextitalic);
});

// Generic handler
bot.on('richtextitalic', async (data: RichTextItalic) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextItalic).
