# BusinessLocation

Contains information about the location of a Telegram Business account.

## Fields

| Name     | Type       | Required | Description                        |
| :------- | :--------- | :------: | :--------------------------------- |
| address  | `string`   |   Yes    | Address of the business            |
| location | `Location` |    No    | Optional. Location of the business |

## Event Handlers

You can listen for BusinessLocation events using:

```typescript
// Type-specific handler
bot.onBusinessLocation(async (businesslocation: BusinessLocation) => {
  console.log('Received:', businesslocation);
});

// Generic handler
bot.on('businesslocation', async (data: BusinessLocation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BusinessLocation).
