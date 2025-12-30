# ProximityAlertTriggered

This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.

## Fields

| Name     | Type     | Required | Description                    |
| :------- | :------- | :------: | :----------------------------- |
| traveler | `User`   |   Yes    | User that triggered the alert  |
| watcher  | `User`   |   Yes    | User that set the alert        |
| distance | `number` |   Yes    | The distance between the users |

## Event Handlers

You can listen for ProximityAlertTriggered events using:

```typescript
// Type-specific handler
bot.onProximityAlertTriggered(async (proximityalerttriggered: ProximityAlertTriggered) => {
  console.log('Received:', proximityalerttriggered);
});

// Generic handler
bot.on('proximityalerttriggered', async (data: ProximityAlertTriggered) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ProximityAlertTriggered).
