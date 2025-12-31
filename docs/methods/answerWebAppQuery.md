# answerWebAppQuery

Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### InlineQueryResult (3 methods)

**Available methods:** `answerInlineQuery`, `answerWebAppQuery`, `savePreparedInlineMessage`


[View InlineQueryResult documentation with fluent methods](../types/InlineQueryResult.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `webAppQueryId` | `string` | Yes | Unique identifier for the query to be answered |
| `result` | `InlineQueryResult` | Yes | A JSON-serialized object describing the message to be sent |


## Usage Example

```typescript
// When you already have a InlineQueryResult instance
bot.onInlineQueryResult(async (inlinequeryresult: InlineQueryResult) => {
  await inlinequeryresult.answerWebAppQuery();
});

// With filtering
bot.onInlineQueryResult((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerWebAppQuery).
