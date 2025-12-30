# TransactionPartnerFragment

Describes a withdrawal transaction with Fragment.

## Fields

| Name            | Type                     | Required | Description                                                       |
| :-------------- | :----------------------- | :------: | :---------------------------------------------------------------- |
| type            | `string`                 |   Yes    | Type of the transaction partner, always “fragment”                |
| withdrawalState | `RevenueWithdrawalState` |    No    | Optional. State of the transaction if the transaction is outgoing |

## Event Handlers

You can listen for TransactionPartnerFragment events using:

```typescript
// Type-specific handler
bot.onTransactionPartnerFragment(async (transactionpartnerfragment: TransactionPartnerFragment) => {
  console.log('Received:', transactionpartnerfragment);
});

// Generic handler
bot.on('transactionpartnerfragment', async (data: TransactionPartnerFragment) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TransactionPartnerFragment).
