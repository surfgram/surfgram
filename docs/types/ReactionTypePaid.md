# ReactionTypePaid

The reaction is paid.

## Fields

| Name | Type     | Required | Description                         |
| :--- | :------- | :------: | :---------------------------------- |
| type | `string` |   Yes    | Type of the reaction, always “paid” |

## Event Handlers

You can listen for ReactionTypePaid events using:

```typescript
// Type-specific handler
bot.onReactionTypePaid(async (reactiontypepaid: ReactionTypePaid) => {
  console.log('Received:', reactiontypepaid);
});

// Generic handler
bot.on('reactiontypepaid', async (data: ReactionTypePaid) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ReactionTypePaid).
