# InputRichBlockTable

A table, corresponding to the HTML tag &lt;table&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “table” |
| cells | `RichBlockTableCell[][]` | Yes | Cells of the table |
| isBordered | `boolean` | No | Optional. Pass True if the table has borders |
| isStriped | `boolean` | No | Optional. Pass True if the table is striped |
| caption | `RichText` | No | Optional. Caption of the table |


## Event Handlers

You can listen for InputRichBlockTable events using:

```typescript
// Type-specific handler
bot.onInputRichBlockTable(async (inputrichblocktable: InputRichBlockTable) => {
  console.log('Received:', inputrichblocktable);
});

// Generic handler
bot.on('inputrichblocktable', async (data: InputRichBlockTable) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockTable).
