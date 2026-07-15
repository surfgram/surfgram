# InputRichBlockPullQuotation

A quotation with centered text, loosely corresponding to the HTML tag &lt;aside&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “pullquote” |
| text | `RichText` | Yes | Text of the block |
| credit | `RichText` | No | Optional. Credit of the block |


## Event Handlers

You can listen for InputRichBlockPullQuotation events using:

```typescript
// Type-specific handler
bot.onInputRichBlockPullQuotation(async (inputrichblockpullquotation: InputRichBlockPullQuotation) => {
  console.log('Received:', inputrichblockpullquotation);
});

// Generic handler
bot.on('inputrichblockpullquotation', async (data: InputRichBlockPullQuotation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockPullQuotation).
