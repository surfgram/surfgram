# KeyboardButtonRequestManagedBot

This object defines the parameters for the creation of a managed bot. Information about the created bot will be shared with the bot using the update managed\_bot and a Message with the field managed\_bot\_created.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| requestId | `number` | Yes | Signed 32-bit identifier of the request. Must be unique within the message. |
| suggestedName | `string` | No | Optional. Suggested name for the bot |
| suggestedUsername | `string` | No | Optional. Suggested username for the bot |


## Event Handlers

You can listen for KeyboardButtonRequestManagedBot events using:

```typescript
// Type-specific handler
bot.onKeyboardButtonRequestManagedBot(async (keyboardbuttonrequestmanagedbot: KeyboardButtonRequestManagedBot) => {
  console.log('Received:', keyboardbuttonrequestmanagedbot);
});

// Generic handler
bot.on('keyboardbuttonrequestmanagedbot', async (data: KeyboardButtonRequestManagedBot) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#KeyboardButtonRequestManagedBot).
