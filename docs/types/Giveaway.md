# Giveaway

This object represents a message about a scheduled giveaway.

## Fields

| Name                          | Type       | Required | Description                                                                                                                                                                                                                                                                                         |
| :---------------------------- | :--------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chats                         | `Chat[]`   |   Yes    | The list of chats which the user must join to participate in the giveaway                                                                                                                                                                                                                           |
| winnersSelectionDate          | `number`   |   Yes    | Point in time \(Unix timestamp\) when winners of the giveaway will be selected                                                                                                                                                                                                                      |
| winnerCount                   | `number`   |   Yes    | The number of users which are supposed to be selected as winners of the giveaway                                                                                                                                                                                                                    |
| onlyNewMembers                | `boolean`  |    No    | Optional. True, if only users who join the chats after the giveaway started should be eligible to win                                                                                                                                                                                               |
| hasPublicWinners              | `boolean`  |    No    | Optional. True, if the list of giveaway winners will be visible to everyone                                                                                                                                                                                                                         |
| prizeDescription              | `string`   |    No    | Optional. Description of additional giveaway prize                                                                                                                                                                                                                                                  |
| countryCodes                  | `string[]` |    No    | Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which eligible users for the giveaway must come. If empty, then all users can participate in the giveaway. Users with a phone number that was bought on Fragment can always participate in giveaways. |
| prizeStarCount                | `number`   |    No    | Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only                                                                                                                                                                                       |
| premiumSubscriptionMonthCount | `number`   |    No    | Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only                                                                                                                                                      |

## Event Handlers

You can listen for Giveaway events using:

```typescript
// Type-specific handler
bot.onGiveaway(async (giveaway: Giveaway) => {
  console.log('Received:', giveaway);
});

// Generic handler
bot.on('giveaway', async (data: Giveaway) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Giveaway).
