# RichBlockPullQuotation

A quotation with centered text, loosely corresponding to the HTML tag &lt;aside&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “pullquote” |
| text | `RichText` | Yes | Text of the block |
| credit | `RichText` | No | Optional. Credit of the block |


## Event Handlers

You can listen for RichBlockPullQuotation events using:

```typescript
// Type-specific handler
bot.onRichBlockPullQuotation(async (richblockpullquotation: RichBlockPullQuotation) => {
  console.log('Received:', richblockpullquotation);
});

// Generic handler
bot.on('richblockpullquotation', async (data: RichBlockPullQuotation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockPullQuotation).
