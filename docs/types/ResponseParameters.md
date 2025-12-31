# ResponseParameters

Describes why a request was unsuccessful.

## Fields

| Name            | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                           |
| :-------------- | :------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| migrateToChatId | `number` |    No    | Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. |
| retryAfter      | `number` |    No    | Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated                                                                                                                                                                                                                                                   |

## Event Handlers

You can listen for ResponseParameters events using:

```typescript
// Type-specific handler
bot.onResponseParameters(async (responseparameters: ResponseParameters) => {
  console.log('Received:', responseparameters);
});

// Generic handler
bot.on('responseparameters', async (data: ResponseParameters) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ResponseParameters).
