# MessageOriginChat

The message was originally sent on behalf of a chat to a group chat.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the message origin, always “chat” |
| date | `number` | Yes | Date the message was sent originally in Unix time |
| senderChat | `Chat` | Yes | Chat that sent the message originally |
| authorSignature | `string` | No | Optional. For messages originally sent by an anonymous chat administrator, original message author signature |

## Fluent Methods

The `MessageOriginChat` class has the following fluent methods that automatically inject contextual parameters:

### getUpdates

Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update\_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. |
| `limit` | `number` | No | Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. |
| `timeout` | `number` | No | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. |
| `allowedUpdates` | `string[]` | No | A JSON-serialized list of the update types you want your bot to receive. For example, specify \["message", "edited\_channel\_post", "callback\_query"\] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat\_member, message\_reaction, and message\_reaction\_count \(default\). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getUpdates({
  offset: 123,
  limit: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getUpdates({});
});
```

**See also:** [getUpdates API method](../methods/getUpdates.md)

### getWebhookInfo

Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `url` | `string` | Yes | Webhook URL, may be empty if webhook is not set up |
| `hasCustomCertificate` | `boolean` | Yes | True, if a custom certificate was provided for webhook certificate checks |
| `pendingUpdateCount` | `number` | Yes | Number of updates awaiting delivery |
| `ipAddress` | `string` | No | Optional. Currently used webhook IP address |
| `lastErrorDate` | `number` | No | Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook |
| `lastErrorMessage` | `string` | No | Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| `lastSynchronizationErrorDate` | `number` | No | Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters |
| `maxConnections` | `number` | No | Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery |
| `allowedUpdates` | `string[]` | No | Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat\_member |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getWebhookInfo({
  url: "example text",
  hasCustomCertificate: true,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getWebhookInfo({ url: "Response" });
});
```

