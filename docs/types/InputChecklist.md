# InputChecklist

Describes a checklist to create.

## Fields

| Name                     | Type                   | Required | Description                                                                                                                                                                                                        |
| :----------------------- | :--------------------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title                    | `string`               |   Yes    | Title of the checklist; 1-255 characters after entities parsing                                                                                                                                                    |
| parseMode                | `string`               |    No    | Optional. Mode for parsing entities in the title. See formatting options for more details.                                                                                                                         |
| titleEntities            | `MessageEntity[]`      |    No    | Optional. List of special entities that appear in the title, which can be specified instead of parse_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom_emoji entities are allowed. |
| tasks                    | `InputChecklistTask[]` |   Yes    | List of 1-30 tasks in the checklist                                                                                                                                                                                |
| othersCanAddTasks        | `boolean`              |    No    | Optional. Pass True if other users can add tasks to the checklist                                                                                                                                                  |
| othersCanMarkTasksAsDone | `boolean`              |    No    | Optional. Pass True if other users can mark tasks as done or not done in the checklist                                                                                                                             |

## Fluent Methods

The `InputChecklist` class has the following fluent methods that automatically inject contextual parameters:

### sendChecklist

Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.

**Required parameters:**

| Parameter              | Type                   | Required | Description                                                                              |
| :--------------------- | :--------------------- | :------: | :--------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`               |   Yes    | Unique identifier of the business connection on behalf of which the message will be sent |
| `chatId`               | `number`               |   Yes    | Unique identifier for the target chat                                                    |
| `checklist`            | `InputChecklist`       |   Yes    | A JSON-serialized object for the checklist to send                                       |
| `disableNotification`  | `boolean`              |    No    | Sends the message silently. Users will receive a notification with no sound.             |
| `protectContent`       | `boolean`              |    No    | Protects the contents of the sent message from forwarding and saving                     |
| `messageEffectId`      | `string`               |    No    | Unique identifier of the message effect to be added to the message                       |
| `replyParameters`      | `ReplyParameters`      |    No    | A JSON-serialized object for description of the message to reply to                      |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for an inline keyboard                                          |

**Usage examples:**

1. Basic usage:

```typescript
const inputchecklist = new InputChecklist(rawData, bot);
await inputchecklist.sendChecklist({
  businessConnectionId: 'example text',
  chatId: 123,
});
```

2. In an event handler:

```typescript
bot.onInputChecklist(async (inputchecklist: InputChecklist) => {
  // Auto-fills parameters from the inputchecklist instance
  await inputchecklist.sendChecklist({ businessConnectionId: 'Response' });
});
```

**See also:** [sendChecklist API method](../methods/sendChecklist.md)

### editMessageChecklist

Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.

**Required parameters:**

| Parameter              | Type                   | Required | Description                                                                              |
| :--------------------- | :--------------------- | :------: | :--------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`               |   Yes    | Unique identifier of the business connection on behalf of which the message will be sent |
| `chatId`               | `number`               |   Yes    | Unique identifier for the target chat                                                    |
| `messageId`            | `number`               |   Yes    | Unique identifier for the target message                                                 |
| `checklist`            | `InputChecklist`       |   Yes    | A JSON-serialized object for the new checklist                                           |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for the new inline keyboard for the message                     |

**Usage examples:**

1. Basic usage:

```typescript
const inputchecklist = new InputChecklist(rawData, bot);
await inputchecklist.editMessageChecklist({
  businessConnectionId: 'example text',
  chatId: 123,
});
```

2. In an event handler:

```typescript
bot.onInputChecklist(async (inputchecklist: InputChecklist) => {
  // Auto-fills parameters from the inputchecklist instance
  await inputchecklist.editMessageChecklist({ businessConnectionId: 'Response' });
});
```

**See also:** [editMessageChecklist API method](../methods/editMessageChecklist.md)

## Event Handlers

You can listen for InputChecklist events using:

```typescript
// Type-specific handler
bot.onInputChecklist(async (inputchecklist: InputChecklist) => {
  console.log('Received:', inputchecklist);
  // Use fluent methods
  await inputchecklist.sendChecklist(...);
});

// Generic handler
bot.on('inputchecklist', async (data: InputChecklist) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputChecklist).
