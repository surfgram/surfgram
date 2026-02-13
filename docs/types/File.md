# File

This object represents a file ready to be downloaded. The file can be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| fileId | `string` | Yes | Identifier for this file, which can be used to download or reuse the file |
| fileUniqueId | `string` | Yes | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |
| fileSize | `number` | No | Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value. |
| filePath | `string` | No | Optional. File path. Use https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt; to get the file. |

## Fluent Methods

The `File` class has the following fluent methods that automatically inject contextual parameters:

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
const file = new File(rawData, bot);
await file.getUserProfilePhotos(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.getUserProfilePhotos();
});
```

**See also:** [getUserProfilePhotos API method](../methods/getUserProfilePhotos.md)

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
const file = new File(rawData, bot);
await file.getUserProfileAudios(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.getUserProfileAudios();
});
```

**See also:** [getUserProfileAudios API method](../methods/getUserProfileAudios.md)

### getFile

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file\_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `fileId` | `this.id` | File identifier to get information about |


**Usage examples:**

1. Basic usage:

```typescript
const file = new File(rawData, bot);
await file.getFile();
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.getFile();
});
```

**See also:** [getFile API method](../methods/getFile.md)

### setMyProfilePhoto

Changes the profile photo of the bot. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `photo` | `InputProfilePhoto` | Yes | The new profile photo to set |

**Usage examples:**

1. Basic usage:

```typescript
const file = new File(rawData, bot);
await file.setMyProfilePhoto(
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.setMyProfilePhoto();
});
```

**See also:** [setMyProfilePhoto API method](../methods/setMyProfilePhoto.md)

### removeMyProfilePhoto

Removes the profile photo of the bot. Requires no parameters. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` | No | Unique identifier for the target private chat. If not specified, default bot's menu button will be changed |
| `menuButton` | `MenuButton` | No | A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault |

**Usage examples:**

1. Basic usage:

```typescript
const file = new File(rawData, bot);
await file.removeMyProfilePhoto(
  123,
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.removeMyProfilePhoto();
});
```

**See also:** [removeMyProfilePhoto API method](../methods/removeMyProfilePhoto.md)

### setBusinessAccountProfilePhoto

Changes the profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `photo` | `InputProfilePhoto` | Yes | The new profile photo to set |
| `isPublic` | `boolean` | No | Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo. |

**Usage examples:**

1. Basic usage:

```typescript
const file = new File(rawData, bot);
await file.setBusinessAccountProfilePhoto(
  "example text",
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.setBusinessAccountProfilePhoto();
});
```

**See also:** [setBusinessAccountProfilePhoto API method](../methods/setBusinessAccountProfilePhoto.md)

### removeBusinessAccountProfilePhoto

Removes the current profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `isPublic` | `boolean` | No | Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo \(if present\) becomes the main photo. |

**Usage examples:**

1. Basic usage:

```typescript
const file = new File(rawData, bot);
await file.removeBusinessAccountProfilePhoto(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.removeBusinessAccountProfilePhoto();
});
```

**See also:** [removeBusinessAccountProfilePhoto API method](../methods/removeBusinessAccountProfilePhoto.md)

### uploadStickerFile

Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods \(the file can be used multiple times\). Returns the uploaded File on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier of sticker file owner |
| `sticker` | `InputFile` | Yes | A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » |
| `stickerFormat` | `string` | Yes | Format of the sticker, must be one of “static”, “animated”, “video” |

**Usage examples:**

1. Basic usage:

```typescript
const file = new File(rawData, bot);
await file.uploadStickerFile(
  123,
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onFile(async (file: File) => {
  // Auto-fills parameters from the file instance
  await file.uploadStickerFile();
});
```

**See also:** [uploadStickerFile API method](../methods/uploadStickerFile.md)


## Event Handlers

You can listen for File events using:

```typescript
// Type-specific handler
bot.onFile(async (file: File) => {
  console.log('Received:', file);
  // Use fluent methods
  await file.getUserProfilePhotos(...);
});

// Generic handler
bot.on('file', async (data: File) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#File).
