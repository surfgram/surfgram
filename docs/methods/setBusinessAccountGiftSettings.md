# setBusinessAccountGiftSettings

Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can\_change\_gift\_settings business bot right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Gift (10 methods)

**Available methods:** `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `setBusinessAccountGiftSettings`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `convertGiftToStars`, `upgradeGift`, `transferGift`


[View Gift documentation with fluent methods](../types/Gift.md)

### Gifts (5 methods)

**Available methods:** `getAvailableGifts`, `setBusinessAccountGiftSettings`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`


[View Gifts documentation with fluent methods](../types/Gifts.md)

### AcceptedGiftTypes (1 methods)

**Available methods:** `setBusinessAccountGiftSettings`


[View AcceptedGiftTypes documentation with fluent methods](../types/AcceptedGiftTypes.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `showGiftButton` | `boolean` | Yes | Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field |
| `acceptedGiftTypes` | `AcceptedGiftTypes` | Yes | Types of gifts accepted by the business account |


## Usage Example

```typescript
// When you already have a Gift instance
bot.onGift(async (gift: Gift) => {
  await gift.setBusinessAccountGiftSettings();
});

// With filtering
bot.onGift((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setBusinessAccountGiftSettings).
