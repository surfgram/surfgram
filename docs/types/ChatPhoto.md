# ChatPhoto

This object represents a chat photo.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| smallFileId | `string` | Yes | File identifier of small \(160x160\) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed. |
| smallFileUniqueId | `string` | Yes | Unique file identifier of small \(160x160\) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |
| bigFileId | `string` | Yes | File identifier of big \(640x640\) chat photo. This file\_id can be used only for photo download and only for as long as the photo is not changed. |
| bigFileUniqueId | `string` | Yes | Unique file identifier of big \(640x640\) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |

## Fluent Methods

The `ChatPhoto` class has the following fluent methods that automatically inject contextual parameters:

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getUpdates({
  offset: 123,
  limit: 123,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getUpdates({});
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getWebhookInfo({
  url: "example text",
  hasCustomCertificate: true,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getWebhookInfo({ url: "Response" });
});
```

**See also:** [getWebhookInfo API method](../methods/getWebhookInfo.md)

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMe({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMe({ text: "Response" });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### sendMessage

Use this method to send text messages. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendMessage({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendMessage({ text: "Response" });
});
```

**See also:** [sendMessage API method](../methods/sendMessage.md)

### sendPhoto

Use this method to send photos. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendPhoto({
  photo: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendPhoto({ photo: "Response" });
});
```

**See also:** [sendPhoto API method](../methods/sendPhoto.md)

### sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendAudio({
  audio: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendAudio({ audio: "Response" });
});
```

**See also:** [sendAudio API method](../methods/sendAudio.md)

### sendDocument

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendDocument({
  document: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendDocument({ document: "Response" });
});
```

**See also:** [sendDocument API method](../methods/sendDocument.md)

### sendVideo

Use this method to send video files, Telegram clients support MPEG4 videos \(other formats may be sent as Document\). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendVideo({
  video: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendVideo({ video: "Response" });
});
```

**See also:** [sendVideo API method](../methods/sendVideo.md)

### sendAnimation

Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendAnimation({
  animation: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendAnimation({ animation: "Response" });
});
```

**See also:** [sendAnimation API method](../methods/sendAnimation.md)

### sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendVoice({
  voice: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendVoice({ voice: "Response" });
});
```

**See also:** [sendVoice API method](../methods/sendVoice.md)

### sendVideoNote

As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendVideoNote({
  videoNote: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendVideoNote({ videoNote: "Response" });
});
```

**See also:** [sendVideoNote API method](../methods/sendVideoNote.md)

### sendPaidMedia

Use this method to send paid media. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendPaidMedia({
  starCount: 123,
  media: [{} as any],
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendPaidMedia({ businessConnectionId: "Response" });
});
```

**See also:** [sendPaidMedia API method](../methods/sendPaidMedia.md)

### sendMediaGroup

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendMediaGroup({
  media: [{} as any],
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendMediaGroup({ businessConnectionId: "Response" });
});
```

**See also:** [sendMediaGroup API method](../methods/sendMediaGroup.md)

### sendLocation

Use this method to send point on the map. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendLocation({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendLocation({ businessConnectionId: "Response" });
});
```

**See also:** [sendLocation API method](../methods/sendLocation.md)

### sendVenue

Use this method to send information about a venue. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendVenue({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendVenue({ title: "Response" });
});
```

**See also:** [sendVenue API method](../methods/sendVenue.md)

### sendContact

Use this method to send phone contacts. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendContact({
  phoneNumber: "example text",
  firstName: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendContact({ phoneNumber: "Response" });
});
```

**See also:** [sendContact API method](../methods/sendContact.md)

### sendPoll

Use this method to send a native poll. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). Polls can't be sent to channel direct messages chats. |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendPoll({
  question: "example text",
  options: [{} as any],
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendPoll({ question: "Response" });
});
```

**See also:** [sendPoll API method](../methods/sendPoll.md)

### sendChecklist

Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendChecklist({
  businessConnectionId: "example text",
  checklist: {} as any,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendChecklist({ businessConnectionId: "Response" });
});
```

**See also:** [sendChecklist API method](../methods/sendChecklist.md)

### sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendDice({
  businessConnectionId: "example text",
  messageThreadId: 123,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendDice({ businessConnectionId: "Response" });
});
```

**See also:** [sendDice API method](../methods/sendDice.md)

### sendChatAction

Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren't supported. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `action` | `string` | Yes | Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload\_photo for photos, record\_video or upload\_video for videos, record\_voice or upload\_voice for voice notes, upload\_document for general files, choose\_sticker for stickers, find\_location for location data, record\_video\_note or upload\_video\_note for video notes. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the action will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread; for supergroups only |

**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendChatAction(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendChatAction();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getUserProfilePhotos(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getUserProfilePhotos();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getFile(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getFile();
});
```

**See also:** [getFile API method](../methods/getFile.md)

### setChatPhoto

Use this method to set a new profile photo for the chat. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `photo` | `InputFile` | Yes | New chat photo, uploaded using multipart/form-data |

**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.setChatPhoto(
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.setChatPhoto();
});
```

**See also:** [setChatPhoto API method](../methods/setChatPhoto.md)

### deleteChatPhoto

Use this method to delete a chat photo. Photos can&#39;t be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.deleteChatPhoto();
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.deleteChatPhoto();
});
```

**See also:** [deleteChatPhoto API method](../methods/deleteChatPhoto.md)

### getChat

Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getChat();
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getChat();
});
```

**See also:** [getChat API method](../methods/getChat.md)

### getChatAdministrators

Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getChatAdministrators();
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getChatAdministrators();
});
```

**See also:** [getChatAdministrators API method](../methods/getChatAdministrators.md)

### getChatMemberCount

Use this method to get the number of members in a chat. Returns Int on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getChatMemberCount();
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getChatMemberCount();
});
```

**See also:** [getChatMemberCount API method](../methods/getChatMemberCount.md)

### getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |

**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getChatMember(
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getChatMember();
});
```

**See also:** [getChatMember API method](../methods/getChatMember.md)

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Topic name, 1-128 characters |
| `iconColor` | `number` | No | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |
| `iconCustomEmojiId` | `string` | No | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |

**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getForumTopicIconStickers(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the chat or username of the channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |

**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getUserChatBoosts(
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getUserChatBoosts();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getBusinessConnection(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getBusinessConnection();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMyCommands(
  {} as any,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMyCommands();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMyName(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMyName();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMyDescription(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMyDescription();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMyShortDescription(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMyShortDescription();
});
```

**See also:** [getMyShortDescription API method](../methods/getMyShortDescription.md)

### getChatMenuButton

Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned |


**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getChatMenuButton();
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getChatMenuButton();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMyDefaultAdministratorRights(
  true,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMyDefaultAdministratorRights();
});
```

**See also:** [getMyDefaultAdministratorRights API method](../methods/getMyDefaultAdministratorRights.md)

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getAvailableGifts({
  giftId: "example text",
  userId: 123,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getAvailableGifts({ giftId: "Response" });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

### sendGift

Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendGift({
  giftId: "example text",
  userId: 123,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendGift({ giftId: "Response" });
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getBusinessAccountStarBalance(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getBusinessAccountStarBalance();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getBusinessAccountGifts({
  businessConnectionId: "example text",
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getBusinessAccountGifts({ businessConnectionId: "Response" });
});
```

**See also:** [getBusinessAccountGifts API method](../methods/getBusinessAccountGifts.md)

### sendSticker

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendSticker({
  sticker: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendSticker({ sticker: "Response" });
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getStickerSet(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getStickerSet();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getCustomEmojiStickers(
  ["example text"],
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getCustomEmojiStickers();
});
```

**See also:** [getCustomEmojiStickers API method](../methods/getCustomEmojiStickers.md)

### sendInvoice

Use this method to send invoices. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendInvoice({
  title: "example text",
  description: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendInvoice({ title: "Response" });
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getMyStarBalance(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getMyStarBalance();
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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getStarTransactions(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

### sendGame

Use this method to send a game. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats. |

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
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.sendGame({
  gameShortName: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.sendGame({ gameShortName: "Response" });
});
```

**See also:** [sendGame API method](../methods/sendGame.md)

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Target user id |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the sent message |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const chatphoto = new ChatPhoto(rawData, bot);
await chatphoto.getGameHighScores(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  // Auto-fills parameters from the chatphoto instance
  await chatphoto.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)


## Event Handlers

You can listen for ChatPhoto events using:

```typescript
// Type-specific handler
bot.onChatPhoto(async (chatphoto: ChatPhoto) => {
  console.log('Received:', chatphoto);
  // Use fluent methods
  await chatphoto.getUpdates(...);
});

// Generic handler
bot.on('chatphoto', async (data: ChatPhoto) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChatPhoto).
