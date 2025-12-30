# InlineQueryResultCachedVoice

Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.

## Fields

| Name                | Type                   | Required | Description                                                                                                 |
| :------------------ | :--------------------- | :------: | :---------------------------------------------------------------------------------------------------------- |
| type                | `string`               |   Yes    | Type of the result, must be voice                                                                           |
| id                  | `string`               |   Yes    | Unique identifier for this result, 1-64 bytes                                                               |
| voiceFileId         | `string`               |   Yes    | A valid file identifier for the voice message                                                               |
| title               | `string`               |   Yes    | Voice message title                                                                                         |
| caption             | `string`               |    No    | Optional. Caption, 0-1024 characters after entities parsing                                                 |
| parseMode           | `string`               |    No    | Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.  |
| captionEntities     | `MessageEntity[]`      |    No    | Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode |
| replyMarkup         | `InlineKeyboardMarkup` |    No    | Optional. Inline keyboard attached to the message                                                           |
| inputMessageContent | `InputMessageContent`  |    No    | Optional. Content of the message to be sent instead of the voice message                                    |

## Event Handlers

You can listen for InlineQueryResultCachedVoice events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultCachedVoice(
  async (inlinequeryresultcachedvoice: InlineQueryResultCachedVoice) => {
    console.log('Received:', inlinequeryresultcachedvoice);
  }
);

// Generic handler
bot.on('inlinequeryresultcachedvoice', async (data: InlineQueryResultCachedVoice) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultCachedVoice).
