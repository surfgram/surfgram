# RichBlockParagraph

A text paragraph, corresponding to the HTML tag &lt;p&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “paragraph” |
| text | `RichText` | Yes | Text of the block |


## Event Handlers

You can listen for RichBlockParagraph events using:

```typescript
// Type-specific handler
bot.onRichBlockParagraph(async (richblockparagraph: RichBlockParagraph) => {
  console.log('Received:', richblockparagraph);
});

// Generic handler
bot.on('richblockparagraph', async (data: RichBlockParagraph) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockParagraph).
