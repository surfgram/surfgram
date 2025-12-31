# upgradeGift

Upgrades a given regular gift to a unique gift. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Additionally requires the can\_transfer\_stars business bot right if the upgrade is paid. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Gift (10 methods)

**Available methods:** `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `setBusinessAccountGiftSettings`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `convertGiftToStars`, `upgradeGift`, `transferGift`

**Auto-filled parameters:** ownedGiftId

[View Gift documentation with fluent methods](../types/Gift.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `ownedGiftId` | `string` | Yes | Unique identifier of the regular gift that should be upgraded to a unique one |
| `keepOriginalDetails` | `boolean` | No | Pass True to keep the original gift text, sender and receiver in the upgraded gift |
| `starCount` | `number` | No | The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid\_upgrade\_star\_count &gt; 0, then pass 0, otherwise, the can\_transfer\_stars business bot right is required and gift.upgrade\_star\_count must be passed. |


## Usage Example

```typescript
// When you already have a Gift instance
bot.onGift(async (gift: Gift) => {
  await gift.upgradeGift();
});

// With filtering
bot.onGift((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#upgradeGift).
