# transferGift

Transfers an owned unique gift to another user. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Requires can\_transfer\_stars business bot right if the transfer is paid. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Gift (8 methods)

**Available methods:** `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `setBusinessAccountGiftSettings`, `getBusinessAccountGifts`, `convertGiftToStars`, `upgradeGift`, `transferGift`

**Auto-filled parameters:** newOwnerChatId, ownedGiftId

[View Gift documentation with fluent methods](../types/Gift.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `ownedGiftId` | `string` | Yes | Unique identifier of the regular gift that should be transferred |
| `newOwnerChatId` | `number` | Yes | Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours. |
| `starCount` | `number` | No | The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can\_transfer\_stars business bot right is required. |


## Usage Example

```typescript
// When you already have a Gift instance
bot.onGift(async (gift: Gift) => {
  await gift.transferGift();
});

// With filtering
bot.onGift((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#transferGift).
