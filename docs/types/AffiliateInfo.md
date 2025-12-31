# AffiliateInfo

Contains information about the affiliate that received a commission via this transaction.

## Fields

| Name               | Type     | Required | Description                                                                                                                                        |
| :----------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| affiliateUser      | `User`   |    No    | Optional. The bot or the user that received an affiliate commission if it was received by a bot or a user                                          |
| affiliateChat      | `Chat`   |    No    | Optional. The chat that received an affiliate commission if it was received by a chat                                                              |
| commissionPerMille | `number` |   Yes    | The number of Telegram Stars received by the affiliate for each 1000 Telegram Stars received by the bot from referred users                        |
| amount             | `number` |   Yes    | Integer amount of Telegram Stars received by the affiliate from the transaction, rounded to 0; can be negative for refunds                         |
| nanostarAmount     | `number` |    No    | Optional. The number of 1/1000000000 shares of Telegram Stars received by the affiliate; from -999999999 to 999999999; can be negative for refunds |

## Event Handlers

You can listen for AffiliateInfo events using:

```typescript
// Type-specific handler
bot.onAffiliateInfo(async (affiliateinfo: AffiliateInfo) => {
  console.log('Received:', affiliateinfo);
});

// Generic handler
bot.on('affiliateinfo', async (data: AffiliateInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#AffiliateInfo).
