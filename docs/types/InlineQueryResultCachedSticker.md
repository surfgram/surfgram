# InlineQueryResultCachedSticker

Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the sticker.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be sticker |
| id | `string` | Yes | Unique identifier for this result, 1-64 bytes |
| stickerFileId | `string` | Yes | A valid file identifier of the sticker |
| replyMarkup | `InlineKeyboardMarkup` | No | Optional. Inline keyboard attached to the message |
| inputMessageContent | `InputMessageContent` | No | Optional. Content of the message to be sent instead of the sticker |


## Event Handlers

You can listen for InlineQueryResultCachedSticker events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultCachedSticker(async (inlinequeryresultcachedsticker: InlineQueryResultCachedSticker) => {
  console.log('Received:', inlinequeryresultcachedsticker);
});

// Generic handler
bot.on('inlinequeryresultcachedsticker', async (data: InlineQueryResultCachedSticker) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultCachedSticker).
