# RichBlockAnchor

A block with an anchor, corresponding to the HTML tag &lt;a&gt; with the attribute name.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “anchor” |
| name | `string` | Yes | The name of the anchor |


## Event Handlers

You can listen for RichBlockAnchor events using:

```typescript
// Type-specific handler
bot.onRichBlockAnchor(async (richblockanchor: RichBlockAnchor) => {
  console.log('Received:', richblockanchor);
});

// Generic handler
bot.on('richblockanchor', async (data: RichBlockAnchor) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockAnchor).
