# SuggestedPostRefunded

Describes a service message about a payment refund for a suggested post.

## Fields

| Name                 | Type      | Required | Description                                                                                                                                                                                                                         |
| :------------------- | :-------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suggestedPostMessage | `Message` |    No    | Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply.                                                               |
| reason               | `string`  |   Yes    | Reason for the refund. Currently, one of “post_deleted” if the post was deleted within 24 hours of being posted or removed from scheduled messages without being posted, or “payment_refunded” if the payer refunded their payment. |

## Event Handlers

You can listen for SuggestedPostRefunded events using:

```typescript
// Type-specific handler
bot.onSuggestedPostRefunded(async (suggestedpostrefunded: SuggestedPostRefunded) => {
  console.log('Received:', suggestedpostrefunded);
});

// Generic handler
bot.on('suggestedpostrefunded', async (data: SuggestedPostRefunded) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuggestedPostRefunded).