**See also:** [getWebhookInfo API method](../methods/getWebhookInfo.md)

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMe({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMe({ text: "Response" });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### sendMessage

Use this method to send text messages. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendMessage({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendMessage({ text: "Response" });
});
```

**See also:** [sendMessage API method](../methods/sendMessage.md)

### forwardMessage

Use this method to forward messages of any kind. Service messages and messages with protected content can&#39;t be forwarded. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `fromChatId` | `this.senderChat?.id` | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) |
| `messageId` | `this?.id` | Message identifier in the chat specified in from_chat_id |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat |
| `videoStartTimestamp` | `number` | No | New start timestamp for the forwarded video in the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the forwarded message from forwarding and saving |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.forwardMessage({
  messageThreadId: 123,
  directMessagesTopicId: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.forwardMessage({});
});
```

**See also:** [forwardMessage API method](../methods/forwardMessage.md)

### forwardMessages

Use this method to forward multiple messages of any kind. If some of the specified messages can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `fromChatId` | `this.senderChat?.id` | Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageIds` | `number[]` | Yes | A JSON-serialized list of 1-100 identifiers of messages in the chat from\_chat\_id to forward. The identifiers must be specified in a strictly increasing order. |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat |
| `disableNotification` | `boolean` | No | Sends the messages silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the forwarded messages from forwarding and saving |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.forwardMessages({
  messageIds: [123],
  messageThreadId: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.forwardMessages({});
});
```

**See also:** [forwardMessages API method](../methods/forwardMessages.md)

### sendPhoto

Use this method to send photos. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `photo` | `InputFile` \| `string` | Yes | Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `caption` | `string` | No | Photo caption \(may also be used when resending photos by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the photo caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `hasSpoiler` | `boolean` | No | Pass True if the photo needs to be covered with a spoiler animation |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendPhoto({
  photo: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendPhoto({ photo: "Response" });
});
```

**See also:** [sendPhoto API method](../methods/sendPhoto.md)

### sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `audio` | `InputFile` \| `string` | Yes | Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `caption` | `string` | No | Audio caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the audio caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `duration` | `number` | No | Duration of the audio in seconds |
| `performer` | `string` | No | Performer |
| `title` | `string` | No | Track name |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendAudio({
  audio: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendAudio({ audio: "Response" });
});
```

**See also:** [sendAudio API method](../methods/sendAudio.md)

### sendDocument

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `document` | `InputFile` \| `string` | Yes | File to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `caption` | `string` | No | Document caption \(may also be used when resending documents by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the document caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `disableContentTypeDetection` | `boolean` | No | Disables automatic server-side content type detection for files uploaded using multipart/form-data |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendDocument({
  document: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendDocument({ document: "Response" });
});
```

**See also:** [sendDocument API method](../methods/sendDocument.md)

### sendVideo

Use this method to send video files, Telegram clients support MPEG4 videos \(other formats may be sent as Document\). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `video` | `InputFile` \| `string` | Yes | Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `duration` | `number` | No | Duration of sent video in seconds |
| `width` | `number` | No | Video width |
| `height` | `number` | No | Video height |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `cover` | `InputFile` \| `string` | No | Cover for the video in the message. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |
| `startTimestamp` | `number` | No | Start timestamp for the video in the message |
| `caption` | `string` | No | Video caption \(may also be used when resending videos by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the video caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `hasSpoiler` | `boolean` | No | Pass True if the video needs to be covered with a spoiler animation |
| `supportsStreaming` | `boolean` | No | Pass True if the uploaded video is suitable for streaming |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendVideo({
  video: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendVideo({ video: "Response" });
});
```

**See also:** [sendVideo API method](../methods/sendVideo.md)

### sendAnimation

Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `animation` | `InputFile` \| `string` | Yes | Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `duration` | `number` | No | Duration of sent animation in seconds |
| `width` | `number` | No | Animation width |
| `height` | `number` | No | Animation height |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `caption` | `string` | No | Animation caption \(may also be used when resending animation by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the animation caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `hasSpoiler` | `boolean` | No | Pass True if the animation needs to be covered with a spoiler animation |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendAnimation({
  animation: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendAnimation({ animation: "Response" });
});
```

**See also:** [sendAnimation API method](../methods/sendAnimation.md)

### sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `voice` | `InputFile` \| `string` | Yes | Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `caption` | `string` | No | Voice message caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the voice message caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `duration` | `number` | No | Duration of the voice message in seconds |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendVoice({
  voice: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendVoice({ voice: "Response" });
});
```

**See also:** [sendVoice API method](../methods/sendVoice.md)

### sendVideoNote

As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `videoNote` | `InputFile` \| `string` | Yes | Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers \(recommended\) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `duration` | `number` | No | Duration of sent video in seconds |
| `length` | `number` | No | Video width and height, i.e. diameter of the video message |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendVideoNote({
  videoNote: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendVideoNote({ videoNote: "Response" });
});
```

**See also:** [sendVideoNote API method](../methods/sendVideoNote.md)

### sendPaidMedia

Use this method to send paid media. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `starCount` | `number` | Yes | The number of Telegram Stars that must be paid to buy access to the media; 1-10000 |
| `media` | `InputPaidMedia[]` | Yes | A JSON-serialized array describing the media to be sent; up to 10 items |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `payload` | `string` | No | Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `caption` | `string` | No | Media caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the media caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendPaidMedia({
  starCount: 123,
  media: [{} as any],
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendPaidMedia({ businessConnectionId: "Response" });
});
```

**See also:** [sendPaidMedia API method](../methods/sendPaidMedia.md)

### sendMediaGroup

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `media` | `any[]` | Yes | A JSON-serialized array describing messages to be sent, must include 2-10 items |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat |
| `disableNotification` | `boolean` | No | Sends messages silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent messages from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendMediaGroup({
  media: [{} as any],
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendMediaGroup({ businessConnectionId: "Response" });
});
```

**See also:** [sendMediaGroup API method](../methods/sendMediaGroup.md)

### sendLocation

Use this method to send point on the map. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `latitude` | `number` | Yes | Latitude of the location |
| `longitude` | `number` | Yes | Longitude of the location |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `horizontalAccuracy` | `number` | No | The radius of uncertainty for the location, measured in meters; 0-1500 |
| `livePeriod` | `number` | No | Period in seconds during which the location will be updated \(see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. |
| `heading` | `number` | No | For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. |
| `proximityAlertRadius` | `number` | No | For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendLocation({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendLocation({ businessConnectionId: "Response" });
});
```

**See also:** [sendLocation API method](../methods/sendLocation.md)

### sendVenue

Use this method to send information about a venue. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `latitude` | `number` | Yes | Latitude of the venue |
| `longitude` | `number` | Yes | Longitude of the venue |
| `title` | `string` | Yes | Name of the venue |
| `address` | `string` | Yes | Address of the venue |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `foursquareId` | `string` | No | Foursquare identifier of the venue |
| `foursquareType` | `string` | No | Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\) |
| `googlePlaceId` | `string` | No | Google Places identifier of the venue |
| `googlePlaceType` | `string` | No | Google Places type of the venue. \(See supported types.\) |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendVenue({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendVenue({ title: "Response" });
});
```

**See also:** [sendVenue API method](../methods/sendVenue.md)

### sendContact

Use this method to send phone contacts. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `phoneNumber` | `string` | Yes | Contact's phone number |
| `firstName` | `string` | Yes | Contact's first name |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `lastName` | `string` | No | Contact's last name |
| `vcard` | `string` | No | Additional data about the contact in the form of a vCard, 0-2048 bytes |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendContact({
  phoneNumber: "example text",
  firstName: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendContact({ phoneNumber: "Response" });
});
```

**See also:** [sendContact API method](../methods/sendContact.md)

### sendPoll

Use this method to send a native poll. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). Polls can't be sent to channel direct messages chats. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `question` | `string` | Yes | Poll question, 1-300 characters |
| `options` | `InputPollOption[]` | Yes | A JSON-serialized list of 2-12 answer options |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `questionParseMode` | `string` | No | Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed |
| `questionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question\_parse\_mode |
| `isAnonymous` | `boolean` | No | True, if the poll needs to be anonymous, defaults to True |
| `type` | `string` | No | Poll type, “quiz” or “regular”, defaults to “regular” |
| `allowsMultipleAnswers` | `boolean` | No | True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False |
| `correctOptionId` | `number` | No | 0-based identifier of the correct answer option, required for polls in quiz mode |
| `explanation` | `string` | No | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing |
| `explanationParseMode` | `string` | No | Mode for parsing entities in the explanation. See formatting options for more details. |
| `explanationEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation\_parse\_mode |
| `openPeriod` | `number` | No | Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close\_date. |
| `closeDate` | `number` | No | Point in time \(Unix timestamp\) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open\_period. |
| `isClosed` | `boolean` | No | Pass True if the poll needs to be immediately closed. This can be useful for poll preview. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendPoll({
  question: "example text",
  options: [{} as any],
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendPoll({ question: "Response" });
});
```

**See also:** [sendPoll API method](../methods/sendPoll.md)

### sendChecklist

Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection on behalf of which the message will be sent |
| `checklist` | `InputChecklist` | Yes | A JSON-serialized object for the checklist to send |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message |
| `replyParameters` | `ReplyParameters` | No | A JSON-serialized object for description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendChecklist({
  businessConnectionId: "example text",
  checklist: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendChecklist({ businessConnectionId: "Response" });
});
```

**See also:** [sendChecklist API method](../methods/sendChecklist.md)

### sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `emoji` | `string` | No | Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendDice({
  businessConnectionId: "example text",
  messageThreadId: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendDice({ businessConnectionId: "Response" });
});
```

**See also:** [sendDice API method](../methods/sendDice.md)

### sendChatAction

Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren't supported. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `action` | `string` | Yes | Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload\_photo for photos, record\_video or upload\_video for videos, record\_voice or upload\_voice for voice notes, upload\_document for general files, choose\_sticker for stickers, find\_location for location data, record\_video\_note or upload\_video\_note for video notes. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the action will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread; for supergroups only |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendChatAction(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendChatAction();
});
```

**See also:** [sendChatAction API method](../methods/sendChatAction.md)

### getUserProfilePhotos

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |
| `offset` | `number` | No | Sequential number of the first photo to be returned. By default, all photos are returned. |
| `limit` | `number` | No | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getUserProfilePhotos(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getUserProfilePhotos();
});
```

**See also:** [getUserProfilePhotos API method](../methods/getUserProfilePhotos.md)

### getFile

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file\_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `fileId` | `string` | Yes | File identifier to get information about |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getFile(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getFile();
});
```

