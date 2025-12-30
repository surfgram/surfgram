# UniqueGiftInfo

Describes a service message about a unique gift that was sent or received.

## Fields

| Name                | Type         | Required | Description                                                                                                                                                                                         |
| :------------------ | :----------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gift                | `UniqueGift` |   Yes    | Information about the gift                                                                                                                                                                          |
| origin              | `string`     |   Yes    | Origin of the gift. Currently, either “upgrade” for gifts upgraded from regular gifts, “transfer” for gifts transferred from other users or channels, or “resale” for gifts bought from other users |
| lastResaleStarCount | `number`     |    No    | Optional. For gifts bought from other users, the price paid for the gift                                                                                                                            |
| ownedGiftId         | `string`     |    No    | Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts                                                                        |
| transferStarCount   | `number`     |    No    | Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift                                                                              |
| nextTransferDate    | `number`     |    No    | Optional. Point in time \(Unix timestamp\) when the gift can be transferred. If it is in the past, then the gift can be transferred now                                                             |

## Event Handlers

You can listen for UniqueGiftInfo events using:

```typescript
// Type-specific handler
bot.onUniqueGiftInfo(async (uniquegiftinfo: UniqueGiftInfo) => {
  console.log('Received:', uniquegiftinfo);
});

// Generic handler
bot.on('uniquegiftinfo', async (data: UniqueGiftInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGiftInfo).
