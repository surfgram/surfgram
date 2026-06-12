# RichTextHashtag

A hashtag.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “hashtag” |
| text | `RichText` | Yes | The text |
| hashtag | `string` | Yes | The hashtag |


## Event Handlers

You can listen for RichTextHashtag events using:

```typescript
// Type-specific handler
bot.onRichTextHashtag(async (richtexthashtag: RichTextHashtag) => {
  console.log('Received:', richtexthashtag);
});

// Generic handler
bot.on('richtexthashtag', async (data: RichTextHashtag) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextHashtag).
