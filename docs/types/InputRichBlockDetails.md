# InputRichBlockDetails

An expandable block for details disclosure, corresponding to the HTML tag &lt;details&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “details” |
| summary | `RichText` | Yes | Always shown summary of the block |
| blocks | `InputRichBlock[]` | Yes | Content of the block |
| isOpen | `boolean` | No | Optional. Pass True if the content of the block is visible by default |


## Event Handlers

You can listen for InputRichBlockDetails events using:

```typescript
// Type-specific handler
bot.onInputRichBlockDetails(async (inputrichblockdetails: InputRichBlockDetails) => {
  console.log('Received:', inputrichblockdetails);
});

// Generic handler
bot.on('inputrichblockdetails', async (data: InputRichBlockDetails) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockDetails).