**See also:** [getFile API method](../methods/getFile.md)

### editChatInviteLink

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `inviteLink` | `string` | Yes | The invite link to edit |
| `name` | `string` | No | Invite link name; 0-32 characters |
| `expireDate` | `number` | No | Point in time \(Unix timestamp\) when the link will expire |
| `memberLimit` | `number` | No | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 |
| `createsJoinRequest` | `boolean` | No | True, if users joining the chat via the link need to be approved by chat administrators. If True, member\_limit can't be specified |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editChatInviteLink({
  inviteLink: "example text",
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editChatInviteLink({ inviteLink: "Response" });
});
```

**See also:** [editChatInviteLink API method](../methods/editChatInviteLink.md)

### editChatSubscriptionInviteLink

Use this method to edit a subscription invite link created by the bot. The bot must have the can\_invite\_users administrator rights. Returns the edited invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `inviteLink` | `string` | Yes | The invite link to edit |
| `name` | `string` | No | Invite link name; 0-32 characters |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editChatSubscriptionInviteLink(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editChatSubscriptionInviteLink();
});
```

**See also:** [editChatSubscriptionInviteLink API method](../methods/editChatSubscriptionInviteLink.md)

### getChat

Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getChat();
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getChat();
});
```

**See also:** [getChat API method](../methods/getChat.md)

### getChatAdministrators

Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getChatAdministrators();
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getChatAdministrators();
});
```

