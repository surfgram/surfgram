# RevenueWithdrawalState

This object describes the state of a revenue withdrawal operation. Currently, it can be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the state, always “pending” |


## Event Handlers

You can listen for RevenueWithdrawalState events using:

```typescript
// Type-specific handler
bot.onRevenueWithdrawalState(async (revenuewithdrawalstate: RevenueWithdrawalState) => {
  console.log('Received:', revenuewithdrawalstate);
});

// Generic handler
bot.on('revenuewithdrawalstate', async (data: RevenueWithdrawalState) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RevenueWithdrawalState).
