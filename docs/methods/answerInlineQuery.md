# answerInlineQuery

Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.

## Fluent Usage

This method is available as a fluent method on the following types:

### InlineQuery (1 methods)

**Available methods:** `answerInlineQuery`

**Auto-filled parameters:** inlineQueryId

[View InlineQuery documentation with fluent methods](../types/InlineQuery.md)

### InlineQueryResultsButton (1 methods)

**Available methods:** `answerInlineQuery`

**Auto-filled parameters:** inlineQueryId

[View InlineQueryResultsButton documentation with fluent methods](../types/InlineQueryResultsButton.md)

### InlineQueryResult (3 methods)

**Available methods:** `answerInlineQuery`, `answerWebAppQuery`, `savePreparedInlineMessage`

**Auto-filled parameters:** inlineQueryId

[View InlineQueryResult documentation with fluent methods](../types/InlineQueryResult.md)

## Parameters

| Parameter       | Type                       | Required | Description                                                                                                                                                                                                                        |
| :-------------- | :------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inlineQueryId` | `string`                   |   Yes    | Unique identifier for the answered query                                                                                                                                                                                           |
| `results`       | `InlineQueryResult[]`      |   Yes    | A JSON-serialized array of results for the inline query                                                                                                                                                                            |
| `cacheTime`     | `number`                   |    No    | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.                                                                                                            |
| `isPersonal`    | `boolean`                  |    No    | Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.                                                             |
| `nextOffset`    | `string`                   |    No    | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. |
| `button`        | `InlineQueryResultsButton` |    No    | A JSON-serialized object describing a button to be shown above inline query results                                                                                                                                                |

## Usage Example

```typescript
// When you already have a InlineQuery instance
bot.onInlineQuery(async (inlinequery: InlineQuery) => {
  await inlinequery.answerInlineQuery({});
});

// With filtering
bot.onInlineQuery(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerInlineQuery).
