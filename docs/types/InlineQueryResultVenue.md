# InlineQueryResultVenue

Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the venue.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be venue |
| id | `string` | Yes | Unique identifier for this result, 1-64 Bytes |
| latitude | `number` | Yes | Latitude of the venue location in degrees |
| longitude | `number` | Yes | Longitude of the venue location in degrees |
| title | `string` | Yes | Title of the venue |
| address | `string` | Yes | Address of the venue |
| foursquareId | `string` | No | Optional. Foursquare identifier of the venue if known |
| foursquareType | `string` | No | Optional. Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\) |
| googlePlaceId | `string` | No | Optional. Google Places identifier of the venue |
| googlePlaceType | `string` | No | Optional. Google Places type of the venue. \(See supported types.\) |
| replyMarkup | `InlineKeyboardMarkup` | No | Optional. Inline keyboard attached to the message |
| inputMessageContent | `InputMessageContent` | No | Optional. Content of the message to be sent instead of the venue |
| thumbnailUrl | `string` | No | Optional. Url of the thumbnail for the result |
| thumbnailWidth | `number` | No | Optional. Thumbnail width |
| thumbnailHeight | `number` | No | Optional. Thumbnail height |


## Event Handlers

You can listen for InlineQueryResultVenue events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultVenue(async (inlinequeryresultvenue: InlineQueryResultVenue) => {
  console.log('Received:', inlinequeryresultvenue);
});

// Generic handler
bot.on('inlinequeryresultvenue', async (data: InlineQueryResultVenue) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultVenue).
