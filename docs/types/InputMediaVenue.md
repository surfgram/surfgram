# InputMediaVenue

Represents a venue to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be venue |
| latitude | `number` | Yes | Latitude of the location |
| longitude | `number` | Yes | Longitude of the location |
| title | `string` | Yes | Name of the venue |
| address | `string` | Yes | Address of the venue |
| foursquareId | `string` | No | Optional. Foursquare identifier of the venue |
| foursquareType | `string` | No | Optional. Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\) |
| googlePlaceId | `string` | No | Optional. Google Places identifier of the venue |
| googlePlaceType | `string` | No | Optional. Google Places type of the venue. \(See supported types.\) |


## Event Handlers

You can listen for InputMediaVenue events using:

```typescript
// Type-specific handler
bot.onInputMediaVenue(async (inputmediavenue: InputMediaVenue) => {
  console.log('Received:', inputmediavenue);
});

// Generic handler
bot.on('inputmediavenue', async (data: InputMediaVenue) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMediaVenue).
