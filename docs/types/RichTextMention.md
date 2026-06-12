# RichTextMention

A mention by a username.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “mention” |
| text | `RichText` | Yes | The text |
| username | `string` | Yes | The username |


## Event Handlers

You can listen for RichTextMention events using:

```typescript
// Type-specific handler
bot.onRichTextMention(async (richtextmention: RichTextMention) => {
  console.log('Received:', richtextmention);
});

// Generic handler
bot.on('richtextmention', async (data: RichTextMention) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextMention).
