# Venue

This object represents a venue.

## Fields

| Name            | Type       | Required | Description                                                                                                                              |
| :-------------- | :--------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------- |
| location        | `Location` |   Yes    | Venue location. Can't be a live location                                                                                                 |
| title           | `string`   |   Yes    | Name of the venue                                                                                                                        |
| address         | `string`   |   Yes    | Address of the venue                                                                                                                     |
| foursquareId    | `string`   |    No    | Optional. Foursquare identifier of the venue                                                                                             |
| foursquareType  | `string`   |    No    | Optional. Foursquare type of the venue. \(For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.\) |
| googlePlaceId   | `string`   |    No    | Optional. Google Places identifier of the venue                                                                                          |
| googlePlaceType | `string`   |    No    | Optional. Google Places type of the venue. \(See supported types.\)                                                                      |

## Fluent Methods

The `Venue` class has the following fluent methods that automatically inject contextual parameters:

### sendVenue

Use this method to send information about a venue. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter       | Source               | Description                           |
| :-------------- | :------------------- | :------------------------------------ |
| `foursquareId`  | `this.foursquareId`  | Foursquare identifier of the venue    |
| `googlePlaceId` | `this.googlePlaceId` | Google Places identifier of the venue |

**Required parameters:**

| Parameter                 | Type                                                                                     | Required | Description                                                                                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                  | `number` \| `string`                                                                     |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                                                                                         |
| `latitude`                | `number`                                                                                 |   Yes    | Latitude of the venue                                                                                                                                                                                                              |
| `longitude`               | `number`                                                                                 |   Yes    | Longitude of the venue                                                                                                                                                                                                             |
| `title`                   | `string`                                                                                 |   Yes    | Name of the venue                                                                                                                                                                                                                  |
| `address`                 | `string`                                                                                 |   Yes    | Address of the venue                                                                                                                                                                                                               |
| `businessConnectionId`    | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                                                           |
| `messageThreadId`         | `number`                                                                                 |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                                                                                                 |
| `directMessagesTopicId`   | `number`                                                                                 |    No    | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat                                                                                               |
| `foursquareType`          | `string`                                                                                 |    No    | Foursquare type of the venue, if known. \(For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.\)                                                                                           |
| `googlePlaceType`         | `string`                                                                                 |    No    | Google Places type of the venue. \(See supported types.\)                                                                                                                                                                          |
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
const venue = new Venue(rawData, bot);
await venue.sendVenue({
  chatId: 123,
  latitude: 123,
});
```

2. In an event handler:

```typescript
bot.onVenue(async (venue: Venue) => {
  // Auto-fills parameters from the venue instance
  await venue.sendVenue({ chatId: 'Response' });
});
```

**See also:** [sendVenue API method](../methods/sendVenue.md)

## Event Handlers

You can listen for Venue events using:

```typescript
// Type-specific handler
bot.onVenue(async (venue: Venue) => {
  console.log('Received:', venue);
  // Use fluent methods
  await venue.sendVenue(...);
});

// Generic handler
bot.on('venue', async (data: Venue) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Venue).
