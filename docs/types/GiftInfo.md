# GiftInfo

Describes a service message about a regular gift that was sent or received.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| gift | `Gift` | Yes | Information about the gift |
| ownedGiftId | `string` | No | Optional. Unique identifier of the received gift for the bot; only present for gifts received on behalf of business accounts |
| convertStarCount | `number` | No | Optional. Number of Telegram Stars that can be claimed by the receiver by converting the gift; omitted if conversion to Telegram Stars is impossible |
| prepaidUpgradeStarCount | `number` | No | Optional. Number of Telegram Stars that were prepaid for the ability to upgrade the gift |
| isUpgradeSeparate | `boolean` | No | Optional. True, if the gift's upgrade was purchased after the gift was sent |
| canBeUpgraded | `boolean` | No | Optional. True, if the gift can be upgraded to a unique gift |
| text | `string` | No | Optional. Text of the message that was added to the gift |
| entities | `MessageEntity[]` | No | Optional. Special entities that appear in the text |
| isPrivate | `boolean` | No | Optional. True, if the sender and gift text are shown only to the gift receiver; otherwise, everyone will be able to see them |
| uniqueGiftNumber | `number` | No | Optional. Unique number reserved for this gift when upgraded. See the number field in UniqueGift |


## Event Handlers

You can listen for GiftInfo events using:

```typescript
// Type-specific handler
bot.onGiftInfo(async (giftinfo: GiftInfo) => {
  console.log('Received:', giftinfo);
});

// Generic handler
bot.on('giftinfo', async (data: GiftInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GiftInfo).
