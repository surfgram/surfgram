# PollOptionAdded

Describes a service message about an option added to a poll.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| pollMessage | `MaybeInaccessibleMessage` | No | Optional. Message containing the poll to which the option was added, if known. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply. |
| optionPersistentId | `string` | Yes | Unique identifier of the added option |
| optionText | `string` | Yes | Option text |
| optionTextEntities | `MessageEntity[]` | No | Optional. Special entities that appear in the option\_text |


## Event Handlers

You can listen for PollOptionAdded events using:

```typescript
// Type-specific handler
bot.onPollOptionAdded(async (polloptionadded: PollOptionAdded) => {
  console.log('Received:', polloptionadded);
});

// Generic handler
bot.on('polloptionadded', async (data: PollOptionAdded) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PollOptionAdded).