**See also:** [getChatAdministrators API method](../methods/getChatAdministrators.md)

### getChatMemberCount

Use this method to get the number of members in a chat. Returns Int on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getChatMemberCount();
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getChatMemberCount();
});
```

**See also:** [getChatMemberCount API method](../methods/getChatMemberCount.md)

### getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getChatMember(
  123,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getChatMember();
});
```

**See also:** [getChatMember API method](../methods/getChatMember.md)

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Topic name, 1-128 characters |
| `iconColor` | `number` | No | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |
| `iconCustomEmojiId` | `string` | No | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getForumTopicIconStickers(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### editForumTopic

Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageThreadId` | `number` | Yes | Unique identifier for the target message thread of the forum topic |
| `name` | `string` | No | New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept |
| `iconCustomEmojiId` | `string` | No | New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editForumTopic(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editForumTopic();
});
```

**See also:** [editForumTopic API method](../methods/editForumTopic.md)

### editGeneralForumTopic

Use this method to edit the name of the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | New topic name, 1-128 characters |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editGeneralForumTopic(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editGeneralForumTopic();
});
```

**See also:** [editGeneralForumTopic API method](../methods/editGeneralForumTopic.md)

### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the chat or username of the channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getUserChatBoosts(
  123,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getUserChatBoosts();
});
```

**See also:** [getUserChatBoosts API method](../methods/getUserChatBoosts.md)

### getBusinessConnection

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getBusinessConnection(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getBusinessConnection();
});
```

**See also:** [getBusinessConnection API method](../methods/getBusinessConnection.md)

### getMyCommands

Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `scope` | `BotCommandScope` | No | A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMyCommands(
  {} as any,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMyCommands();
});
```

**See also:** [getMyCommands API method](../methods/getMyCommands.md)

### getMyName

Use this method to get the current bot name for the given user language. Returns BotName on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMyName(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMyName();
});
```

**See also:** [getMyName API method](../methods/getMyName.md)

### getMyDescription

Use this method to get the current bot description for the given user language. Returns BotDescription on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMyDescription(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMyDescription();
});
```

**See also:** [getMyDescription API method](../methods/getMyDescription.md)

### getMyShortDescription

Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMyShortDescription(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMyShortDescription();
});
```

**See also:** [getMyShortDescription API method](../methods/getMyShortDescription.md)

### getChatMenuButton

Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned |


**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getChatMenuButton();
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getChatMenuButton();
});
```

**See also:** [getChatMenuButton API method](../methods/getChatMenuButton.md)

### getMyDefaultAdministratorRights

Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `forChannels` | `boolean` | No | Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMyDefaultAdministratorRights(
  true,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMyDefaultAdministratorRights();
});
```

**See also:** [getMyDefaultAdministratorRights API method](../methods/getMyDefaultAdministratorRights.md)

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `giftId` | `string` | Yes | Identifier of the gift |
| `userId` | `number` | No | Required if chat\_id is not specified. Unique identifier of the target user who will receive the gift. |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getAvailableGifts({
  giftId: "example text",
  userId: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getAvailableGifts({ giftId: "Response" });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

### sendGift

Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `giftId` | `string` | Yes | Identifier of the gift |
| `userId` | `number` | No | Required if chat\_id is not specified. Unique identifier of the target user who will receive the gift. |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendGift({
  giftId: "example text",
  userId: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendGift({ giftId: "Response" });
});
```

