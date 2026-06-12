# RichBlockBlockQuotation

A block quotation, corresponding to the HTML tag &lt;blockquote&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “blockquote” |
| blocks | `RichBlock[]` | Yes | Content of the block |
| credit | `RichText` | No | Optional. Credit of the block |


## Event Handlers

You can listen for RichBlockBlockQuotation events using:

```typescript
// Type-specific handler
bot.onRichBlockBlockQuotation(async (richblockblockquotation: RichBlockBlockQuotation) => {
  console.log('Received:', richblockblockquotation);
});

// Generic handler
bot.on('richblockblockquotation', async (data: RichBlockBlockQuotation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockBlockQuotation).
