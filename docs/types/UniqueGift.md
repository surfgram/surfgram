# UniqueGift

This object describes a unique gift that was upgraded from a regular gift.

## Fields

| Name          | Type                 | Required | Description                                                                                  |
| :------------ | :------------------- | :------: | :------------------------------------------------------------------------------------------- |
| baseName      | `string`             |   Yes    | Human-readable name of the regular gift from which this unique gift was upgraded             |
| name          | `string`             |   Yes    | Unique name of the gift. This name can be used in https://t.me/nft/... links and story areas |
| number        | `number`             |   Yes    | Unique number of the upgraded gift among gifts upgraded from the same regular gift           |
| model         | `UniqueGiftModel`    |   Yes    | Model of the gift                                                                            |
| symbol        | `UniqueGiftSymbol`   |   Yes    | Symbol of the gift                                                                           |
| backdrop      | `UniqueGiftBackdrop` |   Yes    | Backdrop of the gift                                                                         |
| publisherChat | `Chat`               |    No    | Optional. Information about the chat that published the gift                                 |

## Event Handlers

You can listen for UniqueGift events using:

```typescript
// Type-specific handler
bot.onUniqueGift(async (uniquegift: UniqueGift) => {
  console.log('Received:', uniquegift);
});

// Generic handler
bot.on('uniquegift', async (data: UniqueGift) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGift).
