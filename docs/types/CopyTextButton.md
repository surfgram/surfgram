# CopyTextButton

This object represents an inline keyboard button that copies specified text to the clipboard.

## Fields

| Name | Type     | Required | Description                                              |
| :--- | :------- | :------: | :------------------------------------------------------- |
| text | `string` |   Yes    | The text to be copied to the clipboard; 1-256 characters |

## Event Handlers

You can listen for CopyTextButton events using:

```typescript
// Type-specific handler
bot.onCopyTextButton(async (copytextbutton: CopyTextButton) => {
  console.log('Received:', copytextbutton);
});

// Generic handler
bot.on('copytextbutton', async (data: CopyTextButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#CopyTextButton).
