# TransactionPartnerAffiliateProgram

Describes the affiliate program that issued the affiliate commission received via this transaction.

## Fields

| Name               | Type     | Required | Description                                                                                                                                 |
| :----------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------ |
| type               | `string` |   Yes    | Type of the transaction partner, always “affiliate_program”                                                                                 |
| sponsorUser        | `User`   |    No    | Optional. Information about the bot that sponsored the affiliate program                                                                    |
| commissionPerMille | `number` |   Yes    | The number of Telegram Stars received by the bot for each 1000 Telegram Stars received by the affiliate program sponsor from referred users |

## Event Handlers

You can listen for TransactionPartnerAffiliateProgram events using:

```typescript
// Type-specific handler
bot.onTransactionPartnerAffiliateProgram(
  async (transactionpartneraffiliateprogram: TransactionPartnerAffiliateProgram) => {
    console.log('Received:', transactionpartneraffiliateprogram);
  }
);

// Generic handler
bot.on('transactionpartneraffiliateprogram', async (data: TransactionPartnerAffiliateProgram) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#TransactionPartnerAffiliateProgram).
