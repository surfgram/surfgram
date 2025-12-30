# ReactionCount

Represents a reaction added to a message along with the number of times it was added.

## Fields

| Name       | Type           | Required | Description                            |
| :--------- | :------------- | :------: | :------------------------------------- |
| type       | `ReactionType` |   Yes    | Type of the reaction                   |
| totalCount | `number`       |   Yes    | Number of times the reaction was added |

## Event Handlers

You can listen for ReactionCount events using:

```typescript
// Type-specific handler
bot.onReactionCount(async (reactioncount: ReactionCount) => {
  console.log('Received:', reactioncount);
});

// Generic handler
bot.on('reactioncount', async (data: ReactionCount) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ReactionCount).
