# Checklist

Describes a checklist.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| title | `string` | Yes | Title of the checklist |
| titleEntities | `MessageEntity[]` | No | Optional. Special entities that appear in the checklist title |
| tasks | `ChecklistTask[]` | Yes | List of tasks in the checklist |
| othersCanAddTasks | `boolean` | No | Optional. True, if users other than the creator of the list can add tasks to the list |
| othersCanMarkTasksAsDone | `boolean` | No | Optional. True, if users other than the creator of the list can mark tasks as done or not done |

## Fluent Methods

The `Checklist` class has the following fluent methods that automatically inject contextual parameters:

### sendChecklist

Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection on behalf of which the message will be sent |
| `chatId` | `number` | Yes | Unique identifier for the target chat |
| `checklist` | `InputChecklist` | Yes | A JSON-serialized object for the checklist to send |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message |
| `replyParameters` | `ReplyParameters` | No | A JSON-serialized object for description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard |

**Usage examples:**

1. Basic usage:

```typescript
const checklist = new Checklist(rawData, bot);
await checklist.sendChecklist({
  businessConnectionId: "example text",
  chatId: 123,
});
```

2. In an event handler:

```typescript
bot.onChecklist(async (checklist: Checklist) => {
  // Auto-fills parameters from the checklist instance
  await checklist.sendChecklist({ businessConnectionId: "Response" });
});
```

**See also:** [sendChecklist API method](../methods/sendChecklist.md)

### editMessageChecklist

Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection on behalf of which the message will be sent |
| `chatId` | `number` | Yes | Unique identifier for the target chat |
| `messageId` | `number` | Yes | Unique identifier for the target message |
| `checklist` | `InputChecklist` | Yes | A JSON-serialized object for the new checklist |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for the new inline keyboard for the message |

**Usage examples:**

1. Basic usage:

```typescript
const checklist = new Checklist(rawData, bot);
await checklist.editMessageChecklist({
  businessConnectionId: "example text",
  chatId: 123,
});
```

2. In an event handler:

```typescript
bot.onChecklist(async (checklist: Checklist) => {
  // Auto-fills parameters from the checklist instance
  await checklist.editMessageChecklist({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageChecklist API method](../methods/editMessageChecklist.md)


## Event Handlers

You can listen for Checklist events using:

```typescript
// Type-specific handler
bot.onChecklist(async (checklist: Checklist) => {
  console.log('Received:', checklist);
  // Use fluent methods
  await checklist.sendChecklist(...);
});

// Generic handler
bot.on('checklist', async (data: Checklist) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Checklist).
