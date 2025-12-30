# SuggestedPostPaid

Describes a service message about a successful payment for a suggested post.

## Fields

| Name                 | Type         | Required | Description                                                                                                                                                           |
| :------------------- | :----------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suggestedPostMessage | `Message`    |    No    | Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. |
| currency             | `string`     |   Yes    | Currency in which the payment was made. Currently, one of “XTR” for Telegram Stars or “TON” for toncoins                                                              |
| amount               | `number`     |    No    | Optional. The amount of the currency that was received by the channel in nanotoncoins; for payments in toncoins only                                                  |
| starAmount           | `StarAmount` |    No    | Optional. The amount of Telegram Stars that was received by the channel; for payments in Telegram Stars only                                                          |

## Event Handlers

You can listen for SuggestedPostPaid events using:

```typescript
// Type-specific handler
bot.onSuggestedPostPaid(async (suggestedpostpaid: SuggestedPostPaid) => {
  console.log('Received:', suggestedpostpaid);
});

// Generic handler
bot.on('suggestedpostpaid', async (data: SuggestedPostPaid) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuggestedPostPaid).
