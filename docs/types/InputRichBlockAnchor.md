# InputRichBlockAnchor

A block with an anchor, corresponding to the HTML tag &lt;a&gt; with the attribute name.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “anchor” |
| name | `string` | Yes | The name of the anchor |


## Event Handlers

You can listen for InputRichBlockAnchor events using:

```typescript
// Type-specific handler
bot.onInputRichBlockAnchor(async (inputrichblockanchor: InputRichBlockAnchor) => {
  console.log('Received:', inputrichblockanchor);
});

// Generic handler
bot.on('inputrichblockanchor', async (data: InputRichBlockAnchor) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockAnchor).
