# InputRichBlockBlockQuotation

A block quotation, corresponding to the HTML tag &lt;blockquote&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “blockquote” |
| blocks | `InputRichBlock[]` | Yes | Content of the block |
| credit | `RichText` | No | Optional. Credit of the block |


## Event Handlers

You can listen for InputRichBlockBlockQuotation events using:

```typescript
// Type-specific handler
bot.onInputRichBlockBlockQuotation(async (inputrichblockblockquotation: InputRichBlockBlockQuotation) => {
  console.log('Received:', inputrichblockblockquotation);
});

// Generic handler
bot.on('inputrichblockblockquotation', async (data: InputRichBlockBlockQuotation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockBlockQuotation).
