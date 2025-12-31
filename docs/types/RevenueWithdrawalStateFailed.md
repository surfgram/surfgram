# RevenueWithdrawalStateFailed

The withdrawal failed and the transaction was refunded.

## Fields

| Name | Type     | Required | Description                        |
| :--- | :------- | :------: | :--------------------------------- |
| type | `string` |   Yes    | Type of the state, always “failed” |

## Event Handlers

You can listen for RevenueWithdrawalStateFailed events using:

```typescript
// Type-specific handler
bot.onRevenueWithdrawalStateFailed(
  async (revenuewithdrawalstatefailed: RevenueWithdrawalStateFailed) => {
    console.log('Received:', revenuewithdrawalstatefailed);
  }
);

// Generic handler
bot.on('revenuewithdrawalstatefailed', async (data: RevenueWithdrawalStateFailed) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RevenueWithdrawalStateFailed).
