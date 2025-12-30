# createForumTopic

Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.

## Fluent Usage

This method is available as a fluent method on the following types:

### ForumTopic (13 methods)

**Available methods:** `getForumTopicIconStickers`, `createForumTopic`, `editForumTopic`, `closeForumTopic`, `reopenForumTopic`, `deleteForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `closeGeneralForumTopic`, `reopenGeneralForumTopic`, `hideGeneralForumTopic`, `unhideGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`

**Auto-filled parameters:** iconCustomEmojiId

[View ForumTopic documentation with fluent methods](../types/ForumTopic.md)

## Parameters

| Parameter           | Type                 | Required | Description                                                                                                                                                                                                |
| :------------------ | :------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`            | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)                                                                                           |
| `name`              | `string`             |   Yes    | Topic name, 1-128 characters                                                                                                                                                                               |
| `iconColor`         | `number`             |    No    | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |
| `iconCustomEmojiId` | `string`             |    No    | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.                                                                  |

## Usage Example

```typescript
// When you already have a ForumTopic instance
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  await forumtopic.createForumTopic();
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

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#createForumTopic).
