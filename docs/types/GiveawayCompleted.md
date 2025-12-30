# GiveawayCompleted

This object represents a service message about the completion of a giveaway without public winners.

## Fields

| Name                | Type      | Required | Description                                                                                                                     |
| :------------------ | :-------- | :------: | :------------------------------------------------------------------------------------------------------------------------------ |
| winnerCount         | `number`  |   Yes    | Number of winners in the giveaway                                                                                               |
| unclaimedPrizeCount | `number`  |    No    | Optional. Number of undistributed prizes                                                                                        |
| giveawayMessage     | `Message` |    No    | Optional. Message with the giveaway that was completed, if it wasn't deleted                                                    |
| isStarGiveaway      | `boolean` |    No    | Optional. True, if the giveaway is a Telegram Star giveaway. Otherwise, currently, the giveaway is a Telegram Premium giveaway. |

## Event Handlers

You can listen for GiveawayCompleted events using:

```typescript
// Type-specific handler
bot.onGiveawayCompleted(async (giveawaycompleted: GiveawayCompleted) => {
  console.log('Received:', giveawaycompleted);
});

// Generic handler
bot.on('giveawaycompleted', async (data: GiveawayCompleted) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GiveawayCompleted).
