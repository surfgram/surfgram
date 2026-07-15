# InputRichBlockList

A list of blocks, corresponding to the HTML tag &lt;ul&gt; or &lt;ol&gt; with multiple nested tags &lt;li&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “list” |
| items | `InputRichBlockListItem[]` | Yes | Items of the list |


## Event Handlers

You can listen for InputRichBlockList events using:

```typescript
// Type-specific handler
bot.onInputRichBlockList(async (inputrichblocklist: InputRichBlockList) => {
  console.log('Received:', inputrichblocklist);
});

// Generic handler
bot.on('inputrichblocklist', async (data: InputRichBlockList) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockList).
