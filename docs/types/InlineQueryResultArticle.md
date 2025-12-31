# InlineQueryResultArticle

Represents a link to an article or web page.

## Fields

| Name                | Type                   | Required | Description                                       |
| :------------------ | :--------------------- | :------: | :------------------------------------------------ |
| type                | `string`               |   Yes    | Type of the result, must be article               |
| id                  | `string`               |   Yes    | Unique identifier for this result, 1-64 Bytes     |
| title               | `string`               |   Yes    | Title of the result                               |
| inputMessageContent | `InputMessageContent`  |   Yes    | Content of the message to be sent                 |
| replyMarkup         | `InlineKeyboardMarkup` |    No    | Optional. Inline keyboard attached to the message |
| url                 | `string`               |    No    | Optional. URL of the result                       |
| description         | `string`               |    No    | Optional. Short description of the result         |
| thumbnailUrl        | `string`               |    No    | Optional. Url of the thumbnail for the result     |
| thumbnailWidth      | `number`               |    No    | Optional. Thumbnail width                         |
| thumbnailHeight     | `number`               |    No    | Optional. Thumbnail height                        |

## Event Handlers

You can listen for InlineQueryResultArticle events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultArticle(async (inlinequeryresultarticle: InlineQueryResultArticle) => {
  console.log('Received:', inlinequeryresultarticle);
});

// Generic handler
bot.on('inlinequeryresultarticle', async (data: InlineQueryResultArticle) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultArticle).
