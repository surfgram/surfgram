# RichTextUnderline

An underlined text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “underline” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichTextUnderline events using:

```typescript
// Type-specific handler
bot.onRichTextUnderline(async (richtextunderline: RichTextUnderline) => {
  console.log('Received:', richtextunderline);
});

// Generic handler
bot.on('richtextunderline', async (data: RichTextUnderline) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextUnderline).
