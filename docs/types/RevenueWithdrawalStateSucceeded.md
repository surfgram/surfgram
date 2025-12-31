# RevenueWithdrawalStateSucceeded

The withdrawal succeeded.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the state, always “succeeded” |
| date | `number` | Yes | Date the withdrawal was completed in Unix time |
| url | `string` | Yes | An HTTPS URL that can be used to see transaction details |


## Event Handlers

You can listen for RevenueWithdrawalStateSucceeded events using:

```typescript
// Type-specific handler
bot.onRevenueWithdrawalStateSucceeded(async (revenuewithdrawalstatesucceeded: RevenueWithdrawalStateSucceeded) => {
  console.log('Received:', revenuewithdrawalstatesucceeded);
});

// Generic handler
bot.on('revenuewithdrawalstatesucceeded', async (data: RevenueWithdrawalStateSucceeded) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RevenueWithdrawalStateSucceeded).
