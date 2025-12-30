# PaidMediaPreview

The paid media isn&#39;t available before the payment.

## Fields

| Name     | Type     | Required | Description                                                         |
| :------- | :------- | :------: | :------------------------------------------------------------------ |
| type     | `string` |   Yes    | Type of the paid media, always “preview”                            |
| width    | `number` |    No    | Optional. Media width as defined by the sender                      |
| height   | `number` |    No    | Optional. Media height as defined by the sender                     |
| duration | `number` |    No    | Optional. Duration of the media in seconds as defined by the sender |

## Event Handlers

You can listen for PaidMediaPreview events using:

```typescript
// Type-specific handler
bot.onPaidMediaPreview(async (paidmediapreview: PaidMediaPreview) => {
  console.log('Received:', paidmediapreview);
});

// Generic handler
bot.on('paidmediapreview', async (data: PaidMediaPreview) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PaidMediaPreview).
