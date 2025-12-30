# TransactionPartnerTelegramApi

Describes a transaction with payment for paid broadcasting.

## Fields

| Name         | Type     | Required | Description                                                                              |
| :----------- | :------- | :------: | :--------------------------------------------------------------------------------------- |
| type         | `string` |   Yes    | Type of the transaction partner, always “telegram_api”                                   |
| requestCount | `number` |   Yes    | The number of successful requests that exceeded regular limits and were therefore billed |

## Event Handlers

You can listen for TransactionPartnerTelegramApi events using:

```typescript
// Type-specific handler
bot.onTransactionPartnerTelegramApi(
  async (transactionpartnertelegramapi: TransactionPartnerTelegramApi) => {
    console.log('Received:', transactionpartnertelegramapi);
  }
);

// Generic handler
bot.on('transactionpartnertelegramapi', async (data: TransactionPartnerTelegramApi) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TransactionPartnerTelegramApi).
