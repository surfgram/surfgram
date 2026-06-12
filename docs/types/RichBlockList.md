# RichBlockList

A list of blocks, corresponding to the HTML tag &lt;ul&gt; or &lt;ol&gt; with multiple nested tags &lt;li&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “list” |
| items | `RichBlockListItem[]` | Yes | Items of the list |


## Event Handlers

You can listen for RichBlockList events using:

```typescript
// Type-specific handler
bot.onRichBlockList(async (richblocklist: RichBlockList) => {
  console.log('Received:', richblocklist);
});

// Generic handler
bot.on('richblocklist', async (data: RichBlockList) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockList).
