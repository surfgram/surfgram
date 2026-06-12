# RichTextReferenceLink

A link to a reference.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “reference\_link” |
| text | `RichText` | Yes | The link text |
| referenceName | `string` | Yes | The name of the reference |


## Event Handlers

You can listen for RichTextReferenceLink events using:

```typescript
// Type-specific handler
bot.onRichTextReferenceLink(async (richtextreferencelink: RichTextReferenceLink) => {
  console.log('Received:', richtextreferencelink);
});

// Generic handler
bot.on('richtextreferencelink', async (data: RichTextReferenceLink) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextReferenceLink).
