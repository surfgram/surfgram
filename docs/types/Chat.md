# Chat

This object represents a chat.

## Fields

| Name             | Type      | Required | Description                                                                                                                                                                                                                                                                                                       |
| :--------------- | :-------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | `number`  |   Yes    | Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. |
| type             | `string`  |   Yes    | Type of the chat, can be either “private”, “group”, “supergroup” or “channel”                                                                                                                                                                                                                                     |
| title            | `string`  |    No    | Optional. Title, for supergroups, channels and group chats                                                                                                                                                                                                                                                        |
| username         | `string`  |    No    | Optional. Username, for private chats, supergroups and channels if available                                                                                                                                                                                                                                      |
| firstName        | `string`  |    No    | Optional. First name of the other party in a private chat                                                                                                                                                                                                                                                         |
| lastName         | `string`  |    No    | Optional. Last name of the other party in a private chat                                                                                                                                                                                                                                                          |
| isForum          | `boolean` |    No    | Optional. True, if the supergroup chat is a forum \(has topics enabled\)                                                                                                                                                                                                                                          |
| isDirectMessages | `boolean` |    No    | Optional. True, if the chat is the direct messages chat of a channel                                                                                                                                                                                                                                              |

## Fluent Methods

The `Chat` class has the following fluent methods that automatically inject contextual parameters:

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
const chat = new Chat(rawData, bot);
await chat.getUpdates({
  offset: 123,
  limit: 123,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getUpdates({});
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
const chat = new Chat(rawData, bot);
await chat.getWebhookInfo({
  url: 'example text',
  hasCustomCertificate: true,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getWebhookInfo({ url: 'Response' });
});
```

**See also:** [getWebhookInfo API method](../methods/getWebhookInfo.md)

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter                 | Type                                                                                     | Required | Description                                                                                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`                    | `string`                                                                                 |   Yes    | Text of the message to be sent, 1-4096 characters after entities parsing                                                                                                                                                           |
| `businessConnectionId`    | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                                                           |
| `messageThreadId`         | `number`                                                                                 |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                                                                                                 |
| `directMessagesTopicId`   | `number`                                                                                 |    No    | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat                                                                                               |
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
const chat = new Chat(rawData, bot);
await chat.getMe({
  text: 'example text',
  businessConnectionId: 'example text',
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMe({ text: 'Response' });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### sendChatAction

Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                                                                                       |
| :-------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren't supported. |

**Required parameters:**

| Parameter              | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| :--------------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`               | `string` |   Yes    | Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. |
| `businessConnectionId` | `string` |    No    | Unique identifier of the business connection on behalf of which the action will be sent                                                                                                                                                                                                                                                                                                     |
| `messageThreadId`      | `number` |    No    | Unique identifier for the target message thread; for supergroups only                                                                                                                                                                                                                                                                                                                       |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.sendChatAction('example text', 'example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.sendChatAction();
});
```

**See also:** [sendChatAction API method](../methods/sendChatAction.md)

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
const chat = new Chat(rawData, bot);
await chat.getUserProfilePhotos(123, 123);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getUserProfilePhotos();
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
const chat = new Chat(rawData, bot);
await chat.getFile('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getFile();
});
```

**See also:** [getFile API method](../methods/getFile.md)

### banChatMember

Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                                             |
| :-------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                                    |

**Required parameters:**

| Parameter        | Type      | Required | Description                                                                                                                                                                                                                           |
| :--------------- | :-------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `untilDate`      | `number`  |    No    | Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.           |
| `revokeMessages` | `boolean` |    No    | Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.banChatMember(123, true);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.banChatMember();
});
```

**See also:** [banChatMember API method](../methods/banChatMember.md)

### unbanChatMember

Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don&#39;t want this, use the parameter only_if_banned. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                                             |
| :-------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                                    |

**Required parameters:**

| Parameter      | Type      | Required | Description                          |
| :------------- | :-------- | :------: | :----------------------------------- |
| `onlyIfBanned` | `boolean` |    No    | Do nothing if the user is not banned |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.unbanChatMember(true);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.unbanChatMember();
});
```

**See also:** [unbanChatMember API method](../methods/unbanChatMember.md)

### restrictChatMember

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                                    |
| :-------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                           |

**Required parameters:**

| Parameter                       | Type              | Required | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------ | :---------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `permissions`                   | `ChatPermissions` |   Yes    | A JSON-serialized object for new user permissions                                                                                                                                                                                                                                                                                                                                     |
| `useIndependentChatPermissions` | `boolean`         |    No    | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. |
| `untilDate`                     | `number`          |    No    | Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever                                                                                                                                                                               |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.restrictChatMember({
  permissions: {} as any,
  useIndependentChatPermissions: true,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.restrictChatMember({});
});
```

**See also:** [restrictChatMember API method](../methods/restrictChatMember.md)

### promoteChatMember

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                              |
| :-------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                     |

**Required parameters:**

| Parameter                 | Type      | Required | Description                                                                                                                                                                                                                                                                 |
| :------------------------ | :-------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isAnonymous`             | `boolean` |    No    | Pass True if the administrator's presence in the chat is hidden                                                                                                                                                                                                             |
| `canManageChat`           | `boolean` |    No    | Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege. |
| `canDeleteMessages`       | `boolean` |    No    | Pass True if the administrator can delete messages of other users                                                                                                                                                                                                           |
| `canManageVideoChats`     | `boolean` |    No    | Pass True if the administrator can manage video chats                                                                                                                                                                                                                       |
| `canRestrictMembers`      | `boolean` |    No    | Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics                                                                                                                                                                     |
| `canPromoteMembers`       | `boolean` |    No    | Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly \(promoted by administrators that were appointed by him\)                                          |
| `canChangeInfo`           | `boolean` |    No    | Pass True if the administrator can change chat title, photo and other settings                                                                                                                                                                                              |
| `canInviteUsers`          | `boolean` |    No    | Pass True if the administrator can invite new users to the chat                                                                                                                                                                                                             |
| `canPostStories`          | `boolean` |    No    | Pass True if the administrator can post stories to the chat                                                                                                                                                                                                                 |
| `canEditStories`          | `boolean` |    No    | Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive                                                                                                                 |
| `canDeleteStories`        | `boolean` |    No    | Pass True if the administrator can delete stories posted by other users                                                                                                                                                                                                     |
| `canPostMessages`         | `boolean` |    No    | Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only                                                                                                                                   |
| `canEditMessages`         | `boolean` |    No    | Pass True if the administrator can edit messages of other users and can pin messages; for channels only                                                                                                                                                                     |
| `canPinMessages`          | `boolean` |    No    | Pass True if the administrator can pin messages; for supergroups only                                                                                                                                                                                                       |
| `canManageTopics`         | `boolean` |    No    | Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only                                                                                                                                                                    |
| `canManageDirectMessages` | `boolean` |    No    | Pass True if the administrator can manage direct messages within the channel and decline suggested posts; for channels only                                                                                                                                                 |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.promoteChatMember({
  isAnonymous: true,
  canManageChat: true,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.promoteChatMember({});
});
```

**See also:** [promoteChatMember API method](../methods/promoteChatMember.md)

### setChatAdministratorCustomTitle

Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                                    |
| :-------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                           |

**Required parameters:**

| Parameter     | Type     | Required | Description                                                                    |
| :------------ | :------- | :------: | :----------------------------------------------------------------------------- |
| `customTitle` | `string` |   Yes    | New custom title for the administrator; 0-16 characters, emoji are not allowed |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatAdministratorCustomTitle('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatAdministratorCustomTitle();
});
```

**See also:** [setChatAdministratorCustomTitle API method](../methods/setChatAdministratorCustomTitle.md)

### banChatSenderChat

Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won&#39;t be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter      | Source     | Description                                                                                              |
| :------------- | :--------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`       | `this.id`  | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `senderChatId` | `this?.id` | Unique identifier of the target sender chat                                                              |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.banChatSenderChat();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.banChatSenderChat();
});
```

**See also:** [banChatSenderChat API method](../methods/banChatSenderChat.md)

### unbanChatSenderChat

Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter      | Source     | Description                                                                                              |
| :------------- | :--------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`       | `this.id`  | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `senderChatId` | `this?.id` | Unique identifier of the target sender chat                                                              |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.unbanChatSenderChat();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.unbanChatSenderChat();
});
```

**See also:** [unbanChatSenderChat API method](../methods/unbanChatSenderChat.md)

### setChatPermissions

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                    |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter                       | Type              | Required | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------ | :---------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `permissions`                   | `ChatPermissions` |   Yes    | A JSON-serialized object for new default chat permissions                                                                                                                                                                                                                                                                                                                             |
| `useIndependentChatPermissions` | `boolean`         |    No    | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatPermissions({} as any, true);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatPermissions();
});
```

