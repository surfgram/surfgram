# RichTextMarked

A marked text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “marked” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextMarked events using:

```typescript
// Type-specific handler
bot.onRichTextMarked(async (richtextmarked: RichTextMarked) => {
  console.log('Received:', richtextmarked);
});

// Generic handler
bot.on('richtextmarked', async (data: RichTextMarked) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextMarked).
