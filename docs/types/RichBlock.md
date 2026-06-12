# RichBlock

This object represents a block in a rich formatted message. Currently, it can be any of the following types:

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “paragraph” |
| text | `RichText` | Yes | Text of the block |


## Event Handlers

You can listen for RichBlock events using:

```typescript
// Type-specific handler
bot.onRichBlock(async (richblock: RichBlock) => {
  console.log('Received:', richblock);
});

// Generic handler
bot.on('richblock', async (data: RichBlock) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlock).
