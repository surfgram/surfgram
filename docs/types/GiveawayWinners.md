# GiveawayWinners

This object represents a message about the completion of a giveaway with public winners.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| chat | `Chat` | Yes | The chat that created the giveaway |
| giveawayMessageId | `number` | Yes | Identifier of the message with the giveaway in the chat |
| winnersSelectionDate | `number` | Yes | Point in time \(Unix timestamp\) when winners of the giveaway were selected |
| winnerCount | `number` | Yes | Total number of winners in the giveaway |
| winners | `User[]` | Yes | List of up to 100 winners of the giveaway |
| additionalChatCount | `number` | No | Optional. The number of other chats the user had to join in order to be eligible for the giveaway |
| prizeStarCount | `number` | No | Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only |
| premiumSubscriptionMonthCount | `number` | No | Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only |
| unclaimedPrizeCount | `number` | No | Optional. Number of undistributed prizes |
| onlyNewMembers | `boolean` | No | Optional. True, if only users who had joined the chats after the giveaway started were eligible to win |
| wasRefunded | `boolean` | No | Optional. True, if the giveaway was canceled because the payment for it was refunded |
| prizeDescription | `string` | No | Optional. Description of additional giveaway prize |


## Event Handlers

You can listen for GiveawayWinners events using:

```typescript
// Type-specific handler
bot.onGiveawayWinners(async (giveawaywinners: GiveawayWinners) => {
  console.log('Received:', giveawaywinners);
});

// Generic handler
bot.on('giveawaywinners', async (data: GiveawayWinners) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GiveawayWinners).
