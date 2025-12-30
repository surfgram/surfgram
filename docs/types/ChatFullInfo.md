# ChatFullInfo

This object contains full information about a chat.

## Fields

| Name                               | Type                   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------------------------------- | :--------------------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                 | `number`               |   Yes    | Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.                                                                                                        |
| type                               | `string`               |   Yes    | Type of the chat, can be either “private”, “group”, “supergroup” or “channel”                                                                                                                                                                                                                                                                                                                                            |
| title                              | `string`               |    No    | Optional. Title, for supergroups, channels and group chats                                                                                                                                                                                                                                                                                                                                                               |
| username                           | `string`               |    No    | Optional. Username, for private chats, supergroups and channels if available                                                                                                                                                                                                                                                                                                                                             |
| firstName                          | `string`               |    No    | Optional. First name of the other party in a private chat                                                                                                                                                                                                                                                                                                                                                                |
| lastName                           | `string`               |    No    | Optional. Last name of the other party in a private chat                                                                                                                                                                                                                                                                                                                                                                 |
| isForum                            | `boolean`              |    No    | Optional. True, if the supergroup chat is a forum \(has topics enabled\)                                                                                                                                                                                                                                                                                                                                                 |
| isDirectMessages                   | `boolean`              |    No    | Optional. True, if the chat is the direct messages chat of a channel                                                                                                                                                                                                                                                                                                                                                     |
| accentColorId                      | `number`               |   Yes    | Identifier of the accent color for the chat name and backgrounds of the chat photo, reply header, and link preview. See accent colors for more details.                                                                                                                                                                                                                                                                  |
| maxReactionCount                   | `number`               |   Yes    | The maximum number of reactions that can be set on a message in the chat                                                                                                                                                                                                                                                                                                                                                 |
| photo                              | `ChatPhoto`            |    No    | Optional. Chat photo                                                                                                                                                                                                                                                                                                                                                                                                     |
| activeUsernames                    | `string[]`             |    No    | Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels                                                                                                                                                                                                                                                                                                               |
| birthdate                          | `Birthdate`            |    No    | Optional. For private chats, the date of birth of the user                                                                                                                                                                                                                                                                                                                                                               |
| businessIntro                      | `BusinessIntro`        |    No    | Optional. For private chats with business accounts, the intro of the business                                                                                                                                                                                                                                                                                                                                            |
| businessLocation                   | `BusinessLocation`     |    No    | Optional. For private chats with business accounts, the location of the business                                                                                                                                                                                                                                                                                                                                         |
| businessOpeningHours               | `BusinessOpeningHours` |    No    | Optional. For private chats with business accounts, the opening hours of the business                                                                                                                                                                                                                                                                                                                                    |
| personalChat                       | `Chat`                 |    No    | Optional. For private chats, the personal channel of the user                                                                                                                                                                                                                                                                                                                                                            |
| parentChat                         | `Chat`                 |    No    | Optional. Information about the corresponding channel chat; for direct messages chats only                                                                                                                                                                                                                                                                                                                               |
| availableReactions                 | `ReactionType[]`       |    No    | Optional. List of available reactions allowed in the chat. If omitted, then all emoji reactions are allowed.                                                                                                                                                                                                                                                                                                             |
| backgroundCustomEmojiId            | `string`               |    No    | Optional. Custom emoji identifier of the emoji chosen by the chat for the reply header and link preview background                                                                                                                                                                                                                                                                                                       |
| profileAccentColorId               | `number`               |    No    | Optional. Identifier of the accent color for the chat's profile background. See profile accent colors for more details.                                                                                                                                                                                                                                                                                                  |
| profileBackgroundCustomEmojiId     | `string`               |    No    | Optional. Custom emoji identifier of the emoji chosen by the chat for its profile background                                                                                                                                                                                                                                                                                                                             |
| emojiStatusCustomEmojiId           | `string`               |    No    | Optional. Custom emoji identifier of the emoji status of the chat or the other party in a private chat                                                                                                                                                                                                                                                                                                                   |
| emojiStatusExpirationDate          | `number`               |    No    | Optional. Expiration date of the emoji status of the chat or the other party in a private chat, in Unix time, if any                                                                                                                                                                                                                                                                                                     |
| bio                                | `string`               |    No    | Optional. Bio of the other party in a private chat                                                                                                                                                                                                                                                                                                                                                                       |
| hasPrivateForwards                 | `boolean`              |    No    | Optional. True, if privacy settings of the other party in the private chat allows to use tg://user?id=&lt;user_id&gt; links only in chats with the user                                                                                                                                                                                                                                                                  |
| hasRestrictedVoiceAndVideoMessages | `boolean`              |    No    | Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat                                                                                                                                                                                                                                                                                            |
| joinToSendMessages                 | `boolean`              |    No    | Optional. True, if users need to join the supergroup before they can send messages                                                                                                                                                                                                                                                                                                                                       |
| joinByRequest                      | `boolean`              |    No    | Optional. True, if all users directly joining the supergroup without using an invite link need to be approved by supergroup administrators                                                                                                                                                                                                                                                                               |
| description                        | `string`               |    No    | Optional. Description, for groups, supergroups and channel chats                                                                                                                                                                                                                                                                                                                                                         |
| inviteLink                         | `string`               |    No    | Optional. Primary invite link, for groups, supergroups and channel chats                                                                                                                                                                                                                                                                                                                                                 |
| pinnedMessage                      | `Message`              |    No    | Optional. The most recent pinned message \(by sending date\)                                                                                                                                                                                                                                                                                                                                                             |
| permissions                        | `ChatPermissions`      |    No    | Optional. Default chat member permissions, for groups and supergroups                                                                                                                                                                                                                                                                                                                                                    |
| acceptedGiftTypes                  | `AcceptedGiftTypes`    |   Yes    | Information about types of gifts that are accepted by the chat or by the corresponding user for private chats                                                                                                                                                                                                                                                                                                            |
| canSendPaidMedia                   | `boolean`              |    No    | Optional. True, if paid media messages can be sent or forwarded to the channel chat. The field is available only for channel chats.                                                                                                                                                                                                                                                                                      |
| slowModeDelay                      | `number`               |    No    | Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds                                                                                                                                                                                                                                                                                             |
| unrestrictBoostCount               | `number`               |    No    | Optional. For supergroups, the minimum number of boosts that a non-administrator user needs to add in order to ignore slow mode and chat permissions                                                                                                                                                                                                                                                                     |
| messageAutoDeleteTime              | `number`               |    No    | Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds                                                                                                                                                                                                                                                                                                                   |
| hasAggressiveAntiSpamEnabled       | `boolean`              |    No    | Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators.                                                                                                                                                                                                                                                                                        |
| hasHiddenMembers                   | `boolean`              |    No    | Optional. True, if non-administrators can only get the list of bots and administrators in the chat                                                                                                                                                                                                                                                                                                                       |
| hasProtectedContent                | `boolean`              |    No    | Optional. True, if messages from the chat can't be forwarded to other chats                                                                                                                                                                                                                                                                                                                                              |
| hasVisibleHistory                  | `boolean`              |    No    | Optional. True, if new chat members will have access to old messages; available only to chat administrators                                                                                                                                                                                                                                                                                                              |
| stickerSetName                     | `string`               |    No    | Optional. For supergroups, name of the group sticker set                                                                                                                                                                                                                                                                                                                                                                 |
| canSetStickerSet                   | `boolean`              |    No    | Optional. True, if the bot can change the group sticker set                                                                                                                                                                                                                                                                                                                                                              |
| customEmojiStickerSetName          | `string`               |    No    | Optional. For supergroups, the name of the group's custom emoji sticker set. Custom emoji from this set can be used by all users and bots in the group.                                                                                                                                                                                                                                                                  |
| linkedChatId                       | `number`               |    No    | Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. |
| location                           | `ChatLocation`         |    No    | Optional. For supergroups, the location to which the supergroup is connected                                                                                                                                                                                                                                                                                                                                             |

