# RichTextSubscript

A subscript text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “subscript” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextSubscript events using:

```typescript
// Type-specific handler
bot.onRichTextSubscript(async (richtextsubscript: RichTextSubscript) => {
  console.log('Received:', richtextsubscript);
});

// Generic handler
bot.on('richtextsubscript', async (data: RichTextSubscript) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextSubscript).
