# UniqueGiftSymbol

This object describes the symbol shown on the pattern of a unique gift.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| name | `string` | Yes | Name of the symbol |
| sticker | `Sticker` | Yes | The sticker that represents the unique gift |
| rarityPerMille | `number` | Yes | The number of unique gifts that receive this model for every 1000 gifts upgraded |


## Event Handlers

You can listen for UniqueGiftSymbol events using:

```typescript
// Type-specific handler
bot.onUniqueGiftSymbol(async (uniquegiftsymbol: UniqueGiftSymbol) => {
  console.log('Received:', uniquegiftsymbol);
});

// Generic handler
bot.on('uniquegiftsymbol', async (data: UniqueGiftSymbol) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGiftSymbol).