## Fluent Methods

The `ChatFullInfo` class has the following fluent methods that automatically inject contextual parameters:

### getUpdates

Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.

**Required parameters:**

| Parameter        | Type       | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :--------------- | :--------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `offset`         | `number`   |    No    | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.                                                                                                |
| `limit`          | `number`   |    No    | Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `timeout`        | `number`   |    No    | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `allowedUpdates` | `string[]` |    No    | A JSON-serialized list of the update types you want your bot to receive. For example, specify \["message", "edited_channel_post", "callback_query"\] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count \(default\). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getUpdates({
  offset: 123,
  limit: 123,
});
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getUpdates({});
});
```

**See also:** [getUpdates API method](../methods/getUpdates.md)

### getWebhookInfo

Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.

**Required parameters:**

| Parameter                      | Type       | Required | Description                                                                                                                           |
| :----------------------------- | :--------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------ |
| `url`                          | `string`   |   Yes    | Webhook URL, may be empty if webhook is not set up                                                                                    |
| `hasCustomCertificate`         | `boolean`  |   Yes    | True, if a custom certificate was provided for webhook certificate checks                                                             |
| `pendingUpdateCount`           | `number`   |   Yes    | Number of updates awaiting delivery                                                                                                   |
| `ipAddress`                    | `string`   |    No    | Optional. Currently used webhook IP address                                                                                           |
| `lastErrorDate`                | `number`   |    No    | Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook                              |
| `lastErrorMessage`             | `string`   |    No    | Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| `lastSynchronizationErrorDate` | `number`   |    No    | Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters     |
| `maxConnections`               | `number`   |    No    | Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery                             |
| `allowedUpdates`               | `string[]` |    No    | Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat_member                            |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getWebhookInfo({
  url: 'example text',
  hasCustomCertificate: true,
});
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getWebhookInfo({ url: 'Response' });
});
```

