# TransactionPartnerUser

Describes a transaction with a user.

## Fields

| Name                        | Type            | Required | Description                                                                                                                                                                                                                                                                                                                                  |
| :-------------------------- | :-------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                        | `string`        |   Yes    | Type of the transaction partner, always “user”                                                                                                                                                                                                                                                                                               |
| transactionType             | `string`        |   Yes    | Type of the transaction, currently one of “invoice_payment” for payments via invoices, “paid_media_payment” for payments for paid media, “gift_purchase” for gifts sent by the bot, “premium_purchase” for Telegram Premium subscriptions gifted by the bot, “business_account_transfer” for direct transfers from managed business accounts |
| user                        | `User`          |   Yes    | Information about the user                                                                                                                                                                                                                                                                                                                   |
| affiliate                   | `AffiliateInfo` |    No    | Optional. Information about the affiliate that received a commission via this transaction. Can be available only for “invoice_payment” and “paid_media_payment” transactions.                                                                                                                                                                |
| invoicePayload              | `string`        |    No    | Optional. Bot-specified invoice payload. Can be available only for “invoice_payment” transactions.                                                                                                                                                                                                                                           |
| subscriptionPeriod          | `number`        |    No    | Optional. The duration of the paid subscription. Can be available only for “invoice_payment” transactions.                                                                                                                                                                                                                                   |
| paidMedia                   | `PaidMedia[]`   |    No    | Optional. Information about the paid media bought by the user; for “paid_media_payment” transactions only                                                                                                                                                                                                                                    |
| paidMediaPayload            | `string`        |    No    | Optional. Bot-specified paid media payload. Can be available only for “paid_media_payment” transactions.                                                                                                                                                                                                                                     |
| gift                        | `Gift`          |    No    | Optional. The gift sent to the user by the bot; for “gift_purchase” transactions only                                                                                                                                                                                                                                                        |
| premiumSubscriptionDuration | `number`        |    No    | Optional. Number of months the gifted Telegram Premium subscription will be active for; for “premium_purchase” transactions only                                                                                                                                                                                                             |

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
