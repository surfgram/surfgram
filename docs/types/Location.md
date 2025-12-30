# Location

This object represents a point on the map.

## Fields

| Name                 | Type     | Required | Description                                                                                                                                |
| :------------------- | :------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------- |
| latitude             | `number` |   Yes    | Latitude as defined by the sender                                                                                                          |
| longitude            | `number` |   Yes    | Longitude as defined by the sender                                                                                                         |
| horizontalAccuracy   | `number` |    No    | Optional. The radius of uncertainty for the location, measured in meters; 0-1500                                                           |
| livePeriod           | `number` |    No    | Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only. |
| heading              | `number` |    No    | Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.                                        |
| proximityAlertRadius | `number` |    No    | Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.        |

## Fluent Methods

The `Location` class has the following fluent methods that automatically inject contextual parameters:

### sendLocation

Use this method to send point on the map. On success, the sent Message is returned.

**Required parameters:**

| Parameter                 | Type                                                                                     | Required | Description                                                                                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                  | `number` \| `string`                                                                     |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                                                                                         |
| `latitude`                | `number`                                                                                 |   Yes    | Latitude of the location                                                                                                                                                                                                           |
| `longitude`               | `number`                                                                                 |   Yes    | Longitude of the location                                                                                                                                                                                                          |
| `businessConnectionId`    | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                                                           |
| `messageThreadId`         | `number`                                                                                 |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                                                                                                 |
| `directMessagesTopicId`   | `number`                                                                                 |    No    | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat                                                                                               |
| `horizontalAccuracy`      | `number`                                                                                 |    No    | The radius of uncertainty for the location, measured in meters; 0-1500                                                                                                                                                             |
| `livePeriod`              | `number`                                                                                 |    No    | Period in seconds during which the location will be updated \(see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.                                                |
| `heading`                 | `number`                                                                                 |    No    | For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.                                                                                                                   |
| `proximityAlertRadius`    | `number`                                                                                 |    No    | For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.                                                                           |
| `disableNotification`     | `boolean`                                                                                |    No    | Sends the message silently. Users will receive a notification with no sound.                                                                                                                                                       |
| `protectContent`          | `boolean`                                                                                |    No    | Protects the contents of the sent message from forwarding and saving                                                                                                                                                               |
| `allowPaidBroadcast`      | `boolean`                                                                                |    No    | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance                                           |
| `messageEffectId`         | `string`                                                                                 |    No    | Unique identifier of the message effect to be added to the message; for private chats only                                                                                                                                         |
| `suggestedPostParameters` | `SuggestedPostParameters`                                                                |    No    | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters`         | `ReplyParameters`                                                                        |    No    | Description of the message to reply to                                                                                                                                                                                             |
| `replyMarkup`             | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` |    No    | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user                                                    |

**Usage examples:**

1. Basic usage:

```typescript
const location = new Location(rawData, bot);
await location.sendLocation({
  chatId: 123,
  latitude: 123,
});
```

2. In an event handler:

```typescript
bot.onLocation(async (location: Location) => {
  // Auto-fills parameters from the location instance
  await location.sendLocation({ chatId: 'Response' });
});
```

**See also:** [sendLocation API method](../methods/sendLocation.md)

### editMessageLiveLocation

Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

**Required parameters:**

| Parameter              | Type                   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| :--------------------- | :--------------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `latitude`             | `number`               |   Yes    | Latitude of new location                                                                                                                                                                                                                                                                                                                                                                        |
| `longitude`            | `number`               |   Yes    | Longitude of new location                                                                                                                                                                                                                                                                                                                                                                       |
| `businessConnectionId` | `string`               |    No    | Unique identifier of the business connection on behalf of which the message to be edited was sent                                                                                                                                                                                                                                                                                               |
| `chatId`               | `number` \| `string`   |    No    | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                                                                                                                                                                                                      |
| `messageId`            | `number`               |    No    | Required if inline_message_id is not specified. Identifier of the message to edit                                                                                                                                                                                                                                                                                                               |
| `inlineMessageId`      | `string`               |    No    | Required if chat_id and message_id are not specified. Identifier of the inline message                                                                                                                                                                                                                                                                                                          |
| `livePeriod`           | `number`               |    No    | New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged |
| `horizontalAccuracy`   | `number`               |    No    | The radius of uncertainty for the location, measured in meters; 0-1500                                                                                                                                                                                                                                                                                                                          |
| `heading`              | `number`               |    No    | Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.                                                                                                                                                                                                                                                                                                      |
| `proximityAlertRadius` | `number`               |    No    | The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.                                                                                                                                                                                                                                                          |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for a new inline keyboard.                                                                                                                                                                                                                                                                                                                                             |

**Usage examples:**

1. Basic usage:

```typescript
const location = new Location(rawData, bot);
await location.editMessageLiveLocation({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onLocation(async (location: Location) => {
  // Auto-fills parameters from the location instance
  await location.editMessageLiveLocation({ businessConnectionId: 'Response' });
});
```

**See also:** [editMessageLiveLocation API method](../methods/editMessageLiveLocation.md)

### stopMessageLiveLocation

Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.

**Required parameters:**

| Parameter              | Type                   | Required | Description                                                                                                                                                |
| :--------------------- | :--------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`               |    No    | Unique identifier of the business connection on behalf of which the message to be edited was sent                                                          |
| `chatId`               | `number` \| `string`   |    No    | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `messageId`            | `number`               |    No    | Required if inline_message_id is not specified. Identifier of the message with live location to stop                                                       |
| `inlineMessageId`      | `string`               |    No    | Required if chat_id and message_id are not specified. Identifier of the inline message                                                                     |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for a new inline keyboard.                                                                                                        |

**Usage examples:**

1. Basic usage:

```typescript
const location = new Location(rawData, bot);
await location.stopMessageLiveLocation({
  businessConnectionId: 'example text',
  chatId: 123,
});
```

2. In an event handler:

```typescript
bot.onLocation(async (location: Location) => {
  // Auto-fills parameters from the location instance
  await location.stopMessageLiveLocation({ businessConnectionId: 'Response' });
});
```

**See also:** [stopMessageLiveLocation API method](../methods/stopMessageLiveLocation.md)

## Event Handlers

You can listen for Location events using:

```typescript
// Type-specific handler
bot.onLocation(async (location: Location) => {
  console.log('Received:', location);
  // Use fluent methods
  await location.sendLocation(...);
});

// Generic handler
bot.on('location', async (data: Location) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Location).
