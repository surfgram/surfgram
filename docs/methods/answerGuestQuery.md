# answerGuestQuery

Use this method to reply to a received guest message. On success, a SentGuestMessage object is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### InlineQueryResult (4 methods)

**Available methods:** `answerGuestQuery`, `answerWebAppQuery`, `savePreparedInlineMessage`, `answerInlineQuery`


[View InlineQueryResult documentation with fluent methods](../types/InlineQueryResult.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `guestQueryId` | `string` | Yes | Unique identifier for the query to be answered |
| `result` | `InlineQueryResult` | Yes | A JSON-serialized object describing the message to be sent |


## Usage Example

```typescript
// When you already have a InlineQueryResult instance
bot.onInlineQueryResult(async (inlinequeryresult: InlineQueryResult) => {
  await inlinequeryresult.answerGuestQuery();
});

// With filtering
bot.onInlineQueryResult((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerGuestQuery).
