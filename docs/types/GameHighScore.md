# GameHighScore

This object represents one row of the high scores table for a game.

## Fields

| Name     | Type     | Required | Description                               |
| :------- | :------- | :------: | :---------------------------------------- |
| position | `number` |   Yes    | Position in high score table for the game |
| user     | `User`   |   Yes    | User                                      |
| score    | `number` |   Yes    | Score                                     |

## Fluent Methods

The `GameHighScore` class has the following fluent methods that automatically inject contextual parameters:

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

**Auto-filled parameters:**

| Parameter | Source          | Description    |
| :-------- | :-------------- | :------------- |
| `userId`  | `this.user?.id` | Target user id |

**Required parameters:**

| Parameter         | Type     | Required | Description                                                                            |
| :---------------- | :------- | :------: | :------------------------------------------------------------------------------------- |
| `chatId`          | `number` |    No    | Required if inline_message_id is not specified. Unique identifier for the target chat  |
| `messageId`       | `number` |    No    | Required if inline_message_id is not specified. Identifier of the sent message         |
| `inlineMessageId` | `string` |    No    | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const gamehighscore = new GameHighScore(rawData, bot);
await gamehighscore.getGameHighScores(123, 123);
```

2. In an event handler:

```typescript
bot.onGameHighScore(async (gamehighscore: GameHighScore) => {
  // Auto-fills parameters from the gamehighscore instance
  await gamehighscore.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)

## Event Handlers

You can listen for GameHighScore events using:

```typescript
// Type-specific handler
bot.onGameHighScore(async (gamehighscore: GameHighScore) => {
  console.log('Received:', gamehighscore);
  // Use fluent methods
  await gamehighscore.getGameHighScores(...);
});

// Generic handler
bot.on('gamehighscore', async (data: GameHighScore) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GameHighScore).