**See also:** [sendGift API method](../methods/sendGift.md)

### getBusinessAccountStarBalance

Returns the amount of Telegram Stars owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns StarAmount on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getBusinessAccountStarBalance(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getBusinessAccountStarBalance();
});
```

**See also:** [getBusinessAccountStarBalance API method](../methods/getBusinessAccountStarBalance.md)

### getBusinessAccountGifts

Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `excludeUnsaved` | `boolean` | No | Pass True to exclude gifts that aren't saved to the account's profile page |
| `excludeSaved` | `boolean` | No | Pass True to exclude gifts that are saved to the account's profile page |
| `excludeUnlimited` | `boolean` | No | Pass True to exclude gifts that can be purchased an unlimited number of times |
| `excludeLimited` | `boolean` | No | Pass True to exclude gifts that can be purchased a limited number of times |
| `excludeUnique` | `boolean` | No | Pass True to exclude unique gifts |
| `sortByPrice` | `boolean` | No | Pass True to sort results by gift price instead of send date. Sorting is applied before pagination. |
| `offset` | `string` | No | Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results |
| `limit` | `number` | No | The maximum number of gifts to be returned; 1-100. Defaults to 100 |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getBusinessAccountGifts({
  businessConnectionId: "example text",
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getBusinessAccountGifts({ businessConnectionId: "Response" });
});
```

**See also:** [getBusinessAccountGifts API method](../methods/getBusinessAccountGifts.md)

