# ChecklistTasksDone

Describes a service message about checklist tasks marked as done or not done.

## Fields

| Name                   | Type       | Required | Description                                                                                                                                                                                                  |
| :--------------------- | :--------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| checklistMessage       | `Message`  |    No    | Optional. Message containing the checklist whose tasks were marked as done or not done. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. |
| markedAsDoneTaskIds    | `number[]` |    No    | Optional. Identifiers of the tasks that were marked as done                                                                                                                                                  |
| markedAsNotDoneTaskIds | `number[]` |    No    | Optional. Identifiers of the tasks that were marked as not done                                                                                                                                              |

## Event Handlers

You can listen for ChecklistTasksDone events using:

```typescript
// Type-specific handler
bot.onChecklistTasksDone(async (checklisttasksdone: ChecklistTasksDone) => {
  console.log('Received:', checklisttasksdone);
});

// Generic handler
bot.on('checklisttasksdone', async (data: ChecklistTasksDone) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChecklistTasksDone).