**See also:** [setChatPermissions API method](../methods/setChatPermissions.md)

### exportChatInviteLink

Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.exportChatInviteLink();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.exportChatInviteLink();
});
```

**See also:** [exportChatInviteLink API method](../methods/exportChatInviteLink.md)

### createChatInviteLink

Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter            | Type      | Required | Description                                                                                                                       |
| :------------------- | :-------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------- |
| `name`               | `string`  |    No    | Invite link name; 0-32 characters                                                                                                 |
| `expireDate`         | `number`  |    No    | Point in time \(Unix timestamp\) when the link will expire                                                                        |
| `memberLimit`        | `number`  |    No    | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999   |
| `createsJoinRequest` | `boolean` |    No    | True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.createChatInviteLink({
  name: 'example text',
  expireDate: 123,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.createChatInviteLink({ name: 'Response' });
});
```

**See also:** [createChatInviteLink API method](../methods/createChatInviteLink.md)

### editChatInviteLink

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter            | Type      | Required | Description                                                                                                                       |
| :------------------- | :-------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------- |
| `inviteLink`         | `string`  |   Yes    | The invite link to edit                                                                                                           |
| `name`               | `string`  |    No    | Invite link name; 0-32 characters                                                                                                 |
| `expireDate`         | `number`  |    No    | Point in time \(Unix timestamp\) when the link will expire                                                                        |
| `memberLimit`        | `number`  |    No    | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999   |
| `createsJoinRequest` | `boolean` |    No    | True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.editChatInviteLink({
  inviteLink: 'example text',
  name: 'example text',
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.editChatInviteLink({ inviteLink: 'Response' });
});
```

**See also:** [editChatInviteLink API method](../methods/editChatInviteLink.md)

### createChatSubscriptionInviteLink

Use this method to create a subscription invite link for a channel chat. The bot must have the can_invite_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                      |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target channel chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter            | Type     | Required | Description                                                                                                                              |
| :------------------- | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `subscriptionPeriod` | `number` |   Yes    | The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 \(30 days\).     |
| `subscriptionPrice`  | `number` |   Yes    | The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000 |
| `name`               | `string` |    No    | Invite link name; 0-32 characters                                                                                                        |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.createChatSubscriptionInviteLink(123, 123);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.createChatSubscriptionInviteLink();
});
```

