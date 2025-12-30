# CallbackGame

A placeholder, currently holds no information. Use BotFather to set up your game.

## Fields

| Name               | Type      | Required | Description                                                                                                     |
| :----------------- | :-------- | :------: | :-------------------------------------------------------------------------------------------------------------- |
| userId             | `number`  |   Yes    | User identifier                                                                                                 |
| score              | `number`  |   Yes    | New score, must be non-negative                                                                                 |
| force              | `boolean` |    No    | Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
| disableEditMessage | `boolean` |    No    | Pass True if the game message should not be automatically edited to include the current scoreboard              |
| chatId             | `number`  |    No    | Required if inline_message_id is not specified. Unique identifier for the target chat                           |
| messageId          | `number`  |    No    | Required if inline_message_id is not specified. Identifier of the sent message                                  |
| inlineMessageId    | `string`  |    No    | Required if chat_id and message_id are not specified. Identifier of the inline message                          |

## Event Handlers

You can listen for CallbackGame events using:

```typescript
// Type-specific handler
bot.onCallbackGame(async (callbackgame: CallbackGame) => {
  console.log('Received:', callbackgame);
});

// Generic handler
bot.on('callbackgame', async (data: CallbackGame) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#CallbackGame).
