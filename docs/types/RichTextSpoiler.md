# RichTextSpoiler

A text covered by a spoiler.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “spoiler” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextSpoiler events using:

```typescript
// Type-specific handler
bot.onRichTextSpoiler(async (richtextspoiler: RichTextSpoiler) => {
  console.log('Received:', richtextspoiler);
});

// Generic handler
bot.on('richtextspoiler', async (data: RichTextSpoiler) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextSpoiler).
