# DisabledButton

This object represents a disabled button which does nothing. Currently holds no information.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Unique identifier for this query |
| from | `User` | Yes | Sender |
| message | `MaybeInaccessibleMessage` | No | Optional. Message sent by the bot with the callback button that originated the query |
| inlineMessageId | `string` | No | Optional. Identifier of the message sent via the bot in inline mode, that originated the query |
| chatInstance | `string` | Yes | Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games. |
| data | `string` | No | Optional. Data associated with the callback button. Be aware that the message originated the query can contain no callback buttons with this data. |
| gameShortName | `string` | No | Optional. Short name of a Game to be returned, serves as the unique identifier for the game |


## Event Handlers

You can listen for DisabledButton events using:

```typescript
// Type-specific handler
bot.onDisabledButton(async (disabledbutton: DisabledButton) => {
  console.log('Received:', disabledbutton);
});

// Generic handler
bot.on('disabledbutton', async (data: DisabledButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#DisabledButton).