**See also:** [createChatSubscriptionInviteLink API method](../methods/createChatSubscriptionInviteLink.md)

### editChatSubscriptionInviteLink

Use this method to edit a subscription invite link created by the bot. The bot must have the can_invite_users administrator rights. Returns the edited invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter    | Type     | Required | Description                       |
| :----------- | :------- | :------: | :-------------------------------- |
| `inviteLink` | `string` |   Yes    | The invite link to edit           |
| `name`       | `string` |    No    | Invite link name; 0-32 characters |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.editChatSubscriptionInviteLink('example text', 'example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.editChatSubscriptionInviteLink();
});
```

**See also:** [editChatSubscriptionInviteLink API method](../methods/editChatSubscriptionInviteLink.md)

### revokeChatInviteLink

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                             |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------ |
| `chatId`  | `this.id` | Unique identifier of the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter    | Type     | Required | Description               |
| :----------- | :------- | :------: | :------------------------ |
| `inviteLink` | `string` |   Yes    | The invite link to revoke |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.revokeChatInviteLink('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.revokeChatInviteLink();
});
```

**See also:** [revokeChatInviteLink API method](../methods/revokeChatInviteLink.md)

### approveChatJoinRequest

Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                              |
| :-------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                     |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.approveChatJoinRequest();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.approveChatJoinRequest();
});
```

**See also:** [approveChatJoinRequest API method](../methods/approveChatJoinRequest.md)

### declineChatJoinRequest

Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                              |
| :-------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                     |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.declineChatJoinRequest();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.declineChatJoinRequest();
});
```

