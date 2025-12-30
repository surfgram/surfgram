# InlineQueryResultAudio

Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.

## Fields

| Name                | Type                   | Required | Description                                                                                                 |
| :------------------ | :--------------------- | :------: | :---------------------------------------------------------------------------------------------------------- |
| type                | `string`               |   Yes    | Type of the result, must be audio                                                                           |
| id                  | `string`               |   Yes    | Unique identifier for this result, 1-64 bytes                                                               |
| audioUrl            | `string`               |   Yes    | A valid URL for the audio file                                                                              |
| title               | `string`               |   Yes    | Title                                                                                                       |
| caption             | `string`               |    No    | Optional. Caption, 0-1024 characters after entities parsing                                                 |
| parseMode           | `string`               |    No    | Optional. Mode for parsing entities in the audio caption. See formatting options for more details.          |
| captionEntities     | `MessageEntity[]`      |    No    | Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode |
| performer           | `string`               |    No    | Optional. Performer                                                                                         |
| audioDuration       | `number`               |    No    | Optional. Audio duration in seconds                                                                         |
| replyMarkup         | `InlineKeyboardMarkup` |    No    | Optional. Inline keyboard attached to the message                                                           |
| inputMessageContent | `InputMessageContent`  |    No    | Optional. Content of the message to be sent instead of the audio                                            |

## Event Handlers

You can listen for InlineQueryResultAudio events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultAudio(async (inlinequeryresultaudio: InlineQueryResultAudio) => {
  console.log('Received:', inlinequeryresultaudio);
});

// Generic handler
bot.on('inlinequeryresultaudio', async (data: InlineQueryResultAudio) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultAudio).
