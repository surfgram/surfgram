# RichTextAnchorLink

A link to an anchor.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “anchor\_link” |
| text | `RichText` | Yes | The link text |
| anchorName | `string` | Yes | The name of the anchor. If the name is empty, then the link brings back to the top of the message. |


## Event Handlers

You can listen for RichTextAnchorLink events using:

```typescript
// Type-specific handler
bot.onRichTextAnchorLink(async (richtextanchorlink: RichTextAnchorLink) => {
  console.log('Received:', richtextanchorlink);
});

// Generic handler
bot.on('richtextanchorlink', async (data: RichTextAnchorLink) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextAnchorLink).
