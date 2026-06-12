# RichBlockDetails

An expandable block for details disclosure, corresponding to the HTML tag &lt;details&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “details” |
| summary | `RichText` | Yes | Always shown summary of the block |
| blocks | `RichBlock[]` | Yes | Content of the block |
| isOpen | `boolean` | No | Optional. True, if the content of the block is visible by default |


## Event Handlers

You can listen for RichBlockDetails events using:

```typescript
// Type-specific handler
bot.onRichBlockDetails(async (richblockdetails: RichBlockDetails) => {
  console.log('Received:', richblockdetails);
});

// Generic handler
bot.on('richblockdetails', async (data: RichBlockDetails) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockDetails).
