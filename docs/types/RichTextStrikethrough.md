# RichTextStrikethrough

A strikethrough text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “strikethrough” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextStrikethrough events using:

```typescript
// Type-specific handler
bot.onRichTextStrikethrough(async (richtextstrikethrough: RichTextStrikethrough) => {
  console.log('Received:', richtextstrikethrough);
});

// Generic handler
bot.on('richtextstrikethrough', async (data: RichTextStrikethrough) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextStrikethrough).
