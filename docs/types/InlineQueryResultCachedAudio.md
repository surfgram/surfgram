# InlineQueryResultCachedAudio

Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the audio.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be audio |
| id | `string` | Yes | Unique identifier for this result, 1-64 bytes |
| audioFileId | `string` | Yes | A valid file identifier for the audio file |
| caption | `string` | No | Optional. Caption, 0-1024 characters after entities parsing |
| parseMode | `string` | No | Optional. Mode for parsing entities in the audio caption. See formatting options for more details. |
| captionEntities | `MessageEntity[]` | No | Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode |
| replyMarkup | `InlineKeyboardMarkup` | No | Optional. Inline keyboard attached to the message |
| inputMessageContent | `InputMessageContent` | No | Optional. Content of the message to be sent instead of the audio |


## Event Handlers

You can listen for InlineQueryResultCachedAudio events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultCachedAudio(async (inlinequeryresultcachedaudio: InlineQueryResultCachedAudio) => {
  console.log('Received:', inlinequeryresultcachedaudio);
});

// Generic handler
bot.on('inlinequeryresultcachedaudio', async (data: InlineQueryResultCachedAudio) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultCachedAudio).
