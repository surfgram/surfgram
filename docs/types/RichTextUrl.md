# RichTextUrl

A text with a link.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “url” |
| text | `RichText` | Yes | The text |
| url | `string` | Yes | URL of the link |


## Event Handlers

You can listen for RichTextUrl events using:

```typescript
// Type-specific handler
bot.onRichTextUrl(async (richtexturl: RichTextUrl) => {
  console.log('Received:', richtexturl);
});

// Generic handler
bot.on('richtexturl', async (data: RichTextUrl) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextUrl).