**See also:** [declineChatJoinRequest API method](../methods/declineChatJoinRequest.md)

### setChatPhoto

Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type        | Required | Description                                        |
| :-------- | :---------- | :------: | :------------------------------------------------- |
| `photo`   | `InputFile` |   Yes    | New chat photo, uploaded using multipart/form-data |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatPhoto({} as any);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatPhoto();
});
```

**See also:** [setChatPhoto API method](../methods/setChatPhoto.md)

### deleteChatPhoto

Use this method to delete a chat photo. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.deleteChatPhoto();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.deleteChatPhoto();
});
```

**See also:** [deleteChatPhoto API method](../methods/deleteChatPhoto.md)

### setChatTitle

Use this method to change the title of a chat. Titles can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type     | Required | Description                      |
| :-------- | :------- | :------: | :------------------------------- |
| `title`   | `string` |   Yes    | New chat title, 1-128 characters |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatTitle('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatTitle();
});
```

**See also:** [setChatTitle API method](../methods/setChatTitle.md)

### setChatDescription

Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter     | Type     | Required | Description                            |
| :------------ | :------- | :------: | :------------------------------------- |
| `description` | `string` |    No    | New chat description, 0-255 characters |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatDescription('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatDescription();
});
```

**See also:** [setChatDescription API method](../methods/setChatDescription.md)

### pinChatMessage

Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the &#39;can_pin_messages&#39; right or the &#39;can_edit_messages&#39; right to pin messages in groups and channels respectively. Returns True on success.

**Auto-filled parameters:**

| Parameter   | Source                      | Description                                                                                              |
| :---------- | :-------------------------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`    | `this.id`                   | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.isDirectMessages?.id` | Identifier of a message to pin                                                                           |

**Required parameters:**

| Parameter              | Type      | Required | Description                                                                                                                                                                |
| :--------------------- | :-------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`  |    No    | Unique identifier of the business connection on behalf of which the message will be pinned                                                                                 |
| `disableNotification`  | `boolean` |    No    | Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.pinChatMessage('example text', true);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.pinChatMessage();
});
```

**See also:** [pinChatMessage API method](../methods/pinChatMessage.md)

### unpinChatMessage

Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the &#39;can_pin_messages&#39; right or the &#39;can_edit_messages&#39; right to unpin messages in groups and channels respectively. Returns True on success.

**Auto-filled parameters:**

| Parameter   | Source                      | Description                                                                                                                                                               |
| :---------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`    | `this.id`                   | Unique identifier for the target chat or username of the target channel (in the format @channelusername)                                                                  |
| `messageId` | `this.isDirectMessages?.id` | Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned. |

**Required parameters:**

| Parameter              | Type     | Required | Description                                                                                  |
| :--------------------- | :------- | :------: | :------------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string` |    No    | Unique identifier of the business connection on behalf of which the message will be unpinned |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.unpinChatMessage('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.unpinChatMessage();
});
```

**See also:** [unpinChatMessage API method](../methods/unpinChatMessage.md)

### unpinAllChatMessages

Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the &#39;can_pin_messages&#39; right or the &#39;can_edit_messages&#39; right to unpin all pinned messages in groups and channels respectively. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.unpinAllChatMessages();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.unpinAllChatMessages();
});
```

