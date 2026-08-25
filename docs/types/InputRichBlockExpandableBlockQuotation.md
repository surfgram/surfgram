# InputRichBlockExpandableBlockQuotation

A block quotation, corresponding to the HTML tag &lt;blockquote&gt; with custom attribute &quot;collapsed&quot;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “expandable\_blockquote” |
| text | `RichText` | Yes | Content of the block |
| credit | `RichText` | No | Optional. Credit of the block |


## Event Handlers

You can listen for InputRichBlockExpandableBlockQuotation events using:

```typescript
// Type-specific handler
bot.onInputRichBlockExpandableBlockQuotation(async (inputrichblockexpandableblockquotation: InputRichBlockExpandableBlockQuotation) => {
  console.log('Received:', inputrichblockexpandableblockquotation);
});

// Generic handler
bot.on('inputrichblockexpandableblockquotation', async (data: InputRichBlockExpandableBlockQuotation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockExpandableBlockQuotation).
