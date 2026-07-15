# InputRichBlock

This object represents a block in a rich formatted message to be sent. Currently, it can be any of the following types:

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “paragraph” |
| text | `RichText` | Yes | Text of the block |


## Event Handlers

You can listen for InputRichBlock events using:

```typescript
// Type-specific handler
bot.onInputRichBlock(async (inputrichblock: InputRichBlock) => {
  console.log('Received:', inputrichblock);
});

// Generic handler
bot.on('inputrichblock', async (data: InputRichBlock) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlock).
