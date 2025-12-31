# UserRating

This object describes the rating of a user based on their Telegram Star spendings.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| level | `number` | Yes | Current level of the user, indicating their reliability when purchasing digital goods and services. A higher level suggests a more trustworthy customer; a negative level is likely reason for concern. |
| rating | `number` | Yes | Numerical value of the user's rating; the higher the rating, the better |
| currentLevelRating | `number` | Yes | The rating value required to get the current level |
| nextLevelRating | `number` | No | Optional. The rating value required to get to the next level; omitted if the maximum level was reached |


## Event Handlers

You can listen for UserRating events using:

```typescript
// Type-specific handler
bot.onUserRating(async (userrating: UserRating) => {
  console.log('Received:', userrating);
});

// Generic handler
bot.on('userrating', async (data: UserRating) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UserRating).
