# Poll

This object contains information about a poll.

## Fields

| Name                  | Type              | Required | Description                                                                                                                                                                                           |
| :-------------------- | :---------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                    | `string`          |   Yes    | Unique poll identifier                                                                                                                                                                                |
| question              | `string`          |   Yes    | Poll question, 1-300 characters                                                                                                                                                                       |
| questionEntities      | `MessageEntity[]` |    No    | Optional. Special entities that appear in the question. Currently, only custom emoji entities are allowed in poll questions                                                                           |
| options               | `PollOption[]`    |   Yes    | List of poll options                                                                                                                                                                                  |
| totalVoterCount       | `number`          |   Yes    | Total number of users that voted in the poll                                                                                                                                                          |
| isClosed              | `boolean`         |   Yes    | True, if the poll is closed                                                                                                                                                                           |
| isAnonymous           | `boolean`         |   Yes    | True, if the poll is anonymous                                                                                                                                                                        |
| type                  | `string`          |   Yes    | Poll type, currently can be “regular” or “quiz”                                                                                                                                                       |
| allowsMultipleAnswers | `boolean`         |   Yes    | True, if the poll allows multiple answers                                                                                                                                                             |
| correctOptionId       | `number`          |    No    | Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent \(not forwarded\) by the bot or to the private chat with the bot. |
| explanation           | `string`          |    No    | Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters                                                                  |
| explanationEntities   | `MessageEntity[]` |    No    | Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation                                                                                                    |
| openPeriod            | `number`          |    No    | Optional. Amount of time in seconds the poll will be active after creation                                                                                                                            |
| closeDate             | `number`          |    No    | Optional. Point in time \(Unix timestamp\) when the poll will be automatically closed                                                                                                                 |

## Fluent Methods

The `Poll` class has the following fluent methods that automatically inject contextual parameters:

### sendPoll

Use this method to send a native poll. On success, the sent Message is returned.

**Required parameters:**

| Parameter               | Type                                                                                     | Required | Description                                                                                                                                                                              |
| :---------------------- | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                | `number` \| `string`                                                                     |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). Polls can't be sent to channel direct messages chats.                        |
| `question`              | `string`                                                                                 |   Yes    | Poll question, 1-300 characters                                                                                                                                                          |
| `options`               | `InputPollOption[]`                                                                      |   Yes    | A JSON-serialized list of 2-12 answer options                                                                                                                                            |
| `businessConnectionId`  | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                 |
| `messageThreadId`       | `number`                                                                                 |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                                                       |
| `questionParseMode`     | `string`                                                                                 |    No    | Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed                                                    |
| `questionEntities`      | `MessageEntity[]`                                                                        |    No    | A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question_parse_mode                                                          |
| `isAnonymous`           | `boolean`                                                                                |    No    | True, if the poll needs to be anonymous, defaults to True                                                                                                                                |
| `type`                  | `string`                                                                                 |    No    | Poll type, “quiz” or “regular”, defaults to “regular”                                                                                                                                    |
| `allowsMultipleAnswers` | `boolean`                                                                                |    No    | True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False                                                                                             |
| `correctOptionId`       | `number`                                                                                 |    No    | 0-based identifier of the correct answer option, required for polls in quiz mode                                                                                                         |
| `explanation`           | `string`                                                                                 |    No    | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing              |
| `explanationParseMode`  | `string`                                                                                 |    No    | Mode for parsing entities in the explanation. See formatting options for more details.                                                                                                   |
| `explanationEntities`   | `MessageEntity[]`                                                                        |    No    | A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode                                                    |
| `openPeriod`            | `number`                                                                                 |    No    | Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.                                                                         |
| `closeDate`             | `number`                                                                                 |    No    | Point in time \(Unix timestamp\) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.     |
| `isClosed`              | `boolean`                                                                                |    No    | Pass True if the poll needs to be immediately closed. This can be useful for poll preview.                                                                                               |
| `disableNotification`   | `boolean`                                                                                |    No    | Sends the message silently. Users will receive a notification with no sound.                                                                                                             |
| `protectContent`        | `boolean`                                                                                |    No    | Protects the contents of the sent message from forwarding and saving                                                                                                                     |
| `allowPaidBroadcast`    | `boolean`                                                                                |    No    | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId`       | `string`                                                                                 |    No    | Unique identifier of the message effect to be added to the message; for private chats only                                                                                               |
| `replyParameters`       | `ReplyParameters`                                                                        |    No    | Description of the message to reply to                                                                                                                                                   |
| `replyMarkup`           | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` |    No    | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user          |

**Usage examples:**

1. Basic usage:

```typescript
const poll = new Poll(rawData, bot);
await poll.sendPoll({
  chatId: 123,
  question: 'example text',
});
```

2. In an event handler:

```typescript
bot.onPoll(async (poll: Poll) => {
  // Auto-fills parameters from the poll instance
  await poll.sendPoll({ chatId: 'Response' });
});
```

**See also:** [sendPoll API method](../methods/sendPoll.md)

### stopPoll

Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.

**Required parameters:**

| Parameter              | Type                   | Required | Description                                                                                                |
| :--------------------- | :--------------------- | :------: | :--------------------------------------------------------------------------------------------------------- |
| `chatId`               | `number` \| `string`   |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `messageId`            | `number`               |   Yes    | Identifier of the original message with the poll                                                           |
| `businessConnectionId` | `string`               |    No    | Unique identifier of the business connection on behalf of which the message to be edited was sent          |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for a new message inline keyboard.                                                |

**Usage examples:**

1. Basic usage:

```typescript
const poll = new Poll(rawData, bot);
await poll.stopPoll(123, 123);
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
