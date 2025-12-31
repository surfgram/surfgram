# OwnedGift

This object describes a gift received and owned by a user or a chat. Currently, it can be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the gift, always “regular” |
| gift | `Gift` | Yes | Information about the regular gift |
| ownedGiftId | `string` | No | Optional. Unique identifier of the gift for the bot; for gifts received on behalf of business accounts only |
| senderUser | `User` | No | Optional. Sender of the gift if it is a known user |
| sendDate | `number` | Yes | Date the gift was sent in Unix time |
| text | `string` | No | Optional. Text of the message that was added to the gift |
| entities | `MessageEntity[]` | No | Optional. Special entities that appear in the text |
| isPrivate | `boolean` | No | Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them |
| isSaved | `boolean` | No | Optional. True, if the gift is displayed on the account's profile page; for gifts received on behalf of business accounts only |
| canBeUpgraded | `boolean` | No | Optional. True, if the gift can be upgraded to a unique gift; for gifts received on behalf of business accounts only |
| wasRefunded | `boolean` | No | Optional. True, if the gift was refunded and isn't available anymore |
| convertStarCount | `number` | No | Optional. Number of Telegram Stars that can be claimed by the receiver instead of the gift; omitted if the gift cannot be converted to Telegram Stars; for gifts received on behalf of business accounts only |
| prepaidUpgradeStarCount | `number` | No | Optional. Number of Telegram Stars that were paid for the ability to upgrade the gift |
| isUpgradeSeparate | `boolean` | No | Optional. True, if the gift's upgrade was purchased after the gift was sent; for gifts received on behalf of business accounts only |
| uniqueGiftNumber | `number` | No | Optional. Unique number reserved for this gift when upgraded. See the number field in UniqueGift |


## Event Handlers

You can listen for OwnedGift events using:

```typescript
// Type-specific handler
bot.onOwnedGift(async (ownedgift: OwnedGift) => {
  console.log('Received:', ownedgift);
});

// Generic handler
bot.on('ownedgift', async (data: OwnedGift) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#OwnedGift).
