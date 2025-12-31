# deleteForumTopic

Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### ForumTopic (13 methods)

**Available methods:** `getForumTopicIconStickers`, `createForumTopic`, `editForumTopic`, `closeForumTopic`, `reopenForumTopic`, `deleteForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `closeGeneralForumTopic`, `reopenGeneralForumTopic`, `hideGeneralForumTopic`, `unhideGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`

**Auto-filled parameters:** messageThreadId

[View ForumTopic documentation with fluent methods](../types/ForumTopic.md)

## Parameters

| Parameter         | Type                 | Required | Description                                                                                                      |
| :---------------- | :------------------- | :------: | :--------------------------------------------------------------------------------------------------------------- |
| `chatId`          | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `messageThreadId` | `number`             |   Yes    | Unique identifier for the target message thread of the forum topic                                               |

## Usage Example

```typescript
// When you already have a ForumTopic instance
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  await forumtopic.deleteForumTopic();
});

// With filtering
bot.onForumTopic(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#deleteForumTopic).
