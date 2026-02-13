# ForumTopic

This object represents a forum topic.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| messageThreadId | `number` | Yes | Unique identifier of the forum topic |
| name | `string` | Yes | Name of the topic |
| iconColor | `number` | Yes | Color of the topic icon in RGB format |
| iconCustomEmojiId | `string` | No | Optional. Unique identifier of the custom emoji shown as the topic icon |
| isNameImplicit | `boolean` | No | Optional. True, if the name of the topic wasn't specified explicitly by its creator and likely needs to be changed by the bot |

## Fluent Methods

The `ForumTopic` class has the following fluent methods that automatically inject contextual parameters:

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `iconCustomEmojiId` | `this.iconCustomEmojiId` | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `name` | `string` | Yes | Topic name, 1-128 characters |
| `iconColor` | `number` | No | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.getForumTopicIconStickers(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### createForumTopic

Use this method to create a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator right. Returns information about the created topic as a ForumTopic object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `iconCustomEmojiId` | `this.iconCustomEmojiId` | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `name` | `string` | Yes | Topic name, 1-128 characters |
| `iconColor` | `number` | No | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.createForumTopic(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.createForumTopic();
});
```

**See also:** [createForumTopic API method](../methods/createForumTopic.md)

### editForumTopic

Use this method to edit name and icon of a topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |
| `iconCustomEmojiId` | `this.iconCustomEmojiId` | New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `name` | `string` | No | New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.editForumTopic(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.editForumTopic();
});
```

**See also:** [editForumTopic API method](../methods/editForumTopic.md)

### closeForumTopic

Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.closeForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.closeForumTopic();
});
```

**See also:** [closeForumTopic API method](../methods/closeForumTopic.md)

### reopenForumTopic

Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.reopenForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.reopenForumTopic();
});
```

**See also:** [reopenForumTopic API method](../methods/reopenForumTopic.md)

### deleteForumTopic

Use this method to delete a forum topic along with all its messages in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can\_delete\_messages administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.deleteForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.deleteForumTopic();
});
```

**See also:** [deleteForumTopic API method](../methods/deleteForumTopic.md)

### unpinAllForumTopicMessages

Use this method to clear the list of pinned messages in a forum topic in a forum supergroup chat or a private chat with a user. In the case of a supergroup chat the bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.unpinAllForumTopicMessages(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.unpinAllForumTopicMessages();
});
```

**See also:** [unpinAllForumTopicMessages API method](../methods/unpinAllForumTopicMessages.md)

### editGeneralForumTopic

Use this method to edit the name of the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `name` | `string` | Yes | New topic name, 1-128 characters |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.editGeneralForumTopic(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.editGeneralForumTopic();
});
```

**See also:** [editGeneralForumTopic API method](../methods/editGeneralForumTopic.md)

### closeGeneralForumTopic

Use this method to close an open &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.closeGeneralForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.closeGeneralForumTopic();
});
```

**See also:** [closeGeneralForumTopic API method](../methods/closeGeneralForumTopic.md)

### reopenGeneralForumTopic

Use this method to reopen a closed &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.reopenGeneralForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.reopenGeneralForumTopic();
});
```

**See also:** [reopenGeneralForumTopic API method](../methods/reopenGeneralForumTopic.md)

### hideGeneralForumTopic

Use this method to hide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.hideGeneralForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.hideGeneralForumTopic();
});
```

**See also:** [hideGeneralForumTopic API method](../methods/hideGeneralForumTopic.md)

### unhideGeneralForumTopic

Use this method to unhide the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.unhideGeneralForumTopic(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.unhideGeneralForumTopic();
});
```

**See also:** [unhideGeneralForumTopic API method](../methods/unhideGeneralForumTopic.md)

### unpinAllGeneralForumTopicMessages

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopic = new ForumTopic(rawData, bot);
await forumtopic.unpinAllGeneralForumTopicMessages(
  123,
);
```

2. In an event handler:

```typescript
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  // Auto-fills parameters from the forumtopic instance
  await forumtopic.unpinAllGeneralForumTopicMessages();
});
```

**See also:** [unpinAllGeneralForumTopicMessages API method](../methods/unpinAllGeneralForumTopicMessages.md)


## Event Handlers

You can listen for ForumTopic events using:

```typescript
// Type-specific handler
bot.onForumTopic(async (forumtopic: ForumTopic) => {
  console.log('Received:', forumtopic);
  // Use fluent methods
  await forumtopic.getForumTopicIconStickers(...);
});

// Generic handler
bot.on('forumtopic', async (data: ForumTopic) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ForumTopic).
