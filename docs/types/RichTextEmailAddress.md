# RichTextEmailAddress

A text with an email address.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “email\_address” |
| text | `RichText` | Yes | The text |
| emailAddress | `string` | Yes | The email address |


## Event Handlers

You can listen for RichTextEmailAddress events using:

```typescript
// Type-specific handler
bot.onRichTextEmailAddress(async (richtextemailaddress: RichTextEmailAddress) => {
  console.log('Received:', richtextemailaddress);
});

// Generic handler
bot.on('richtextemailaddress', async (data: RichTextEmailAddress) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextEmailAddress).
