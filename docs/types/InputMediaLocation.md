# InputMediaLocation

Represents a location to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be location |
| latitude | `number` | Yes | Latitude of the location |
| longitude | `number` | Yes | Longitude of the location |
| horizontalAccuracy | `number` | No | Optional. The radius of uncertainty for the location, measured in meters; 0-1500 |


## Event Handlers

You can listen for InputMediaLocation events using:

```typescript
// Type-specific handler
bot.onInputMediaLocation(async (inputmedialocation: InputMediaLocation) => {
  console.log('Received:', inputmedialocation);
});

// Generic handler
bot.on('inputmedialocation', async (data: InputMediaLocation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMediaLocation).
