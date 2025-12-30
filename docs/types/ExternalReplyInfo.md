# ExternalReplyInfo

This object contains information about a message that is being replied to, which may come from another chat or forum topic.

## Fields

| Name               | Type                 | Required | Description                                                                                                                     |
| :----------------- | :------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------ |
| origin             | `MessageOrigin`      |   Yes    | Origin of the message replied to by the given message                                                                           |
| chat               | `Chat`               |    No    | Optional. Chat the original message belongs to. Available only if the chat is a supergroup or a channel.                        |
| messageId          | `number`             |    No    | Optional. Unique message identifier inside the original chat. Available only if the original chat is a supergroup or a channel. |
| linkPreviewOptions | `LinkPreviewOptions` |    No    | Optional. Options used for link preview generation for the original message, if it is a text message                            |
| animation          | `Animation`          |    No    | Optional. Message is an animation, information about the animation                                                              |
| audio              | `Audio`              |    No    | Optional. Message is an audio file, information about the file                                                                  |
| document           | `Document`           |    No    | Optional. Message is a general file, information about the file                                                                 |
| paidMedia          | `PaidMediaInfo`      |    No    | Optional. Message contains paid media; information about the paid media                                                         |
| photo              | `PhotoSize[]`        |    No    | Optional. Message is a photo, available sizes of the photo                                                                      |
| sticker            | `Sticker`            |    No    | Optional. Message is a sticker, information about the sticker                                                                   |
| story              | `Story`              |    No    | Optional. Message is a forwarded story                                                                                          |
| video              | `Video`              |    No    | Optional. Message is a video, information about the video                                                                       |
| videoNote          | `VideoNote`          |    No    | Optional. Message is a video note, information about the video message                                                          |
| voice              | `Voice`              |    No    | Optional. Message is a voice message, information about the file                                                                |
| hasMediaSpoiler    | `boolean`            |    No    | Optional. True, if the message media is covered by a spoiler animation                                                          |
| checklist          | `Checklist`          |    No    | Optional. Message is a checklist                                                                                                |
| contact            | `Contact`            |    No    | Optional. Message is a shared contact, information about the contact                                                            |
| dice               | `Dice`               |    No    | Optional. Message is a dice with random value                                                                                   |
| game               | `Game`               |    No    | Optional. Message is a game, information about the game. More about games »                                                     |
| giveaway           | `Giveaway`           |    No    | Optional. Message is a scheduled giveaway, information about the giveaway                                                       |
| giveawayWinners    | `GiveawayWinners`    |    No    | Optional. A giveaway with public winners was completed                                                                          |
| invoice            | `Invoice`            |    No    | Optional. Message is an invoice for a payment, information about the invoice. More about payments »                             |
| location           | `Location`           |    No    | Optional. Message is a shared location, information about the location                                                          |
| poll               | `Poll`               |    No    | Optional. Message is a native poll, information about the poll                                                                  |
| venue              | `Venue`              |    No    | Optional. Message is a venue, information about the venue                                                                       |

## Event Handlers

You can listen for ExternalReplyInfo events using:

```typescript
// Type-specific handler
bot.onExternalReplyInfo(async (externalreplyinfo: ExternalReplyInfo) => {
  console.log('Received:', externalreplyinfo);
});

// Generic handler
bot.on('externalreplyinfo', async (data: ExternalReplyInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ExternalReplyInfo).