**See also:** [getWebhookInfo API method](../methods/getWebhookInfo.md)

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

**Auto-filled parameters:**

| Parameter               | Source                   | Description                                                                                                                          |
| :---------------------- | :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                | `this.personalChat?.id`  | Unique identifier for the target chat or username of the target channel (in the format @channelusername)                             |
| `messageThreadId`       | `this.pinnedMessage?.id` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only                                     |
| `directMessagesTopicId` | `this.pinnedMessage?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter                 | Type                                                                                     | Required | Description                                                                                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                    | `string`                                                                                 |   Yes    | Text of the message to be sent, 1-4096 characters after entities parsing                                                                                                                                                           |
| `businessConnectionId`    | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                                                           |
| `parseMode`               | `string`                                                                                 |    No    | Mode for parsing entities in the message text. See formatting options for more details.                                                                                                                                            |
| `entities`                | `MessageEntity[]`                                                                        |    No    | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode                                                                                                               |
| `linkPreviewOptions`      | `LinkPreviewOptions`                                                                     |    No    | Link preview generation options for the message                                                                                                                                                                                    |
| `disableNotification`     | `boolean`                                                                                |    No    | Sends the message silently. Users will receive a notification with no sound.                                                                                                                                                       |
| `protectContent`          | `boolean`                                                                                |    No    | Protects the contents of the sent message from forwarding and saving                                                                                                                                                               |
| `allowPaidBroadcast`      | `boolean`                                                                                |    No    | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance                                           |
| `messageEffectId`         | `string`                                                                                 |    No    | Unique identifier of the message effect to be added to the message; for private chats only                                                                                                                                         |
| `suggestedPostParameters` | `SuggestedPostParameters`                                                                |    No    | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters`         | `ReplyParameters`                                                                        |    No    | Description of the message to reply to                                                                                                                                                                                             |
| `replyMarkup`             | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` |    No    | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user                                                    |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMe({
  text: 'example text',
  businessConnectionId: 'example text',
});
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMe({ text: 'Response' });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### getUserProfilePhotos

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

**Auto-filled parameters:**

| Parameter | Source              | Description                          |
| :-------- | :------------------ | :----------------------------------- |
| `userId`  | `this.username?.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type     | Required | Description                                                                                      |
| :-------- | :------- | :------: | :----------------------------------------------------------------------------------------------- |
| `offset`  | `number` |    No    | Sequential number of the first photo to be returned. By default, all photos are returned.        |
| `limit`   | `number` |    No    | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getUserProfilePhotos(123, 123);
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getUserProfilePhotos();
});
```

**See also:** [getUserProfilePhotos API method](../methods/getUserProfilePhotos.md)

### getFile

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.

**Required parameters:**

| Parameter | Type     | Required | Description                              |
| :-------- | :------- | :------: | :--------------------------------------- |
| `fileId`  | `string` |   Yes    | File identifier to get information about |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getFile('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getFile();
});
```

**See also:** [getFile API method](../methods/getFile.md)

### getChat

Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                                            |
| :-------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getChat();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getChat();
});
```

**See also:** [getChat API method](../methods/getChat.md)

### getChatAdministrators

Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                                            |
| :-------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getChatAdministrators();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getChatAdministrators();
});
```

**See also:** [getChatAdministrators API method](../methods/getChatAdministrators.md)

### getChatMemberCount

Use this method to get the number of members in a chat. Returns Int on success.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                                            |
| :-------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getChatMemberCount();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getChatMemberCount();
});
```

**See also:** [getChatMemberCount API method](../methods/getChatMemberCount.md)

### getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                                            |
| :-------- | :---------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |
| `userId`  | `this.username?.id`     | Unique identifier of the target user                                                                                   |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getChatMember();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getChatMember();
});
```

