# ReplyKeyboardMarkup

This object represents a custom keyboard with reply options \(see Introduction to bots for details and examples\). Not supported in channels and for messages sent on behalf of a Telegram Business account.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| keyboard | `KeyboardButton[][]` | Yes | Array of button rows, each represented by an Array of KeyboardButton objects |
| isPersistent | `boolean` | No | Optional. Requests clients to always show the keyboard when the regular keyboard is hidden. Defaults to false, in which case the custom keyboard can be hidden and opened with a keyboard icon. |
| resizeKeyboard | `boolean` | No | Optional. Requests clients to resize the keyboard vertically for optimal fit \(e.g., make the keyboard smaller if there are just two rows of buttons\). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard. |
| oneTimeKeyboard | `boolean` | No | Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat - the user can press a special button in the input field to see the custom keyboard again. Defaults to false. |
| inputFieldPlaceholder | `string` | No | Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters |
| selective | `boolean` | No | Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1\) users that are @mentioned in the text of the Message object; 2\) if the bot's message is a reply to a message in the same chat and forum topic, sender of the original message.Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard. |

## Fluent Methods

The `ReplyKeyboardMarkup` class has the following fluent methods that automatically inject contextual parameters:

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.getMe({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.getMe({ chatId: "Response" });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### logOut

Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.logOut({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.logOut({ chatId: "Response" });
});
```

**See also:** [logOut API method](../methods/logOut.md)

### close

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.close({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.close({ chatId: "Response" });
});
```

**See also:** [close API method](../methods/close.md)

### sendMessage

Use this method to send text messages. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendMessage({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendMessage({ chatId: "Response" });
});
```

**See also:** [sendMessage API method](../methods/sendMessage.md)

### copyMessage

Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn&#39;t have a link to the original message. Returns the MessageId of the sent message on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `fromChatId` | `number` \| `string` | Yes | Unique identifier for the chat where the original message was sent \(or channel username in the format @channelusername\) |
| `messageId` | `number` | Yes | Message identifier in the chat specified in from\_chat\_id |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `videoStartTimestamp` | `number` | No | New start timestamp for the copied video in the message |
| `caption` | `string` | No | New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept |
| `parseMode` | `string` | No | Mode for parsing entities in the new caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.copyMessage({
  chatId: 123,
  fromChatId: 123,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.copyMessage({ chatId: "Response" });
});
```

**See also:** [copyMessage API method](../methods/copyMessage.md)

### sendPhoto

Use this method to send photos. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendPhoto({
  chatId: 123,
  photo: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendPhoto({ chatId: "Response" });
});
```

**See also:** [sendPhoto API method](../methods/sendPhoto.md)

### sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendAudio({
  chatId: 123,
  audio: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendAudio({ chatId: "Response" });
});
```

**See also:** [sendAudio API method](../methods/sendAudio.md)

### sendDocument

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendDocument({
  chatId: 123,
  document: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendDocument({ chatId: "Response" });
});
```

**See also:** [sendDocument API method](../methods/sendDocument.md)

### sendVideo

Use this method to send video files, Telegram clients support MPEG4 videos \(other formats may be sent as Document\). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendVideo({
  chatId: 123,
  video: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendVideo({ chatId: "Response" });
});
```

**See also:** [sendVideo API method](../methods/sendVideo.md)

### sendAnimation

Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendAnimation({
  chatId: 123,
  animation: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendAnimation({ chatId: "Response" });
});
```

**See also:** [sendAnimation API method](../methods/sendAnimation.md)

### sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendVoice({
  chatId: 123,
  voice: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendVoice({ chatId: "Response" });
});
```

**See also:** [sendVoice API method](../methods/sendVoice.md)

### sendVideoNote

As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendVideoNote({
  chatId: 123,
  videoNote: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendVideoNote({ chatId: "Response" });
});
```

**See also:** [sendVideoNote API method](../methods/sendVideoNote.md)

### sendPaidMedia

Use this method to send paid media. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendPaidMedia({
  chatId: 123,
  starCount: 123,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendPaidMedia({ chatId: "Response" });
});
```

**See also:** [sendPaidMedia API method](../methods/sendPaidMedia.md)

### sendLocation

Use this method to send point on the map. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendLocation({
  chatId: 123,
  latitude: 123,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendLocation({ chatId: "Response" });
});
```

**See also:** [sendLocation API method](../methods/sendLocation.md)

### sendVenue

Use this method to send information about a venue. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendVenue({
  chatId: 123,
  latitude: 123,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendVenue({ chatId: "Response" });
});
```

**See also:** [sendVenue API method](../methods/sendVenue.md)

### sendContact

Use this method to send phone contacts. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendContact({
  chatId: 123,
  phoneNumber: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendContact({ chatId: "Response" });
});
```

**See also:** [sendContact API method](../methods/sendContact.md)

### sendPoll

Use this method to send a native poll. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). Polls can't be sent to channel direct messages chats. |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendPoll({
  chatId: 123,
  question: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendPoll({ chatId: "Response" });
});
```

**See also:** [sendPoll API method](../methods/sendPoll.md)

### sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendDice({
  chatId: 123,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendDice({ chatId: "Response" });
});
```

**See also:** [sendDice API method](../methods/sendDice.md)

### sendSticker

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
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
const replykeyboardmarkup = new ReplyKeyboardMarkup(rawData, bot);
await replykeyboardmarkup.sendSticker({
  chatId: 123,
  sticker: {} as any,
});
```

2. In an event handler:

```typescript
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  // Auto-fills parameters from the replykeyboardmarkup instance
  await replykeyboardmarkup.sendSticker({ chatId: "Response" });
});
```

**See also:** [sendSticker API method](../methods/sendSticker.md)


## Event Handlers

You can listen for ReplyKeyboardMarkup events using:

```typescript
// Type-specific handler
bot.onReplyKeyboardMarkup(async (replykeyboardmarkup: ReplyKeyboardMarkup) => {
  console.log('Received:', replykeyboardmarkup);
  // Use fluent methods
  await replykeyboardmarkup.getMe(...);
});

// Generic handler
bot.on('replykeyboardmarkup', async (data: ReplyKeyboardMarkup) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ReplyKeyboardMarkup).
