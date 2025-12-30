# convertGiftToStars

Converts a given regular gift to Telegram Stars. Requires the can_convert_gifts_to_stars business bot right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Gift (8 methods)

**Available methods:** `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `setBusinessAccountGiftSettings`, `getBusinessAccountGifts`, `convertGiftToStars`, `upgradeGift`, `transferGift`

**Auto-filled parameters:** ownedGiftId

[View Gift documentation with fluent methods](../types/Gift.md)

## Parameters

| Parameter              | Type     | Required | Description                                                                      |
| :--------------------- | :------- | :------: | :------------------------------------------------------------------------------- |
| `businessConnectionId` | `string` |   Yes    | Unique identifier of the business connection                                     |
| `ownedGiftId`          | `string` |   Yes    | Unique identifier of the regular gift that should be converted to Telegram Stars |

## Usage Example

```typescript
// When you already have a Gift instance
bot.onGift(async (gift: Gift) => {
  await gift.convertGiftToStars();
});

// With filtering
bot.onGift(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#convertGiftToStars).
