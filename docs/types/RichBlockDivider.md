# RichBlockDivider

A divider, corresponding to the HTML tag &lt;hr/&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “divider” |


## Event Handlers

You can listen for RichBlockDivider events using:

```typescript
// Type-specific handler
bot.onRichBlockDivider(async (richblockdivider: RichBlockDivider) => {
  console.log('Received:', richblockdivider);
});

// Generic handler
bot.on('richblockdivider', async (data: RichBlockDivider) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockDivider).
