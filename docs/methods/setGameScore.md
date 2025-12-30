# setGameScore

Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.

## Fluent Usage

This method is available as a fluent method on the following types:

### Game (3 methods)

**Available methods:** `sendGame`, `setGameScore`, `getGameHighScores`


[View Game documentation with fluent methods](../types/Game.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier |
| `score` | `number` | Yes | New score, must be non-negative |
| `force` | `boolean` | No | Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
| `disableEditMessage` | `boolean` | No | Pass True if the game message should not be automatically edited to include the current scoreboard |
| `chatId` | `number` | No | Required if inline\_message\_id is not specified. Unique identifier for the target chat |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the sent message |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |


## Usage Example

```typescript
// When you already have a Game instance
bot.onGame(async (game: Game) => {
  await game.setGameScore({});
});

// With filtering
bot.onGame((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setGameScore).
