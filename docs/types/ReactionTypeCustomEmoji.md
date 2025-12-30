# ReactionTypeCustomEmoji

The reaction is based on a custom emoji.

## Fields

| Name          | Type     | Required | Description                                 |
| :------------ | :------- | :------: | :------------------------------------------ |
| type          | `string` |   Yes    | Type of the reaction, always “custom_emoji” |
| customEmojiId | `string` |   Yes    | Custom emoji identifier                     |

## Event Handlers

You can listen for ReactionTypeCustomEmoji events using:

```typescript
// Type-specific handler
bot.onReactionTypeCustomEmoji(async (reactiontypecustomemoji: ReactionTypeCustomEmoji) => {
  console.log('Received:', reactiontypecustomemoji);
});

// Generic handler
bot.on('reactiontypecustomemoji', async (data: ReactionTypeCustomEmoji) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ReactionTypeCustomEmoji).
