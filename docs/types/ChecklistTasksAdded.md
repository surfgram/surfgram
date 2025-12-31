# ChecklistTasksAdded

Describes a service message about tasks added to a checklist.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| checklistMessage | `Message` | No | Optional. Message containing the checklist to which the tasks were added. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply. |
| tasks | `ChecklistTask[]` | Yes | List of tasks added to the checklist |


## Event Handlers

You can listen for ChecklistTasksAdded events using:

```typescript
// Type-specific handler
bot.onChecklistTasksAdded(async (checklisttasksadded: ChecklistTasksAdded) => {
  console.log('Received:', checklisttasksadded);
});

// Generic handler
bot.on('checklisttasksadded', async (data: ChecklistTasksAdded) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChecklistTasksAdded).
