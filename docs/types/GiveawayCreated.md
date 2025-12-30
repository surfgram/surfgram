# GiveawayCreated

This object represents a service message about the creation of a scheduled giveaway.

## Fields

| Name           | Type     | Required | Description                                                                                                   |
| :------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------ |
| prizeStarCount | `number` |    No    | Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only |

## Event Handlers

You can listen for GiveawayCreated events using:

```typescript
// Type-specific handler
bot.onGiveawayCreated(async (giveawaycreated: GiveawayCreated) => {
  console.log('Received:', giveawaycreated);
});

// Generic handler
bot.on('giveawaycreated', async (data: GiveawayCreated) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GiveawayCreated).
