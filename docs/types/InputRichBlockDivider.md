# InputRichBlockDivider

A divider, corresponding to the HTML tag &lt;hr/&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “divider” |


## Event Handlers

You can listen for InputRichBlockDivider events using:

```typescript
// Type-specific handler
bot.onInputRichBlockDivider(async (inputrichblockdivider: InputRichBlockDivider) => {
  console.log('Received:', inputrichblockdivider);
});

// Generic handler
bot.on('inputrichblockdivider', async (data: InputRichBlockDivider) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockDivider).
