# ManagedBotCreated

This object contains information about the bot that was created to be managed by the current bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| bot | `User` | Yes | Information about the bot. The bot's token can be fetched using the method getManagedBotToken. |


## Event Handlers

You can listen for ManagedBotCreated events using:

```typescript
// Type-specific handler
bot.onManagedBotCreated(async (managedbotcreated: ManagedBotCreated) => {
  console.log('Received:', managedbotcreated);
});

// Generic handler
bot.on('managedbotcreated', async (data: ManagedBotCreated) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ManagedBotCreated).
