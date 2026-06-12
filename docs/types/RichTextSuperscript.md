# RichTextSuperscript

A superscript text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “superscript” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextSuperscript events using:

```typescript
// Type-specific handler
bot.onRichTextSuperscript(async (richtextsuperscript: RichTextSuperscript) => {
  console.log('Received:', richtextsuperscript);
});

// Generic handler
bot.on('richtextsuperscript', async (data: RichTextSuperscript) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextSuperscript).
