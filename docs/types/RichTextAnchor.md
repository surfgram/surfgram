# RichTextAnchor

An anchor.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “anchor” |
| name | `string` | Yes | The name of the anchor |


## Event Handlers

You can listen for RichTextAnchor events using:

```typescript
// Type-specific handler
bot.onRichTextAnchor(async (richtextanchor: RichTextAnchor) => {
  console.log('Received:', richtextanchor);
});

// Generic handler
bot.on('richtextanchor', async (data: RichTextAnchor) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextAnchor).
