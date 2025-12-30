# PaidMediaInfo

Describes the paid media added to a message.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| starCount | `number` | Yes | The number of Telegram Stars that must be paid to buy access to the media |
| paidMedia | `PaidMedia[]` | Yes | Information about the paid media |


## Event Handlers

You can listen for PaidMediaInfo events using:

```typescript
// Type-specific handler
bot.onPaidMediaInfo(async (paidmediainfo: PaidMediaInfo) => {
  console.log('Received:', paidmediainfo);
});

// Generic handler
bot.on('paidmediainfo', async (data: PaidMediaInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PaidMediaInfo).
