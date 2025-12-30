# UniqueGiftModel

This object describes the model of a unique gift.

## Fields

| Name           | Type      | Required | Description                                                                      |
| :------------- | :-------- | :------: | :------------------------------------------------------------------------------- |
| name           | `string`  |   Yes    | Name of the model                                                                |
| sticker        | `Sticker` |   Yes    | The sticker that represents the unique gift                                      |
| rarityPerMille | `number`  |   Yes    | The number of unique gifts that receive this model for every 1000 gifts upgraded |

## Event Handlers

You can listen for UniqueGiftModel events using:

```typescript
// Type-specific handler
bot.onUniqueGiftModel(async (uniquegiftmodel: UniqueGiftModel) => {
  console.log('Received:', uniquegiftmodel);
});

// Generic handler
bot.on('uniquegiftmodel', async (data: UniqueGiftModel) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGiftModel).
