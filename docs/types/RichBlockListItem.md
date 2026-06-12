# RichBlockListItem

An item of a list.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| label | `string` | Yes | Label of the item |
| blocks | `RichBlock[]` | Yes | The content of the item |
| hasCheckbox | `boolean` | No | Optional. True, if the item has a checkbox |
| isChecked | `boolean` | No | Optional. True, if the item has a checked checkbox |
| value | `number` | No | Optional. For ordered lists, the numeric value of the item label |
| type | `string` | No | Optional. For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers |


## Event Handlers

You can listen for RichBlockListItem events using:

```typescript
// Type-specific handler
bot.onRichBlockListItem(async (richblocklistitem: RichBlockListItem) => {
  console.log('Received:', richblocklistitem);
});

// Generic handler
bot.on('richblocklistitem', async (data: RichBlockListItem) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockListItem).
