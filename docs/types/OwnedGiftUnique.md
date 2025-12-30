# OwnedGiftUnique

Describes a unique gift received and owned by a user or a chat.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the gift, always “unique” |
| gift | `UniqueGift` | Yes | Information about the unique gift |
| ownedGiftId | `string` | No | Optional. Unique identifier of the received gift for the bot; for gifts received on behalf of business accounts only |
| senderUser | `User` | No | Optional. Sender of the gift if it is a known user |
| sendDate | `number` | Yes | Date the gift was sent in Unix time |
| isSaved | `boolean` | No | Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only |
| canBeTransferred | `boolean` | No | Optional. True, if the gift can be transferred to another owner; for gifts received on behalf of business accounts only |
| transferStarCount | `number` | No | Optional. Number of Telegram Stars that must be paid to transfer the gift; omitted if the bot cannot transfer the gift |
| nextTransferDate | `number` | No | Optional. Point in time \(Unix timestamp\) when the gift can be transferred. If it is in the past, then the gift can be transferred now |


## Event Handlers

You can listen for OwnedGiftUnique events using:

```typescript
// Type-specific handler
bot.onOwnedGiftUnique(async (ownedgiftunique: OwnedGiftUnique) => {
  console.log('Received:', ownedgiftunique);
});

// Generic handler
bot.on('ownedgiftunique', async (data: OwnedGiftUnique) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#OwnedGiftUnique).
