# InputRichBlockListItem

An item of a list to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| blocks | `InputRichBlock[]` | Yes | The content of the item |
| hasCheckbox | `boolean` | No | Optional. Pass True if the item has a checkbox |
| isChecked | `boolean` | No | Optional. Pass True if the item has a checked checkbox |
| value | `number` | No | Optional. For ordered lists, the numeric value of the item label |
| type | `string` | No | Optional. For ordered lists, the type of the item label; must be one of “a” for lowercase letters, “A” for uppercase letters, “i” for lowercase Roman numerals, “I” for uppercase Roman numerals, or “1” for decimal numbers |


## Event Handlers

You can listen for InputRichBlockListItem events using:

```typescript
// Type-specific handler
bot.onInputRichBlockListItem(async (inputrichblocklistitem: InputRichBlockListItem) => {
  console.log('Received:', inputrichblocklistitem);
});

// Generic handler
bot.on('inputrichblocklistitem', async (data: InputRichBlockListItem) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockListItem).
