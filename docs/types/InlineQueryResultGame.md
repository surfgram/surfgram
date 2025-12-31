# InlineQueryResultGame

Represents a Game.

## Fields

| Name          | Type                   | Required | Description                                       |
| :------------ | :--------------------- | :------: | :------------------------------------------------ |
| type          | `string`               |   Yes    | Type of the result, must be game                  |
| id            | `string`               |   Yes    | Unique identifier for this result, 1-64 bytes     |
| gameShortName | `string`               |   Yes    | Short name of the game                            |
| replyMarkup   | `InlineKeyboardMarkup` |    No    | Optional. Inline keyboard attached to the message |

## Event Handlers

You can listen for InlineQueryResultGame events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultGame(async (inlinequeryresultgame: InlineQueryResultGame) => {
  console.log('Received:', inlinequeryresultgame);
});

// Generic handler
bot.on('inlinequeryresultgame', async (data: InlineQueryResultGame) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultGame).
