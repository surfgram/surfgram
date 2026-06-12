# RichTextTextMention

A mention of a Telegram user by their identifier.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “text\_mention” |
| text | `RichText` | Yes | The text |
| user | `User` | Yes | The mentioned user |


## Event Handlers

You can listen for RichTextTextMention events using:

```typescript
// Type-specific handler
bot.onRichTextTextMention(async (richtexttextmention: RichTextTextMention) => {
  console.log('Received:', richtexttextmention);
});

// Generic handler
bot.on('richtexttextmention', async (data: RichTextTextMention) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextTextMention).
