# OwnedGifts

Contains the list of gifts received and owned by a user or a chat.

## Fields

| Name       | Type          | Required | Description                                                                     |
| :--------- | :------------ | :------: | :------------------------------------------------------------------------------ |
| totalCount | `number`      |   Yes    | The total number of gifts owned by the user or the chat                         |
| gifts      | `OwnedGift[]` |   Yes    | The list of gifts                                                               |
| nextOffset | `string`      |    No    | Optional. Offset for the next request. If empty, then there are no more results |

## Event Handlers

You can listen for OwnedGifts events using:

```typescript
// Type-specific handler
bot.onOwnedGifts(async (ownedgifts: OwnedGifts) => {
  console.log('Received:', ownedgifts);
});

// Generic handler
bot.on('ownedgifts', async (data: OwnedGifts) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#OwnedGifts).
