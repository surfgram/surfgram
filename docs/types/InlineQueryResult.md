# InlineQueryResult

This object represents one result of an inline query. Telegram clients currently support results of the following 20 types:

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

## Fluent Methods

The `InlineQueryResult` class has the following fluent methods that automatically inject contextual parameters:

### answerInlineQuery

Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.

**Auto-filled parameters:**

| Parameter       | Source     | Description                              |
| :-------------- | :--------- | :--------------------------------------- |
| `inlineQueryId` | `this?.id` | Unique identifier for the answered query |

**Required parameters:**

| Parameter    | Type                       | Required | Description                                                                                                                                                                                                                        |
| :----------- | :------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `results`    | `InlineQueryResult[]`      |   Yes    | A JSON-serialized array of results for the inline query                                                                                                                                                                            |
| `cacheTime`  | `number`                   |    No    | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.                                                                                                            |
| `isPersonal` | `boolean`                  |    No    | Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.                                                             |
| `nextOffset` | `string`                   |    No    | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. |
| `button`     | `InlineQueryResultsButton` |    No    | A JSON-serialized object describing a button to be shown above inline query results                                                                                                                                                |

**Usage examples:**

1. Basic usage:

```typescript
const inlinequeryresult = new InlineQueryResult(rawData, bot);
await inlinequeryresult.answerInlineQuery({
  results: [{} as any],
  cacheTime: 123,
});
```

2. In an event handler:

```typescript
bot.onInlineQueryResult(async (inlinequeryresult: InlineQueryResult) => {
  // Auto-fills parameters from the inlinequeryresult instance
  await inlinequeryresult.answerInlineQuery({ nextOffset: 'Response' });
});
```

**See also:** [answerInlineQuery API method](../methods/answerInlineQuery.md)

### answerWebAppQuery

Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.

**Required parameters:**

| Parameter       | Type                | Required | Description                                                |
| :-------------- | :------------------ | :------: | :--------------------------------------------------------- |
| `webAppQueryId` | `string`            |   Yes    | Unique identifier for the query to be answered             |
| `result`        | `InlineQueryResult` |   Yes    | A JSON-serialized object describing the message to be sent |

**Usage examples:**

1. Basic usage:

```typescript
const inlinequeryresult = new InlineQueryResult(rawData, bot);
await inlinequeryresult.answerWebAppQuery('example text', {} as any);
```

2. In an event handler:

```typescript
bot.onInlineQueryResult(async (inlinequeryresult: InlineQueryResult) => {
  // Auto-fills parameters from the inlinequeryresult instance
  await inlinequeryresult.answerWebAppQuery();
});
```

**See also:** [answerWebAppQuery API method](../methods/answerWebAppQuery.md)

### savePreparedInlineMessage

Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.

**Required parameters:**

| Parameter           | Type                | Required | Description                                                            |
| :------------------ | :------------------ | :------: | :--------------------------------------------------------------------- |
| `userId`            | `number`            |   Yes    | Unique identifier of the target user that can use the prepared message |
| `result`            | `InlineQueryResult` |   Yes    | A JSON-serialized object describing the message to be sent             |
| `allowUserChats`    | `boolean`           |    No    | Pass True if the message can be sent to private chats with users       |
| `allowBotChats`     | `boolean`           |    No    | Pass True if the message can be sent to private chats with bots        |
| `allowGroupChats`   | `boolean`           |    No    | Pass True if the message can be sent to group and supergroup chats     |
| `allowChannelChats` | `boolean`           |    No    | Pass True if the message can be sent to channel chats                  |

**Usage examples:**

1. Basic usage:

```typescript
const inlinequeryresult = new InlineQueryResult(rawData, bot);
await inlinequeryresult.savePreparedInlineMessage({
  userId: 123,
  result: {} as any,
});
```

2. In an event handler:

```typescript
bot.onInlineQueryResult(async (inlinequeryresult: InlineQueryResult) => {
  // Auto-fills parameters from the inlinequeryresult instance
  await inlinequeryresult.savePreparedInlineMessage({});
});
```

**See also:** [savePreparedInlineMessage API method](../methods/savePreparedInlineMessage.md)

## Event Handlers

You can listen for InlineQueryResult events using:

```typescript
// Type-specific handler
bot.onInlineQueryResult(async (inlinequeryresult: InlineQueryResult) => {
  console.log('Received:', inlinequeryresult);
  // Use fluent methods
  await inlinequeryresult.answerInlineQuery(...);
});

// Generic handler
bot.on('inlinequeryresult', async (data: InlineQueryResult) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResult).
