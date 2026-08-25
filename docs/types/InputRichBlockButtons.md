# InputRichBlockButtons

A block containing a list of buttons that are shown in one row, corresponding to the custom HTML tag &lt;tg-button-row&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “buttons” |
| buttons | `RichMessageButton[]` | Yes | List of 1-8 buttons to send |
| align | `string` | No | Optional. Horizontal alignment of the buttons. Currently, must be one of “left”, “center”, or “right”. |


## Event Handlers

You can listen for InputRichBlockButtons events using:

```typescript
// Type-specific handler
bot.onInputRichBlockButtons(async (inputrichblockbuttons: InputRichBlockButtons) => {
  console.log('Received:', inputrichblockbuttons);
});

// Generic handler
bot.on('inputrichblockbuttons', async (data: InputRichBlockButtons) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockButtons).
