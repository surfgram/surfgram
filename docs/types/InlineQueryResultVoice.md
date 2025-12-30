# InlineQueryResultVoice

Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.

## Fields

| Name                | Type                   | Required | Description                                                                                                 |
| :------------------ | :--------------------- | :------: | :---------------------------------------------------------------------------------------------------------- |
| type                | `string`               |   Yes    | Type of the result, must be voice                                                                           |
| id                  | `string`               |   Yes    | Unique identifier for this result, 1-64 bytes                                                               |
| voiceUrl            | `string`               |   Yes    | A valid URL for the voice recording                                                                         |
| title               | `string`               |   Yes    | Recording title                                                                                             |
| caption             | `string`               |    No    | Optional. Caption, 0-1024 characters after entities parsing                                                 |
| parseMode           | `string`               |    No    | Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.  |
| captionEntities     | `MessageEntity[]`      |    No    | Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode |
| voiceDuration       | `number`               |    No    | Optional. Recording duration in seconds                                                                     |
| replyMarkup         | `InlineKeyboardMarkup` |    No    | Optional. Inline keyboard attached to the message                                                           |
| inputMessageContent | `InputMessageContent`  |    No    | Optional. Content of the message to be sent instead of the voice recording                                  |

## Event Handlers

You can listen for InlineQueryResultVoice events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultVoice(async (inlinequeryresultvoice: InlineQueryResultVoice) => {
  console.log('Received:', inlinequeryresultvoice);
});

// Generic handler
bot.on('inlinequeryresultvoice', async (data: InlineQueryResultVoice) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultVoice).