**See also:** [unpinAllChatMessages API method](../methods/unpinAllChatMessages.md)

### leaveChat

Use this method for your bot to leave a group, supergroup or channel. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                                                                                                                      |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). Channel direct messages chats aren't supported; leave the corresponding channel instead. |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.leaveChat();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.leaveChat();
});
```

**See also:** [leaveChat API method](../methods/leaveChat.md)

### getChat

Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                            |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getChat();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getChat();
});
```

**See also:** [getChat API method](../methods/getChat.md)

### getChatAdministrators

Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                            |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getChatAdministrators();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getChatAdministrators();
});
```

**See also:** [getChatAdministrators API method](../methods/getChatAdministrators.md)

### getChatMemberCount

Use this method to get the number of members in a chat. Returns Int on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                            |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getChatMemberCount();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getChatMemberCount();
});
```

**See also:** [getChatMemberCount API method](../methods/getChatMemberCount.md)

### getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                                            |
| :-------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                                                   |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getChatMember();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getChatMember();
});
```

**See also:** [getChatMember API method](../methods/getChatMember.md)

### setChatStickerSet

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                    |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter        | Type     | Required | Description                                                |
| :--------------- | :------- | :------: | :--------------------------------------------------------- |
| `stickerSetName` | `string` |   Yes    | Name of the sticker set to be set as the group sticker set |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatStickerSet('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatStickerSet();
});
```

**See also:** [setChatStickerSet API method](../methods/setChatStickerSet.md)

### deleteChatStickerSet

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                    |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.deleteChatStickerSet();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.deleteChatStickerSet();
});
```

**See also:** [deleteChatStickerSet API method](../methods/deleteChatStickerSet.md)

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                    |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter           | Type     | Required | Description                                                                                                                                                                                                |
| :------------------ | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | `string` |   Yes    | Topic name, 1-128 characters                                                                                                                                                                               |
| `iconColor`         | `number` |    No    | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |
| `iconCustomEmojiId` | `string` |    No    | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.                                                                  |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getForumTopicIconStickers('example text', 123);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                |
| :-------- | :------------------ | :----------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Unique identifier for the chat or username of the channel (in the format @channelusername) |
| `userId`  | `this.username?.id` | Unique identifier of the target user                                                       |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getUserChatBoosts();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getUserChatBoosts();
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
const chat = new Chat(rawData, bot);
await chat.getBusinessConnection('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getBusinessConnection();
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
const chat = new Chat(rawData, bot);
await chat.getMyCommands({} as any, 'example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMyCommands();
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
const chat = new Chat(rawData, bot);
await chat.getMyName('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMyName();
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
const chat = new Chat(rawData, bot);
await chat.getMyDescription('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMyDescription();
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
const chat = new Chat(rawData, bot);
await chat.getMyShortDescription('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMyShortDescription();
});
```

**See also:** [getMyShortDescription API method](../methods/getMyShortDescription.md)

### setChatMenuButton

Use this method to change the bot&#39;s menu button in a private chat, or the default menu button. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target private chat. If not specified, default bot's menu button will be changed |

**Required parameters:**

| Parameter    | Type         | Required | Description                                                                           |
| :----------- | :----------- | :------: | :------------------------------------------------------------------------------------ |
| `menuButton` | `MenuButton` |    No    | A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.setChatMenuButton({} as any);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.setChatMenuButton();
});
```

**See also:** [setChatMenuButton API method](../methods/setChatMenuButton.md)

### getChatMenuButton

Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                 |
| :-------- | :-------- | :---------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getChatMenuButton();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getChatMenuButton();
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
const chat = new Chat(rawData, bot);
await chat.getMyDefaultAdministratorRights(true);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMyDefaultAdministratorRights();
});
```

