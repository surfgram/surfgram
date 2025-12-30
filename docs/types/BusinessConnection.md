# BusinessConnection

Describes the connection of the bot with a business account.

## Fields

| Name       | Type                | Required | Description                                                                                                                                                                                                                                                                                                                                               |
| :--------- | :------------------ | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | `string`            |   Yes    | Unique identifier of the business connection                                                                                                                                                                                                                                                                                                              |
| user       | `User`              |   Yes    | Business account user that created the business connection                                                                                                                                                                                                                                                                                                |
| userChatId | `number`            |   Yes    | Identifier of a private chat with the user who created the business connection. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. |
| date       | `number`            |   Yes    | Date the connection was established in Unix time                                                                                                                                                                                                                                                                                                          |
| rights     | `BusinessBotRights` |    No    | Optional. Rights of the business bot                                                                                                                                                                                                                                                                                                                      |
| isEnabled  | `boolean`           |   Yes    | True, if the connection is active                                                                                                                                                                                                                                                                                                                         |

## Fluent Methods

The `BusinessConnection` class has the following fluent methods that automatically inject contextual parameters:

### getBusinessConnection

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.

**Auto-filled parameters:**

| Parameter              | Source    | Description                                  |
| :--------------------- | :-------- | :------------------------------------------- |
| `businessConnectionId` | `this.id` | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const businessconnection = new BusinessConnection(rawData, bot);
await businessconnection.getBusinessConnection();
```

2. In an event handler:

```typescript
bot.onBusinessConnection(async (businessconnection: BusinessConnection) => {
  // Auto-fills parameters from the businessconnection instance
  await businessconnection.getBusinessConnection();
});
```

**See also:** [getBusinessConnection API method](../methods/getBusinessConnection.md)

## Event Handlers

You can listen for BusinessConnection events using:

```typescript
// Type-specific handler
bot.onBusinessConnection(async (businessconnection: BusinessConnection) => {
  console.log('Received:', businessconnection);
  // Use fluent methods
  await businessconnection.getBusinessConnection(...);
});

// Generic handler
bot.on('businessconnection', async (data: BusinessConnection) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BusinessConnection).
