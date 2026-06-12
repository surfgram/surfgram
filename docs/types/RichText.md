# RichText

This object represents a rich formatted text. Currently, it can be either a String for plain text, an Array of RichText, or any of the following types:

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “bold” |
| text | `RichText` | Yes | The text |


## Event Handlers

You can listen for RichText events using:

```typescript
// Type-specific handler
bot.onRichText(async (richtext: RichText) => {
  console.log('Received:', richtext);
});

// Generic handler
bot.on('richtext', async (data: RichText) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichText).
