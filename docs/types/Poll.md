# Poll

This object contains information about a poll.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Unique poll identifier |
| question | `string` | Yes | Poll question, 1-300 characters |
| questionEntities | `MessageEntity[]` | No | Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions |
| options | `PollOption[]` | Yes | List of poll options |
| totalVoterCount | `number` | Yes | Total number of users that voted in the poll |
| isClosed | `boolean` | Yes | True, if the poll is closed |
| isAnonymous | `boolean` | Yes | True, if the poll is anonymous |
| type | `string` | Yes | Poll type, currently can be “regular” or “quiz” |
| allowsMultipleAnswers | `boolean` | Yes | True, if the poll allows multiple answers |
| allowsRevoting | `boolean` | Yes | True, if the poll allows to change the chosen answer options |
| membersOnly | `boolean` | Yes | True if voting is limited to users who have been members of the chat where the poll was originally sent for more than 24 hours |
| countryCodes | `string[]` | No | Optional. A list of two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which users can vote in the poll. The country code “FT” is used for users with anonymous numbers. If omitted, then users from any country can participate in the poll. |
| correctOptionIds | `number[]` | No | Optional. Array of 0-based identifiers of the correct answer options. Available only for polls in quiz mode which are closed or were sent \(not forwarded\) by the bot or to the private chat with the bot. |
| explanation | `string` | No | Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters |
| explanationEntities | `MessageEntity[]` | No | Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation |
| explanationMedia | `PollMedia` | No | Optional. Media added to the quiz explanation |
| openPeriod | `number` | No | Optional. Amount of time in seconds the poll will be active after creation |
| closeDate | `number` | No | Optional. Point in time \(Unix timestamp\) when the poll will be automatically closed |
| description | `string` | No | Optional. Description of the poll; for polls inside the Message object only |
| descriptionEntities | `MessageEntity[]` | No | Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the description |
| media | `PollMedia` | No | Optional. Media added to the poll description; for polls inside the Message object only |

## Fluent Methods

The `Poll` class has the following fluent methods that automatically inject contextual parameters:

### sendPoll

Use this method to send a native poll. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target bot, supergroup or channel in the format @username. Polls can't be sent to channel direct messages chats. |
| `question` | `string` | Yes | Poll question, 1-300 characters |
| `options` | `InputPollOption[]` | Yes | A JSON-serialized list of 1-12 answer options |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `questionParseMode` | `string` | No | Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed. |
| `questionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question\_parse\_mode. |
| `isAnonymous` | `boolean` | No | True, if the poll needs to be anonymous, defaults to True |
| `type` | `string` | No | Poll type, “quiz” or “regular”, defaults to “regular” |
| `allowsMultipleAnswers` | `boolean` | No | Pass True if the poll allows multiple answers, defaults to False |
| `allowsRevoting` | `boolean` | No | Pass True if the poll allows to change chosen answer options, defaults to False for quizzes and to True for regular polls |
| `shuffleOptions` | `boolean` | No | Pass True if the poll options must be shown in random order |
| `allowAddingOptions` | `boolean` | No | Pass True if answer options can be added to the poll after creation; not supported for anonymous polls and quizzes |
| `hideResultsUntilCloses` | `boolean` | No | Pass True if poll results must be shown only after the poll closes |
| `membersOnly` | `boolean` | No | Pass True if voting is limited to users who have been members of the chat where the poll is being sent for more than 24 hours; for channel chats only |
| `countryCodes` | `string[]` | No | A JSON-serialized list of 0-12 two-letter ISO 3166-1 alpha-2 country codes indicating the countries from which users can vote in the poll; for channel chats only. Use “FT” as a country code to allow users with anonymous numbers to vote. If omitted or empty, then users from any country can participate in the poll. |
| `correctOptionIds` | `number[]` | No | A JSON-serialized list of monotonically increasing 0-based identifiers of the correct answer options, required for polls in quiz mode |
| `explanation` | `string` | No | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing |
| `explanationParseMode` | `string` | No | Mode for parsing entities in the explanation. See formatting options for more details. |
| `explanationEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation\_parse\_mode. |
| `explanationMedia` | `InputPollMedia` | No | Media added to the quiz explanation |
| `openPeriod` | `number` | No | Amount of time in seconds the poll will be active after creation, 5-2628000. Can't be used together with close\_date. |
| `closeDate` | `number` | No | Point in time \(Unix timestamp\) when the poll will be automatically closed. Must be at least 5 and no more than 2628000 seconds in the future. Can't be used together with open\_period. |
| `isClosed` | `boolean` | No | Pass True if the poll needs to be immediately closed. This can be useful for poll preview. |
| `description` | `string` | No | Description of the poll to be sent, 0-1024 characters after entities parsing |
| `descriptionParseMode` | `string` | No | Mode for parsing entities in the poll description. See formatting options for more details. |
| `descriptionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll description, which can be specified instead of description\_parse\_mode |
| `media` | `InputPollMedia` | No | Media added to the poll description |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance. |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |

**Usage examples:**

1. Basic usage:

```typescript
const poll = new Poll(rawData, bot);
await poll.sendPoll({
  chatId: 123,
  question: "example text",
});
```

2. In an event handler:

```typescript
bot.onPoll(async (poll: Poll) => {
  // Auto-fills parameters from the poll instance
  await poll.sendPoll({ chatId: "Response" });
});
```

**See also:** [sendPoll API method](../methods/sendPoll.md)

### stopPoll

Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target bot, supergroup or channel in the format @username |
| `messageId` | `number` | Yes | Identifier of the original message with the poll |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new message inline keyboard |

**Usage examples:**

1. Basic usage:

```typescript
const poll = new Poll(rawData, bot);
await poll.stopPoll(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onPoll(async (poll: Poll) => {
  // Auto-fills parameters from the poll instance
  await poll.stopPoll();
});
```

**See also:** [stopPoll API method](../methods/stopPoll.md)


## Event Handlers

You can listen for Poll events using:

```typescript
// Type-specific handler
bot.onPoll(async (poll: Poll) => {
  console.log('Received:', poll);
  // Use fluent methods
  await poll.sendPoll(...);
});

// Generic handler
bot.on('poll', async (data: Poll) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Poll).
