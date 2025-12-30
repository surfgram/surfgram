# TransactionPartnerOther

Describes a transaction with an unknown source or recipient.

## Fields

| Name | Type     | Required | Description                                     |
| :--- | :------- | :------: | :---------------------------------------------- |
| type | `string` |   Yes    | Type of the transaction partner, always “other” |

## Event Handlers

You can listen for TransactionPartnerOther events using:

```typescript
// Type-specific handler
bot.onTransactionPartnerOther(async (transactionpartnerother: TransactionPartnerOther) => {
  console.log('Received:', transactionpartnerother);
});

// Generic handler
bot.on('transactionpartnerother', async (data: TransactionPartnerOther) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TransactionPartnerOther).
