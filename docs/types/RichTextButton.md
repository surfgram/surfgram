# RichTextButton

A button.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “button” |
| button | `RichMessageButton` | Yes | The button |


## Event Handlers

You can listen for RichTextButton events using:

```typescript
// Type-specific handler
bot.onRichTextButton(async (richtextbutton: RichTextButton) => {
  console.log('Received:', richtextbutton);
});

// Generic handler
bot.on('richtextbutton', async (data: RichTextButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextButton).
