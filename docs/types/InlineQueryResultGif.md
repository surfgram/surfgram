# InlineQueryResultGif

Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the animation.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be gif |
| id | `string` | Yes | Unique identifier for this result, 1-64 bytes |
| gifUrl | `string` | Yes | A valid URL for the GIF file |
| gifWidth | `number` | No | Optional. Width of the GIF |
| gifHeight | `number` | No | Optional. Height of the GIF |
| gifDuration | `number` | No | Optional. Duration of the GIF in seconds |
| thumbnailUrl | `string` | Yes | URL of the static \(JPEG or GIF\) or animated \(MPEG4\) thumbnail for the result |
| thumbnailMimeType | `string` | No | Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg” |
| title | `string` | No | Optional. Title for the result |
| caption | `string` | No | Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing |
| parseMode | `string` | No | Optional. Mode for parsing entities in the caption. See formatting options for more details. |
| captionEntities | `MessageEntity[]` | No | Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode |
| showCaptionAboveMedia | `boolean` | No | Optional. Pass True, if the caption must be shown above the message media |
| replyMarkup | `InlineKeyboardMarkup` | No | Optional. Inline keyboard attached to the message |
| inputMessageContent | `InputMessageContent` | No | Optional. Content of the message to be sent instead of the GIF animation |


## Event Handlers

You can listen for InlineQueryResultGif events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultGif(async (inlinequeryresultgif: InlineQueryResultGif) => {
  console.log('Received:', inlinequeryresultgif);
});

// Generic handler
bot.on('inlinequeryresultgif', async (data: InlineQueryResultGif) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultGif).
