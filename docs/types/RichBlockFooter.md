# RichBlockFooter

A footer, corresponding to the HTML tag &lt;footer&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “footer” |
| text | `RichText` | Yes | Text of the block |


## Event Handlers

You can listen for RichBlockFooter events using:

```typescript
// Type-specific handler
bot.onRichBlockFooter(async (richblockfooter: RichBlockFooter) => {
  console.log('Received:', richblockfooter);
});

// Generic handler
bot.on('richblockfooter', async (data: RichBlockFooter) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockFooter).
