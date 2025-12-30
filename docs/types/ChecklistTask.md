# ChecklistTask

Describes a task in a checklist.

## Fields

| Name            | Type              | Required | Description                                                                                            |
| :-------------- | :---------------- | :------: | :----------------------------------------------------------------------------------------------------- |
| id              | `number`          |   Yes    | Unique identifier of the task                                                                          |
| text            | `string`          |   Yes    | Text of the task                                                                                       |
| textEntities    | `MessageEntity[]` |    No    | Optional. Special entities that appear in the task text                                                |
| completedByUser | `User`            |    No    | Optional. User that completed the task; omitted if the task wasn't completed                           |
| completionDate  | `number`          |    No    | Optional. Point in time \(Unix timestamp\) when the task was completed; 0 if the task wasn't completed |

## Event Handlers

You can listen for ChecklistTask events using:

```typescript
// Type-specific handler
bot.onChecklistTask(async (checklisttask: ChecklistTask) => {
  console.log('Received:', checklisttask);
});

// Generic handler
bot.on('checklisttask', async (data: ChecklistTask) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChecklistTask).
