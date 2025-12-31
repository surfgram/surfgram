# UsersShared

This object contains information about the users whose identifiers were shared with the bot using a KeyboardButtonRequestUsers button.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| requestId | `number` | Yes | Identifier of the request |
| users | `SharedUser[]` | Yes | Information about users shared with the bot. |


## Event Handlers

You can listen for UsersShared events using:

```typescript
// Type-specific handler
bot.onUsersShared(async (usersshared: UsersShared) => {
  console.log('Received:', usersshared);
});

// Generic handler
bot.on('usersshared', async (data: UsersShared) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UsersShared).
