# RichBlockTable

A table, corresponding to the HTML tag &lt;table&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “table” |
| cells | `RichBlockTableCell[][]` | Yes | Cells of the table |
| isBordered | `boolean` | No | Optional. True, if the table has borders |
| isStriped | `boolean` | No | Optional. True, if the table is striped |
| caption | `RichText` | No | Optional. Caption of the table |


## Event Handlers

You can listen for RichBlockTable events using:

```typescript
// Type-specific handler
bot.onRichBlockTable(async (richblocktable: RichBlockTable) => {
  console.log('Received:', richblocktable);
});

// Generic handler
bot.on('richblocktable', async (data: RichBlockTable) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockTable).
