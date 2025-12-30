# answerCallbackQuery

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### CallbackQuery (1 methods)

**Available methods:** `answerCallbackQuery`

**Auto-filled parameters:** callbackQueryId

[View CallbackQuery documentation with fluent methods](../types/CallbackQuery.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `callbackQueryId` | `string` | Yes | Unique identifier for the query to be answered |
| `text` | `string` | No | Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters |
| `showAlert` | `boolean` | No | If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. |
| `url` | `string` | No | URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback\_game button.Otherwise, you may use links like t.me/your\_bot?start=XXXX that open your bot with a parameter. |
| `cacheTime` | `number` | No | The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. |


## Usage Example

```typescript
// When you already have a CallbackQuery instance
bot.onCallbackQuery(async (callbackquery: CallbackQuery) => {
  await callbackquery.answerCallbackQuery({});
});

// With filtering
bot.onCallbackQuery((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerCallbackQuery).
