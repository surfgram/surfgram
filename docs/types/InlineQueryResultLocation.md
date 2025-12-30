# InlineQueryResultLocation

Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.

## Fields

| Name                 | Type                   | Required | Description                                                                                                                                                             |
| :------------------- | :--------------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                 | `string`               |   Yes    | Type of the result, must be location                                                                                                                                    |
| id                   | `string`               |   Yes    | Unique identifier for this result, 1-64 Bytes                                                                                                                           |
| latitude             | `number`               |   Yes    | Location latitude in degrees                                                                                                                                            |
| longitude            | `number`               |   Yes    | Location longitude in degrees                                                                                                                                           |
| title                | `string`               |   Yes    | Location title                                                                                                                                                          |
| horizontalAccuracy   | `number`               |    No    | Optional. The radius of uncertainty for the location, measured in meters; 0-1500                                                                                        |
| livePeriod           | `number`               |    No    | Optional. Period in seconds during which the location can be updated, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. |
| heading              | `number`               |    No    | Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.                                              |
| proximityAlertRadius | `number`               |    No    | Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.      |
| replyMarkup          | `InlineKeyboardMarkup` |    No    | Optional. Inline keyboard attached to the message                                                                                                                       |
| inputMessageContent  | `InputMessageContent`  |    No    | Optional. Content of the message to be sent instead of the location                                                                                                     |
| thumbnailUrl         | `string`               |    No    | Optional. Url of the thumbnail for the result                                                                                                                           |
| thumbnailWidth       | `number`               |    No    | Optional. Thumbnail width                                                                                                                                               |
| thumbnailHeight      | `number`               |    No    | Optional. Thumbnail height                                                                                                                                              |

## Event Handlers

You can listen for InlineQueryResultLocation events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultLocation(async (inlinequeryresultlocation: InlineQueryResultLocation) => {
  console.log('Received:', inlinequeryresultlocation);
});

// Generic handler
bot.on('inlinequeryresultlocation', async (data: InlineQueryResultLocation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultLocation).
