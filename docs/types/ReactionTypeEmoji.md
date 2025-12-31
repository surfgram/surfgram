# ReactionTypeEmoji

The reaction is based on an emoji.

## Fields

| Name  | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                    |
| :---- | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type  | `string` |   Yes    | Type of the reaction, always “emoji”                                                                                                                                                                                                                                                                                                           |
| emoji | `string` |   Yes    | Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" |

## Event Handlers

You can listen for ReactionTypeEmoji events using:

```typescript
// Type-specific handler
bot.onReactionTypeEmoji(async (reactiontypeemoji: ReactionTypeEmoji) => {
  console.log('Received:', reactiontypeemoji);
});

// Generic handler
bot.on('reactiontypeemoji', async (data: ReactionTypeEmoji) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ReactionTypeEmoji).