**See also:** [getMyDefaultAdministratorRights API method](../methods/getMyDefaultAdministratorRights.md)

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source              | Description                                                                                                                                                  |
| :-------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id`           | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |
| `userId`  | `this.username?.id` | Required if chat_id is not specified. Unique identifier of the target user who will receive the gift.                                                        |

**Required parameters:**

| Parameter       | Type              | Required | Description                                                                                                                                                                                                                             |
| :-------------- | :---------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `giftId`        | `string`          |   Yes    | Identifier of the gift                                                                                                                                                                                                                  |
| `payForUpgrade` | `boolean`         |    No    | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver                                                                                                                          |
| `text`          | `string`          |    No    | Text that will be shown along with the gift; 0-128 characters                                                                                                                                                                           |
| `textParseMode` | `string`          |    No    | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.                                          |
| `textEntities`  | `MessageEntity[]` |    No    | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getAvailableGifts({
  giftId: 'example text',
  payForUpgrade: true,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getAvailableGifts({ giftId: 'Response' });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

### verifyChat

Verifies a chat on behalf of the organization which is represented by the bot. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                                                                                |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). Channel direct messages chats can't be verified. |

**Required parameters:**

| Parameter           | Type     | Required | Description                                                                                                                                             |
| :------------------ | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `customDescription` | `string` |    No    | Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description. |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.verifyChat('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.verifyChat();
});
```

**See also:** [verifyChat API method](../methods/verifyChat.md)

### removeChatVerification

Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                                                                                              |
| :-------- | :-------- | :------------------------------------------------------------------------------------------------------- |
| `chatId`  | `this.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.removeChatVerification();
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.removeChatVerification();
});
```

**See also:** [removeChatVerification API method](../methods/removeChatVerification.md)

### getBusinessAccountStarBalance

Returns the amount of Telegram Stars owned by a managed business account. Requires the can_view_gifts_and_stars business bot right. Returns StarAmount on success.

**Required parameters:**

| Parameter              | Type     | Required | Description                                  |
| :--------------------- | :------- | :------: | :------------------------------------------- |
| `businessConnectionId` | `string` |   Yes    | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getBusinessAccountStarBalance('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getBusinessAccountStarBalance();
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
const chat = new Chat(rawData, bot);
await chat.getBusinessAccountGifts({
  businessConnectionId: 'example text',
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getBusinessAccountGifts({ businessConnectionId: 'Response' });
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
const chat = new Chat(rawData, bot);
await chat.getStickerSet('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getStickerSet();
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
const chat = new Chat(rawData, bot);
await chat.getCustomEmojiStickers(['example text']);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getCustomEmojiStickers();
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
const chat = new Chat(rawData, bot);
await chat.getMyStarBalance(123, 123);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getMyStarBalance();
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
const chat = new Chat(rawData, bot);
await chat.getStarTransactions(123, 123);
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

**Auto-filled parameters:**

| Parameter   | Source                      | Description                                                                           |
| :---------- | :-------------------------- | :------------------------------------------------------------------------------------ |
| `chatId`    | `this.id`                   | Required if inline_message_id is not specified. Unique identifier for the target chat |
| `userId`    | `this.username?.id`         | Target user id                                                                        |
| `messageId` | `this.isDirectMessages?.id` | Required if inline_message_id is not specified. Identifier of the sent message        |

**Required parameters:**

| Parameter         | Type     | Required | Description                                                                            |
| :---------------- | :------- | :------: | :------------------------------------------------------------------------------------- |
| `inlineMessageId` | `string` |    No    | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const chat = new Chat(rawData, bot);
await chat.getGameHighScores('example text');
```

2. In an event handler:

```typescript
bot.onChat(async (chat: Chat) => {
  // Auto-fills parameters from the chat instance
  await chat.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)

## Event Handlers

You can listen for Chat events using:

```typescript
// Type-specific handler
bot.onChat(async (chat: Chat) => {
  console.log('Received:', chat);
  // Use fluent methods
  await chat.getUpdates(...);
});

// Generic handler
bot.on('chat', async (data: Chat) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Chat).
