# TransactionPartnerUser

Describes a transaction with a user.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the transaction partner, always “user” |
| transactionType | `string` | Yes | Type of the transaction, currently one of “invoice\_payment” for payments via invoices, “paid\_media\_payment” for payments for paid media, “gift\_purchase” for gifts sent by the bot, “premium\_purchase” for Telegram Premium subscriptions gifted by the bot, “business\_account\_transfer” for direct transfers from managed business accounts |
| user | `User` | Yes | Information about the user |
| affiliate | `AffiliateInfo` | No | Optional. Information about the affiliate that received a commission via this transaction. Can be available only for “invoice\_payment” and “paid\_media\_payment” transactions. |
| invoicePayload | `string` | No | Optional. Bot-specified invoice payload. Can be available only for “invoice\_payment” transactions. |
| subscriptionPeriod | `number` | No | Optional. The duration of the paid subscription. Can be available only for “invoice\_payment” transactions. |
| paidMedia | `PaidMedia[]` | No | Optional. Information about the paid media bought by the user; for “paid\_media\_payment” transactions only |
| paidMediaPayload | `string` | No | Optional. Bot-specified paid media payload. Can be available only for “paid\_media\_payment” transactions. |
| gift | `Gift` | No | Optional. The gift sent to the user by the bot; for “gift\_purchase” transactions only |
| premiumSubscriptionDuration | `number` | No | Optional. Number of months the gifted Telegram Premium subscription will be active for; for “premium\_purchase” transactions only |


## Event Handlers

You can listen for TransactionPartnerUser events using:

```typescript
// Type-specific handler
bot.onTransactionPartnerUser(async (transactionpartneruser: TransactionPartnerUser) => {
  console.log('Received:', transactionpartneruser);
});

// Generic handler
bot.on('transactionpartneruser', async (data: TransactionPartnerUser) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TransactionPartnerUser).
