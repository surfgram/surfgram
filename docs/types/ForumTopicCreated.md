# ForumTopicCreated

This object represents a service message about a new forum topic created in the chat.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| name | `string` | Yes | Name of the topic |
| iconColor | `number` | Yes | Color of the topic icon in RGB format |
| iconCustomEmojiId | `string` | No | Optional. Unique identifier of the custom emoji shown as the topic icon |
| isNameImplicit | `boolean` | No | Optional. True, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot |


## Event Handlers

You can listen for ForumTopicCreated events using:

```typescript
// Type-specific handler
bot.onForumTopicCreated(async (forumtopiccreated: ForumTopicCreated) => {
  console.log('Received:', forumtopiccreated);
});

// Generic handler
bot.on('forumtopiccreated', async (data: ForumTopicCreated) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ForumTopicCreated).
