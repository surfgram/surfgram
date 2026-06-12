# RichTextCashtag

A cashtag.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “cashtag” |
| text | `RichText` | Yes | The text |
| cashtag | `string` | Yes | The cashtag |


## Event Handlers

You can listen for RichTextCashtag events using:

```typescript
// Type-specific handler
bot.onRichTextCashtag(async (richtextcashtag: RichTextCashtag) => {
  console.log('Received:', richtextcashtag);
});

// Generic handler
bot.on('richtextcashtag', async (data: RichTextCashtag) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextCashtag).
