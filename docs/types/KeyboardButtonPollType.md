# KeyboardButtonPollType

This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.

## Fields

| Name | Type     | Required | Description                                                                                                                                                                                                              |
| :--- | :------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | `string` |    No    | Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type. |

## Event Handlers

You can listen for KeyboardButtonPollType events using:

```typescript
// Type-specific handler
bot.onKeyboardButtonPollType(async (keyboardbuttonpolltype: KeyboardButtonPollType) => {
  console.log('Received:', keyboardbuttonpolltype);
});

// Generic handler
bot.on('keyboardbuttonpolltype', async (data: KeyboardButtonPollType) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#KeyboardButtonPollType).
