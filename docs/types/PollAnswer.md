# PollAnswer

This object represents an answer of a user in a non-anonymous poll.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| pollId | `string` | Yes | Unique poll identifier |
| voterChat | `Chat` | No | Optional. The chat that changed the answer to the poll, if the voter is anonymous |
| user | `User` | No | Optional. The user that changed the answer to the poll, if the voter isn't anonymous |
| optionIds | `number[]` | Yes | 0-based identifiers of chosen answer options. May be empty if the vote was retracted. |


## Event Handlers

You can listen for PollAnswer events using:

```typescript
// Type-specific handler
bot.onPollAnswer(async (pollanswer: PollAnswer) => {
  console.log('Received:', pollanswer);
});

// Generic handler
bot.on('pollanswer', async (data: PollAnswer) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PollAnswer).
