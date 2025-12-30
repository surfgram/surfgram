# UniqueGiftBackdrop

This object describes the backdrop of a unique gift.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| name | `string` | Yes | Name of the backdrop |
| colors | `UniqueGiftBackdropColors` | Yes | Colors of the backdrop |
| rarityPerMille | `number` | Yes | The number of unique gifts that receive this backdrop for every 1000 gifts upgraded |


## Event Handlers

You can listen for UniqueGiftBackdrop events using:

```typescript
// Type-specific handler
bot.onUniqueGiftBackdrop(async (uniquegiftbackdrop: UniqueGiftBackdrop) => {
  console.log('Received:', uniquegiftbackdrop);
});

// Generic handler
bot.on('uniquegiftbackdrop', async (data: UniqueGiftBackdrop) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGiftBackdrop).
