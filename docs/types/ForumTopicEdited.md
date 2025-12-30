# ForumTopicEdited

This object represents a service message about an edited forum topic.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| name | `string` | No | Optional. New name of the topic, if it was edited |
| iconCustomEmojiId | `string` | No | Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed |


## Event Handlers

You can listen for ForumTopicEdited events using:

```typescript
// Type-specific handler
bot.onForumTopicEdited(async (forumtopicedited: ForumTopicEdited) => {
  console.log('Received:', forumtopicedited);
});

// Generic handler
bot.on('forumtopicedited', async (data: ForumTopicEdited) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ForumTopicEdited).