### editStory

Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `storyId` | `number` | Yes | Unique identifier of the story to edit |
| `content` | `InputStoryContent` | Yes | Content of the story |
| `caption` | `string` | No | Caption of the story, 0-2048 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the story caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `areas` | `StoryArea[]` | No | A JSON-serialized list of clickable areas to be shown on the story |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editStory({
  businessConnectionId: "example text",
  storyId: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editStory({ businessConnectionId: "Response" });
});
```

**See also:** [editStory API method](../methods/editStory.md)

### editMessageText

Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this?.id` | Required if inline_message_id is not specified. Identifier of the message to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | New text of the message, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editMessageText({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editMessageText({ text: "Response" });
});
```

**See also:** [editMessageText API method](../methods/editMessageText.md)

### editMessageCaption

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this?.id` | Required if inline_message_id is not specified. Identifier of the message to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `caption` | `string` | No | New caption of the message, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the message caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages. |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editMessageCaption({
  businessConnectionId: "example text",
  inlineMessageId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editMessageCaption({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageCaption API method](../methods/editMessageCaption.md)

### editMessageMedia

Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can&#39;t be uploaded; use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this?.id` | Required if inline_message_id is not specified. Identifier of the message to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `media` | `InputMedia` | Yes | A JSON-serialized object for a new media content of the message |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editMessageMedia({
  media: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editMessageMedia({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageMedia API method](../methods/editMessageMedia.md)

### editMessageLiveLocation

Use this method to edit live location messages. A location can be edited until its live\_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this?.id` | Required if inline_message_id is not specified. Identifier of the message to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `latitude` | `number` | Yes | Latitude of new location |
| `longitude` | `number` | Yes | Longitude of new location |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `livePeriod` | `number` | No | New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live\_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live\_period remains unchanged |
| `horizontalAccuracy` | `number` | No | The radius of uncertainty for the location, measured in meters; 0-1500 |
| `heading` | `number` | No | Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. |
| `proximityAlertRadius` | `number` | No | The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editMessageLiveLocation({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editMessageLiveLocation({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageLiveLocation API method](../methods/editMessageLiveLocation.md)

### editMessageChecklist

Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat |
| `messageId` | `this?.id` | Unique identifier for the target message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection on behalf of which the message will be sent |
| `checklist` | `InputChecklist` | Yes | A JSON-serialized object for the new checklist |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for the new inline keyboard for the message |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editMessageChecklist({
  businessConnectionId: "example text",
  checklist: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editMessageChecklist({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageChecklist API method](../methods/editMessageChecklist.md)

### editMessageReplyMarkup

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this?.id` | Required if inline_message_id is not specified. Identifier of the message to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editMessageReplyMarkup({
  businessConnectionId: "example text",
  inlineMessageId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editMessageReplyMarkup({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageReplyMarkup API method](../methods/editMessageReplyMarkup.md)

### sendSticker

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `InputFile` \| `string` | Yes | Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `emoji` | `string` | No | Emoji associated with the sticker; only for just uploaded stickers |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendSticker({
  sticker: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendSticker({ sticker: "Response" });
});
```

**See also:** [sendSticker API method](../methods/sendSticker.md)

### getStickerSet

Use this method to get a sticker set. On success, a StickerSet object is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Name of the sticker set |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getStickerSet(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getStickerSet();
});
```

**See also:** [getStickerSet API method](../methods/getStickerSet.md)

### getCustomEmojiStickers

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `customEmojiIds` | `string[]` | Yes | A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getCustomEmojiStickers(
  ["example text"],
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getCustomEmojiStickers();
});
```

**See also:** [getCustomEmojiStickers API method](../methods/getCustomEmojiStickers.md)

### sendInvoice

Use this method to send invoices. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `title` | `string` | Yes | Product name, 1-32 characters |
| `description` | `string` | Yes | Product description, 1-255 characters |
| `payload` | `string` | Yes | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `currency` | `string` | Yes | Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. |
| `prices` | `LabeledPrice[]` | Yes | Price breakdown, a JSON-serialized list of components \(e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.\). Must contain exactly one item for payments in Telegram Stars. |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `providerToken` | `string` | No | Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. |
| `maxTipAmount` | `number` | No | The maximum accepted amount for tips in the smallest units of the currency \(integer, not float/double\). For example, for a maximum tip of US$ 1.45 pass max\_tip\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). Defaults to 0. Not supported for payments in Telegram Stars. |
| `suggestedTipAmounts` | `number[]` | No | A JSON-serialized array of suggested amounts of tips in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount. |
| `startParameter` | `string` | No | Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot \(instead of a Pay button\), with the value used as the start parameter |
| `providerData` | `string` | No | JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| `photoUrl` | `string` | No | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
| `photoSize` | `number` | No | Photo size in bytes |
| `photoWidth` | `number` | No | Photo width |
| `photoHeight` | `number` | No | Photo height |
| `needName` | `boolean` | No | Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. |
| `needPhoneNumber` | `boolean` | No | Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. |
| `needEmail` | `boolean` | No | Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. |
| `needShippingAddress` | `boolean` | No | Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. |
| `sendPhoneNumberToProvider` | `boolean` | No | Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. |
| `sendEmailToProvider` | `boolean` | No | Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. |
| `isFlexible` | `boolean` | No | Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendInvoice({
  title: "example text",
  description: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendInvoice({ title: "Response" });
});
```

**See also:** [sendInvoice API method](../methods/sendInvoice.md)

### getMyStarBalance

A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Number of transactions to skip in the response |
| `limit` | `number` | No | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getMyStarBalance(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getMyStarBalance();
});
```

**See also:** [getMyStarBalance API method](../methods/getMyStarBalance.md)

### getStarTransactions

Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Number of transactions to skip in the response |
| `limit` | `number` | No | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getStarTransactions(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

### editUserStarSubscription

Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Identifier of the user whose subscription will be edited |
| `telegramPaymentChargeId` | `string` | Yes | Telegram payment identifier for the subscription |
| `isCanceled` | `boolean` | Yes | Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.editUserStarSubscription(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.editUserStarSubscription();
});
```

**See also:** [editUserStarSubscription API method](../methods/editUserStarSubscription.md)

### sendGame

Use this method to send a game. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `gameShortName` | `string` | Yes | Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. If empty, one 'Play game\_title' button will be shown. If not empty, the first button must launch the game. |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.sendGame({
  gameShortName: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.sendGame({ gameShortName: "Response" });
});
```

**See also:** [sendGame API method](../methods/sendGame.md)

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.senderChat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat |
| `messageId` | `this?.id` | Required if inline_message_id is not specified. Identifier of the sent message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Target user id |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const messageoriginchat = new MessageOriginChat(rawData, bot);
await messageoriginchat.getGameHighScores(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  // Auto-fills parameters from the messageoriginchat instance
  await messageoriginchat.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)


## Event Handlers

You can listen for MessageOriginChat events using:

```typescript
// Type-specific handler
bot.onMessageOriginChat(async (messageoriginchat: MessageOriginChat) => {
  console.log('Received:', messageoriginchat);
  // Use fluent methods
  await messageoriginchat.getUpdates(...);
});

// Generic handler
bot.on('messageoriginchat', async (data: MessageOriginChat) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#MessageOriginChat).
