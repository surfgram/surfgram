# StarTransaction

Describes a Telegram Star transaction. Note that if the buyer initiates a chargeback with the payment provider from whom they acquired Stars \(e.g., Apple, Google\) following this transaction, the refunded Stars will be deducted from the bot&#39;s balance. This is outside of Telegram&#39;s control.

## Fields

| Name           | Type                 | Required | Description                                                                                                                                                                                                                       |
| :------------- | :------------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | `string`             |   Yes    | Unique identifier of the transaction. Coincides with the identifier of the original transaction for refund transactions. Coincides with SuccessfulPayment.telegram_payment_charge_id for successful incoming payments from users. |
| amount         | `number`             |   Yes    | Integer amount of Telegram Stars transferred by the transaction                                                                                                                                                                   |
| nanostarAmount | `number`             |    No    | Optional. The number of 1/1000000000 shares of Telegram Stars transferred by the transaction; from 0 to 999999999                                                                                                                 |
| date           | `number`             |   Yes    | Date the transaction was created in Unix time                                                                                                                                                                                     |
| source         | `TransactionPartner` |    No    | Optional. Source of an incoming transaction \(e.g., a user purchasing goods or services, Fragment refunding a failed withdrawal\). Only for incoming transactions                                                                 |
| receiver       | `TransactionPartner` |    No    | Optional. Receiver of an outgoing transaction \(e.g., a user for a purchase refund, Fragment for a withdrawal\). Only for outgoing transactions                                                                                   |

## Fluent Methods

The `StarTransaction` class has the following fluent methods that automatically inject contextual parameters:

### getStarTransactions

Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.

**Required parameters:**

| Parameter | Type     | Required | Description                                                                                             |
| :-------- | :------- | :------: | :------------------------------------------------------------------------------------------------------ |
| `offset`  | `number` |    No    | Number of transactions to skip in the response                                                          |
| `limit`   | `number` |    No    | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const startransaction = new StarTransaction(rawData, bot);
await startransaction.getStarTransactions(123, 123);
```

2. In an event handler:

```typescript
bot.onStarTransaction(async (startransaction: StarTransaction) => {
  // Auto-fills parameters from the startransaction instance
  await startransaction.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

## Event Handlers

You can listen for StarTransaction events using:

```typescript
// Type-specific handler
bot.onStarTransaction(async (startransaction: StarTransaction) => {
  console.log('Received:', startransaction);
  // Use fluent methods
  await startransaction.getStarTransactions(...);
});

// Generic handler
bot.on('startransaction', async (data: StarTransaction) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StarTransaction).
