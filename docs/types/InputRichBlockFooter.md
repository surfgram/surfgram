# InputRichBlockFooter

A footer, corresponding to the HTML tag &lt;footer&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “footer” |
| text | `RichText` | Yes | Text of the block |


## Event Handlers

You can listen for InputRichBlockFooter events using:

```typescript
// Type-specific handler
bot.onInputRichBlockFooter(async (inputrichblockfooter: InputRichBlockFooter) => {
  console.log('Received:', inputrichblockfooter);
});

// Generic handler
bot.on('inputrichblockfooter', async (data: InputRichBlockFooter) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockFooter).
