# Community

Represents a community \(a group of chats\).

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `number` | Yes | Unique identifier for this community. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. |
| name | `string` | Yes | Name of the community |


## Event Handlers

You can listen for Community events using:

```typescript
// Type-specific handler
bot.onCommunity(async (community: Community) => {
  console.log('Received:', community);
});

// Generic handler
bot.on('community', async (data: Community) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Community).
