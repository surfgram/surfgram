# PaidMediaPurchased

This object contains information about a paid media purchase.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| from | `User` | Yes | User who purchased the media |
| paidMediaPayload | `string` | Yes | Bot-specified paid media payload |


## Event Handlers

You can listen for PaidMediaPurchased events using:

```typescript
// Type-specific handler
bot.onPaidMediaPurchased(async (paidmediapurchased: PaidMediaPurchased) => {
  console.log('Received:', paidmediapurchased);
});

// Generic handler
bot.on('paidmediapurchased', async (data: PaidMediaPurchased) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PaidMediaPurchased).
