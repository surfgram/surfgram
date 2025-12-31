# Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| title | `string` | Yes | Title of the game |
| description | `string` | Yes | Description of the game |
| photo | `PhotoSize[]` | Yes | Photo that will be displayed in the game message in chats. |
| text | `string` | No | Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters. |
| textEntities | `MessageEntity[]` | No | Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc. |
| animation | `Animation` | No | Optional. Animation that will be displayed in the game message in chats. Upload via BotFather |

## Fluent Methods

The `Game` class has the following fluent methods that automatically inject contextual parameters:

### sendGame

Use this method to send a game. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` | Yes | Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats. |
| `gameShortName` | `string` | Yes | Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. If empty, one 'Play game\_title' button will be shown. If not empty, the first button must launch the game. |

**Usage examples:**

1. Basic usage:

```typescript
const game = new Game(rawData, bot);
await game.sendGame({
  chatId: 123,
  gameShortName: "example text",
});
```

2. In an event handler:

```typescript
bot.onGame(async (game: Game) => {
  // Auto-fills parameters from the game instance
  await game.sendGame({ gameShortName: "Response" });
});
```

**See also:** [sendGame API method](../methods/sendGame.md)

### setGameScore

Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user&#39;s current score in the chat and force is False.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier |
| `score` | `number` | Yes | New score, must be non-negative |
| `force` | `boolean` | No | Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
| `disableEditMessage` | `boolean` | No | Pass True if the game message should not be automatically edited to include the current scoreboard |
| `chatId` | `number` | No | Required if inline\_message\_id is not specified. Unique identifier for the target chat |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the sent message |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const game = new Game(rawData, bot);
await game.setGameScore({
  userId: 123,
  score: 123,
});
```

2. In an event handler:

```typescript
bot.onGame(async (game: Game) => {
  // Auto-fills parameters from the game instance
  await game.setGameScore({ inlineMessageId: "Response" });
});
```

**See also:** [setGameScore API method](../methods/setGameScore.md)

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Target user id |
| `chatId` | `number` | No | Required if inline\_message\_id is not specified. Unique identifier for the target chat |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the sent message |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const game = new Game(rawData, bot);
await game.getGameHighScores(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onGame(async (game: Game) => {
  // Auto-fills parameters from the game instance
  await game.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)


## Event Handlers

You can listen for Game events using:

```typescript
// Type-specific handler
bot.onGame(async (game: Game) => {
  console.log('Received:', game);
  // Use fluent methods
  await game.sendGame(...);
});

// Generic handler
bot.on('game', async (data: Game) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Game).
