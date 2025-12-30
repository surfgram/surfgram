# TransactionPartnerTelegramAds

Describes a withdrawal transaction to the Telegram Ads platform.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the transaction partner, always “telegram\_ads” |


## Event Handlers

You can listen for TransactionPartnerTelegramAds events using:

```typescript
// Type-specific handler
bot.onTransactionPartnerTelegramAds(async (transactionpartnertelegramads: TransactionPartnerTelegramAds) => {
  console.log('Received:', transactionpartnertelegramads);
});

// Generic handler
bot.on('transactionpartnertelegramads', async (data: TransactionPartnerTelegramAds) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TransactionPartnerTelegramAds).
