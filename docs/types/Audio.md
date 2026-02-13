# Audio

This object represents an audio file to be treated as music by the Telegram clients.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| fileId | `string` | Yes | Identifier for this file, which can be used to download or reuse the file |
| fileUniqueId | `string` | Yes | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |
| duration | `number` | Yes | Duration of the audio in seconds as defined by the sender |
| performer | `string` | No | Optional. Performer of the audio as defined by the sender or by audio tags |
| title | `string` | No | Optional. Title of the audio as defined by the sender or by audio tags |
| fileName | `string` | No | Optional. Original filename as defined by the sender |
| mimeType | `string` | No | Optional. MIME type of the file as defined by the sender |
| fileSize | `number` | No | Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. |
| thumbnail | `PhotoSize` | No | Optional. Thumbnail of the album cover to which the music file belongs |

## Fluent Methods

The `Audio` class has the following fluent methods that automatically inject contextual parameters:

### sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `audio` | `InputFile` \| `string` | Yes | Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
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
const audio = new Audio(rawData, bot);
await audio.sendAudio({
  chatId: 123,
  audio: {} as any,
});
```

2. In an event handler:

```typescript
bot.onAudio(async (audio: Audio) => {
  // Auto-fills parameters from the audio instance
  await audio.sendAudio({ chatId: "Response" });
});
```

**See also:** [sendAudio API method](../methods/sendAudio.md)

### getUserProfileAudios

Use this method to get a list of profile audios for a user. Returns a UserProfileAudios object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |
| `offset` | `number` | No | Sequential number of the first audio to be returned. By default, all audios are returned. |
| `limit` | `number` | No | Limits the number of audios to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const audio = new Audio(rawData, bot);
await audio.getUserProfileAudios(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onAudio(async (audio: Audio) => {
  // Auto-fills parameters from the audio instance
  await audio.getUserProfileAudios();
});
```

**See also:** [getUserProfileAudios API method](../methods/getUserProfileAudios.md)


## Event Handlers

You can listen for Audio events using:

```typescript
// Type-specific handler
bot.onAudio(async (audio: Audio) => {
  console.log('Received:', audio);
  // Use fluent methods
  await audio.sendAudio(...);
});

// Generic handler
bot.on('audio', async (data: Audio) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Audio).
