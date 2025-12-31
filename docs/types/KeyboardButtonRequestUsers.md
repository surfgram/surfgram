# KeyboardButtonRequestUsers

This object defines the criteria used to request suitable users. Information about the selected users will be shared with the bot when the corresponding button is pressed. More about requesting users »

## Fields

| Name            | Type      | Required | Description                                                                                                                                      |
| :-------------- | :-------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| requestId       | `number`  |   Yes    | Signed 32-bit identifier of the request that will be received back in the UsersShared object. Must be unique within the message                  |
| userIsBot       | `boolean` |    No    | Optional. Pass True to request bots, pass False to request regular users. If not specified, no additional restrictions are applied.              |
| userIsPremium   | `boolean` |    No    | Optional. Pass True to request premium users, pass False to request non-premium users. If not specified, no additional restrictions are applied. |
| maxQuantity     | `number`  |    No    | Optional. The maximum number of users to be selected; 1-10. Defaults to 1.                                                                       |
| requestName     | `boolean` |    No    | Optional. Pass True to request the users' first and last names                                                                                   |
| requestUsername | `boolean` |    No    | Optional. Pass True to request the users' usernames                                                                                              |
| requestPhoto    | `boolean` |    No    | Optional. Pass True to request the users' photos                                                                                                 |

## Event Handlers

You can listen for KeyboardButtonRequestUsers events using:

```typescript
// Type-specific handler
bot.onKeyboardButtonRequestUsers(async (keyboardbuttonrequestusers: KeyboardButtonRequestUsers) => {
  console.log('Received:', keyboardbuttonrequestusers);
});

// Generic handler
bot.on('keyboardbuttonrequestusers', async (data: KeyboardButtonRequestUsers) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#KeyboardButtonRequestUsers).
