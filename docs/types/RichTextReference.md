# RichTextReference

A reference.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “reference” |
| text | `RichText` | Yes | Text of the reference |
| name | `string` | Yes | The name of the reference |


## Event Handlers

You can listen for RichTextReference events using:

```typescript
// Type-specific handler
bot.onRichTextReference(async (richtextreference: RichTextReference) => {
  console.log('Received:', richtextreference);
});

// Generic handler
bot.on('richtextreference', async (data: RichTextReference) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextReference).
