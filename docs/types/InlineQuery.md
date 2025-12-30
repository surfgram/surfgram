# InlineQuery

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

## Fields

| Name     | Type       | Required | Description                                                                                                                                                                                                                                                                                                                                        |
| :------- | :--------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | `string`   |   Yes    | Unique identifier for this query                                                                                                                                                                                                                                                                                                                   |
| from     | `User`     |   Yes    | Sender                                                                                                                                                                                                                                                                                                                                             |
| query    | `string`   |   Yes    | Text of the query \(up to 256 characters\)                                                                                                                                                                                                                                                                                                         |
| offset   | `string`   |   Yes    | Offset of the results to be returned, can be controlled by the bot                                                                                                                                                                                                                                                                                 |
| chatType | `string`   |    No    | Optional. Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat |
| location | `Location` |    No    | Optional. Sender location, only for bots that request user location                                                                                                                                                                                                                                                                                |

## Fluent Methods

The `InlineQuery` class has the following fluent methods that automatically inject contextual parameters:

### answerInlineQuery

Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.

**Auto-filled parameters:**

| Parameter       | Source    | Description                              |
| :-------------- | :-------- | :--------------------------------------- |
| `inlineQueryId` | `this.id` | Unique identifier for the answered query |

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
const inlinequery = new InlineQuery(rawData, bot);
await inlinequery.answerInlineQuery({
  results: [{} as any],
  cacheTime: 123,
});
```

2. In an event handler:

```typescript
bot.onInlineQuery(async (inlinequery: InlineQuery) => {
  // Auto-fills parameters from the inlinequery instance
  await inlinequery.answerInlineQuery({ nextOffset: 'Response' });
});
```

**See also:** [answerInlineQuery API method](../methods/answerInlineQuery.md)

## Event Handlers

You can listen for InlineQuery events using:

```typescript
// Type-specific handler
bot.onInlineQuery(async (inlinequery: InlineQuery) => {
  console.log('Received:', inlinequery);
  // Use fluent methods
  await inlinequery.answerInlineQuery(...);
});

// Generic handler
bot.on('inlinequery', async (data: InlineQuery) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQuery).
