# BotSubscriptionUpdated

This object contains information about changes to a user payment subscription toward the current bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| user | `User` | Yes | User who subscribed for payments toward the bot |
| invoicePayload | `string` | Yes | Bot-specified invoice payload |
| state | `string` | Yes | The new state of the subscription. Currently, it can be one of “canceled” if the user canceled the subscription, “active” if the user re-enabled a previously canceled subscription, or “failed” if payment for the subscription failed. |


## Event Handlers

You can listen for BotSubscriptionUpdated events using:

```typescript
// Type-specific handler
bot.onBotSubscriptionUpdated(async (botsubscriptionupdated: BotSubscriptionUpdated) => {
  console.log('Received:', botsubscriptionupdated);
});

// Generic handler
bot.on('botsubscriptionupdated', async (data: BotSubscriptionUpdated) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotSubscriptionUpdated).
