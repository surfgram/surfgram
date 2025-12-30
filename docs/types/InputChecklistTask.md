# InputChecklistTask

Describes a task to add to a checklist.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `number` | Yes | Unique identifier of the task; must be positive and unique among all task identifiers currently present in the checklist |
| text | `string` | Yes | Text of the task; 1-100 characters after entities parsing |
| parseMode | `string` | No | Optional. Mode for parsing entities in the text. See formatting options for more details. |
| textEntities | `MessageEntity[]` | No | Optional. List of special entities that appear in the text, which can be specified instead of parse\_mode. Currently, only bold, italic, underline, strikethrough, spoiler, and custom\_emoji entities are allowed. |


## Event Handlers

You can listen for InputChecklistTask events using:

```typescript
// Type-specific handler
bot.onInputChecklistTask(async (inputchecklisttask: InputChecklistTask) => {
  console.log('Received:', inputchecklisttask);
});

// Generic handler
bot.on('inputchecklisttask', async (data: InputChecklistTask) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputChecklistTask).
