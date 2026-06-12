# RichBlockTableCell

Cell in a table.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| text | `RichText` | No | Optional. Text in the cell. If omitted, then the cell is invisible. |
| isHeader | `boolean` | No | Optional. True, if the cell is a header cell |
| colspan | `number` | No | Optional. The number of columns the cell spans if it is bigger than 1 |
| rowspan | `number` | No | Optional. The number of rows the cell spans if it is bigger than 1 |
| align | `string` | Yes | Horizontal cell content alignment. Currently, must be one of “left”, “center”, or “right”. |
| valign | `string` | Yes | Vertical cell content alignment. Currently, must be one of “top”, “middle”, or “bottom”. |


## Event Handlers

You can listen for RichBlockTableCell events using:

```typescript
// Type-specific handler
bot.onRichBlockTableCell(async (richblocktablecell: RichBlockTableCell) => {
  console.log('Received:', richblocktablecell);
});

// Generic handler
bot.on('richblocktablecell', async (data: RichBlockTableCell) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockTableCell).
