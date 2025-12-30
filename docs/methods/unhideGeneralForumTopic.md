# unhideGeneralForumTopic

Use this method to unhide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### ForumTopic (13 methods)

**Available methods:** `getForumTopicIconStickers`, `createForumTopic`, `editForumTopic`, `closeForumTopic`, `reopenForumTopic`, `deleteForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `closeGeneralForumTopic`, `reopenGeneralForumTopic`, `hideGeneralForumTopic`, `unhideGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`

[View ForumTopic documentation with fluent methods](../types/ForumTopic.md)

## Parameters

| Parameter | Type                 | Required | Description                                                                                                      |
| :-------- | :------------------- | :------: | :--------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

## Usage Example

```typescript
// When you already have a ForumTopic instance
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  await forumtopic.unhideGeneralForumTopic();
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

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#unhideGeneralForumTopic).
