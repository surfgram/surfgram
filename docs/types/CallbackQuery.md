# CallbackQuery

This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot \(in inline mode\), the field inline\_message\_id will be present. Exactly one of the fields data or game\_short\_name will be present.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Unique identifier for this query |
| from | `User` | Yes | Sender |
| message | `MaybeInaccessibleMessage` | No | Optional. Message sent by the bot with the callback button that originated the query |
| inlineMessageId | `string` | No | Optional. Identifier of the message sent via the bot in inline mode, that originated the query. |
| chatInstance | `string` | Yes | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. |
| data | `string` | No | Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. |
| gameShortName | `string` | No | Optional. Short name of a Game to be returned, serves as the unique identifier for the game |

## Fluent Methods

The `CallbackQuery` class has the following fluent methods that automatically inject contextual parameters:

### answerCallbackQuery

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `callbackQueryId` | `this.id` | Unique identifier for the query to be answered |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | No | Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters |
| `showAlert` | `boolean` | No | If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. |
| `url` | `string` | No | URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback\_game button.Otherwise, you may use links like t.me/your\_bot?start=XXXX that open your bot with a parameter. |
| `cacheTime` | `number` | No | The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. |

**Usage examples:**

1. Basic usage:

```typescript
const callbackquery = new CallbackQuery(rawData, bot);
await callbackquery.answerCallbackQuery({
  text: "example text",
  showAlert: true,
});
```

2. In an event handler:

```typescript
bot.onCallbackQuery(async (callbackquery: CallbackQuery) => {
  // Auto-fills parameters from the callbackquery instance
  await callbackquery.answerCallbackQuery({ text: "Response" });
});
```

**See also:** [answerCallbackQuery API method](../methods/answerCallbackQuery.md)


## Event Handlers

You can listen for CallbackQuery events using:

```typescript
// Type-specific handler
bot.onCallbackQuery(async (callbackquery: CallbackQuery) => {
  console.log('Received:', callbackquery);
  // Use fluent methods
  await callbackquery.answerCallbackQuery(...);
});

// Generic handler
bot.on('callbackquery', async (data: CallbackQuery) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#CallbackQuery).
