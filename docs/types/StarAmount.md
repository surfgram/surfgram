# StarAmount

Describes an amount of Telegram Stars.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| amount | `number` | Yes | Integer amount of Telegram Stars, rounded to 0; can be negative |
| nanostarAmount | `number` | No | Optional. The number of 1/1000000000 shares of Telegram Stars; from -999999999 to 999999999; can be negative if and only if amount is non-positive |


## Event Handlers

You can listen for StarAmount events using:

```typescript
// Type-specific handler
bot.onStarAmount(async (staramount: StarAmount) => {
  console.log('Received:', staramount);
});

// Generic handler
bot.on('staramount', async (data: StarAmount) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StarAmount).
