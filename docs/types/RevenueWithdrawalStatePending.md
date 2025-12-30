# RevenueWithdrawalStatePending

The withdrawal is in progress.

## Fields

| Name | Type     | Required | Description                         |
| :--- | :------- | :------: | :---------------------------------- |
| type | `string` |   Yes    | Type of the state, always “pending” |

## Event Handlers

You can listen for RevenueWithdrawalStatePending events using:

```typescript
// Type-specific handler
bot.onRevenueWithdrawalStatePending(
  async (revenuewithdrawalstatepending: RevenueWithdrawalStatePending) => {
    console.log('Received:', revenuewithdrawalstatepending);
  }
);

// Generic handler
bot.on('revenuewithdrawalstatepending', async (data: RevenueWithdrawalStatePending) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RevenueWithdrawalStatePending).
