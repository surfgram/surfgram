# PollOptionDeleted

Describes a service message about an option deleted from a poll.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| pollMessage | `MaybeInaccessibleMessage` | No | Optional. Message containing the poll from which the option was deleted, if known. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply. |
| optionPersistentId | `string` | Yes | Unique identifier of the deleted option |
| optionText | `string` | Yes | Option text |
| optionTextEntities | `MessageEntity[]` | No | Optional. Special entities that appear in the option\_text |


## Event Handlers

You can listen for PollOptionDeleted events using:

```typescript
// Type-specific handler
bot.onPollOptionDeleted(async (polloptiondeleted: PollOptionDeleted) => {
  console.log('Received:', polloptiondeleted);
});

// Generic handler
bot.on('polloptiondeleted', async (data: PollOptionDeleted) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PollOptionDeleted).
