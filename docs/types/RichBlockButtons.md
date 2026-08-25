# RichBlockButtons

A block containing a list of buttons that are shown in one row, corresponding to the custom HTML tag &lt;tg-button-row&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “buttons” |
| buttons | `RichMessageButton[]` | Yes | The buttons |
| align | `string` | No | Optional. Horizontal alignment of the buttons. Currently, must be one of “left”, “center”, or “right”. |


## Event Handlers

You can listen for RichBlockButtons events using:

```typescript
// Type-specific handler
bot.onRichBlockButtons(async (richblockbuttons: RichBlockButtons) => {
  console.log('Received:', richblockbuttons);
});

// Generic handler
bot.on('richblockbuttons', async (data: RichBlockButtons) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockButtons).