**See also:** [getChatMember API method](../methods/getChatMember.md)

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                                    |
| :-------- | :---------------------- | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter           | Type     | Required | Description                                                                                                                                                                                                |
| :------------------ | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | `string` |   Yes    | Topic name, 1-128 characters                                                                                                                                                                               |
| `iconColor`         | `number` |    No    | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |
| `iconCustomEmojiId` | `string` |    No    | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.                                                                  |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getForumTopicIconStickers('example text', 123);
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                |
| :-------- | :---------------------- | :----------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the chat or username of the channel (in the format @channelusername) |
| `userId`  | `this.username?.id`     | Unique identifier of the target user                                                       |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getUserChatBoosts();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getUserChatBoosts();
});
```

**See also:** [getUserChatBoosts API method](../methods/getUserChatBoosts.md)

### getBusinessConnection

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.

**Required parameters:**

| Parameter              | Type     | Required | Description                                  |
| :--------------------- | :------- | :------: | :------------------------------------------- |
| `businessConnectionId` | `string` |   Yes    | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getBusinessConnection('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getBusinessConnection();
});
```

**See also:** [getBusinessConnection API method](../methods/getBusinessConnection.md)

### getMyCommands

Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.

**Required parameters:**

| Parameter      | Type              | Required | Description                                                                              |
| :------------- | :---------------- | :------: | :--------------------------------------------------------------------------------------- |
| `scope`        | `BotCommandScope` |    No    | A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. |
| `languageCode` | `string`          |    No    | A two-letter ISO 639-1 language code or an empty string                                  |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMyCommands({} as any, 'example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMyCommands();
});
```

**See also:** [getMyCommands API method](../methods/getMyCommands.md)

### getMyName

Use this method to get the current bot name for the given user language. Returns BotName on success.

**Required parameters:**

| Parameter      | Type     | Required | Description                                             |
| :------------- | :------- | :------: | :------------------------------------------------------ |
| `languageCode` | `string` |    No    | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMyName('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMyName();
});
```

**See also:** [getMyName API method](../methods/getMyName.md)

### getMyDescription

Use this method to get the current bot description for the given user language. Returns BotDescription on success.

**Required parameters:**

| Parameter      | Type     | Required | Description                                             |
| :------------- | :------- | :------: | :------------------------------------------------------ |
| `languageCode` | `string` |    No    | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMyDescription('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMyDescription();
});
```

**See also:** [getMyDescription API method](../methods/getMyDescription.md)

### getMyShortDescription

Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.

**Required parameters:**

| Parameter      | Type     | Required | Description                                             |
| :------------- | :------- | :------: | :------------------------------------------------------ |
| `languageCode` | `string` |    No    | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMyShortDescription('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMyShortDescription();
});
```

**See also:** [getMyShortDescription API method](../methods/getMyShortDescription.md)

### getChatMenuButton

Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.

**Auto-filled parameters:**

| Parameter | Source                  | Description                                                                                                 |
| :-------- | :---------------------- | :---------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.personalChat?.id` | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getChatMenuButton();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getChatMenuButton();
});
```

**See also:** [getChatMenuButton API method](../methods/getChatMenuButton.md)

### getMyDefaultAdministratorRights

Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.

**Required parameters:**

| Parameter     | Type      | Required | Description                                                                                                                                                           |
| :------------ | :-------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `forChannels` | `boolean` |    No    | Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMyDefaultAdministratorRights(true);
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMyDefaultAdministratorRights();
});
```

**See also:** [getMyDefaultAdministratorRights API method](../methods/getMyDefaultAdministratorRights.md)

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source                       | Description                                                                                                                                                  |
| :-------- | :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `giftId`  | `this.acceptedGiftTypes?.id` | Identifier of the gift                                                                                                                                       |
| `userId`  | `this.username?.id`          | Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.                                                        |
| `chatId`  | `this.personalChat?.id`      | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

**Required parameters:**

| Parameter       | Type              | Required | Description                                                                                                                                                                                                                             |
| :-------------- | :---------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payForUpgrade` | `boolean`         |    No    | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver                                                                                                                          |
| `text`          | `string`          |    No    | Text that will be shown along with the gift; 0-128 characters                                                                                                                                                                           |
| `textParseMode` | `string`          |    No    | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.                                          |
| `textEntities`  | `MessageEntity[]` |    No    | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getAvailableGifts({
  payForUpgrade: true,
  text: 'example text',
});
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getAvailableGifts({ text: 'Response' });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

### getBusinessAccountStarBalance

Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success.

**Required parameters:**

