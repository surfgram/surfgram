# ManagedBotUpdated

This object contains information about the creation or token update of a bot that is managed by the current bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| user | `User` | Yes | User that created the bot |
| bot | `User` | Yes | Information about the bot. Token of the bot can be fetched using the method getManagedBotToken. |


## Event Handlers

You can listen for ManagedBotUpdated events using:

```typescript
// Type-specific handler
bot.onManagedBotUpdated(async (managedbotupdated: ManagedBotUpdated) => {
  console.log('Received:', managedbotupdated);
});

// Generic handler
bot.on('managedbotupdated', async (data: ManagedBotUpdated) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ManagedBotUpdated).
