# InputRichBlockParagraph

A text paragraph, corresponding to the HTML tag &lt;p&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “paragraph” |
| text | `RichText` | Yes | Text of the block |


## Event Handlers

You can listen for InputRichBlockParagraph events using:

```typescript
// Type-specific handler
bot.onInputRichBlockParagraph(async (inputrichblockparagraph: InputRichBlockParagraph) => {
  console.log('Received:', inputrichblockparagraph);
});

// Generic handler
bot.on('inputrichblockparagraph', async (data: InputRichBlockParagraph) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockParagraph).