| Parameter              | Type     | Required | Description                                  |
| :--------------------- | :------- | :------: | :------------------------------------------- |
| `businessConnectionId` | `string` |   Yes    | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getBusinessAccountStarBalance('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getBusinessAccountStarBalance();
});
```

**See also:** [getBusinessAccountStarBalance API method](../methods/getBusinessAccountStarBalance.md)

### getBusinessAccountGifts

Returns the gifts received and owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns OwnedGifts on success.

**Required parameters:**

| Parameter              | Type      | Required | Description                                                                                                                   |
| :--------------------- | :-------- | :------: | :---------------------------------------------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`  |   Yes    | Unique identifier of the business connection                                                                                  |
| `excludeUnsaved`       | `boolean` |    No    | Pass True to exclude gifts that aren't saved to the account's profile page                                                    |
| `excludeSaved`         | `boolean` |    No    | Pass True to exclude gifts that are saved to the account's profile page                                                       |
| `excludeUnlimited`     | `boolean` |    No    | Pass True to exclude gifts that can be purchased an unlimited number of times                                                 |
| `excludeLimited`       | `boolean` |    No    | Pass True to exclude gifts that can be purchased a limited number of times                                                    |
| `excludeUnique`        | `boolean` |    No    | Pass True to exclude unique gifts                                                                                             |
| `sortByPrice`          | `boolean` |    No    | Pass True to sort results by gift price instead of send date. Sorting is applied before pagination.                           |
| `offset`               | `string`  |    No    | Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results |
| `limit`                | `number`  |    No    | The maximum number of gifts to be returned; 1-100. Defaults to 100                                                            |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getBusinessAccountGifts({
  businessConnectionId: 'example text',
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getBusinessAccountGifts({ businessConnectionId: 'Response' });
});
```

**See also:** [getBusinessAccountGifts API method](../methods/getBusinessAccountGifts.md)

### getStickerSet

Use this method to get a sticker set. On success, a StickerSet object is returned.

**Required parameters:**

| Parameter | Type     | Required | Description             |
| :-------- | :------- | :------: | :---------------------- |
| `name`    | `string` |   Yes    | Name of the sticker set |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getStickerSet('example text');
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getStickerSet();
});
```

**See also:** [getStickerSet API method](../methods/getStickerSet.md)

### getCustomEmojiStickers

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.

**Required parameters:**

| Parameter        | Type       | Required | Description                                                                                                |
| :--------------- | :--------- | :------: | :--------------------------------------------------------------------------------------------------------- |
| `customEmojiIds` | `string[]` |   Yes    | A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getCustomEmojiStickers(['example text']);
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getCustomEmojiStickers();
});
```

**See also:** [getCustomEmojiStickers API method](../methods/getCustomEmojiStickers.md)

### getMyStarBalance

A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.

**Required parameters:**

| Parameter | Type     | Required | Description                                                                                             |
| :-------- | :------- | :------: | :------------------------------------------------------------------------------------------------------ |
| `offset`  | `number` |    No    | Number of transactions to skip in the response                                                          |
| `limit`   | `number` |    No    | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getMyStarBalance(123, 123);
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getMyStarBalance();
});
```

**See also:** [getMyStarBalance API method](../methods/getMyStarBalance.md)

### getStarTransactions

Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.

**Required parameters:**

| Parameter | Type     | Required | Description                                                                                             |
| :-------- | :------- | :------: | :------------------------------------------------------------------------------------------------------ |
| `offset`  | `number` |    No    | Number of transactions to skip in the response                                                          |
| `limit`   | `number` |    No    | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getStarTransactions(123, 123);
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

**Auto-filled parameters:**

| Parameter         | Source                      | Description                                                                            |
| :---------------- | :-------------------------- | :------------------------------------------------------------------------------------- |
| `userId`          | `this.username?.id`         | Target user id                                                                         |
| `chatId`          | `this.personalChat?.id`     | Required if inline_message_id is not specified. Unique identifier for the target chat  |
| `messageId`       | `this.isDirectMessages?.id` | Required if inline_message_id is not specified. Identifier of the sent message         |
| `inlineMessageId` | `this.pinnedMessage?.id`    | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const chatfullinfo = new ChatFullInfo(rawData, bot);
await chatfullinfo.getGameHighScores();
```

2. In an event handler:

```typescript
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  // Auto-fills parameters from the chatfullinfo instance
  await chatfullinfo.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)

## Event Handlers

You can listen for ChatFullInfo events using:

```typescript
// Type-specific handler
bot.onChatFullInfo(async (chatfullinfo: ChatFullInfo) => {
  console.log('Received:', chatfullinfo);
  // Use fluent methods
  await chatfullinfo.getUpdates(...);
});

// Generic handler
bot.on('chatfullinfo', async (data: ChatFullInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChatFullInfo).
