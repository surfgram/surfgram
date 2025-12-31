# StarTransactions

Contains a list of Telegram Star transactions.

## Fields

| Name         | Type                | Required | Description              |
| :----------- | :------------------ | :------: | :----------------------- |
| transactions | `StarTransaction[]` |   Yes    | The list of transactions |

## Fluent Methods

The `StarTransactions` class has the following fluent methods that automatically inject contextual parameters:

### getStarTransactions

Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.

**Required parameters:**

| Parameter | Type     | Required | Description                                                                                             |
| :-------- | :------- | :------: | :------------------------------------------------------------------------------------------------------ |
| `offset`  | `number` |    No    | Number of transactions to skip in the response                                                          |
| `limit`   | `number` |    No    | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const startransactions = new StarTransactions(rawData, bot);
await startransactions.getStarTransactions(123, 123);
```

2. In an event handler:

```typescript
bot.onStarTransactions(async (startransactions: StarTransactions) => {
  // Auto-fills parameters from the startransactions instance
  await startransactions.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

## Event Handlers

You can listen for StarTransactions events using:

```typescript
// Type-specific handler
bot.onStarTransactions(async (startransactions: StarTransactions) => {
  console.log('Received:', startransactions);
  // Use fluent methods
  await startransactions.getStarTransactions(...);
});

// Generic handler
bot.on('startransactions', async (data: StarTransactions) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StarTransactions).
