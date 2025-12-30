# TextQuote

This object contains information about the quoted part of a message that is replied to by the given message.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| text | `string` | Yes | Text of the quoted part of a message that is replied to by the given message |
| entities | `MessageEntity[]` | No | Optional. Special entities that appear in the quote. Currently, only bold, italic, underline, strikethrough, spoiler, and custom\_emoji entities are kept in quotes. |
| position | `number` | Yes | Approximate quote position in the original message in UTF-16 code units as specified by the sender |
| isManual | `boolean` | No | Optional. True, if the quote was chosen manually by the message sender. Otherwise, the quote was added automatically by the server. |


## Event Handlers

You can listen for TextQuote events using:

```typescript
// Type-specific handler
bot.onTextQuote(async (textquote: TextQuote) => {
  console.log('Received:', textquote);
});

// Generic handler
bot.on('textquote', async (data: TextQuote) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TextQuote).
