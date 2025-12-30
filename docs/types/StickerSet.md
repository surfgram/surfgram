# StickerSet

This object represents a sticker set.

## Fields

| Name        | Type        | Required | Description                                                                     |
| :---------- | :---------- | :------: | :------------------------------------------------------------------------------ |
| name        | `string`    |   Yes    | Sticker set name                                                                |
| title       | `string`    |   Yes    | Sticker set title                                                               |
| stickerType | `string`    |   Yes    | Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji” |
| stickers    | `Sticker[]` |   Yes    | List of all set stickers                                                        |
| thumbnail   | `PhotoSize` |    No    | Optional. Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format             |

## Fluent Methods

The `StickerSet` class has the following fluent methods that automatically inject contextual parameters:

### setChatStickerSet

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.

**Required parameters:**

| Parameter        | Type                 | Required | Description                                                                                                      |
| :--------------- | :------------------- | :------: | :--------------------------------------------------------------------------------------------------------------- |
| `chatId`         | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `stickerSetName` | `string`             |   Yes    | Name of the sticker set to be set as the group sticker set                                                       |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.setChatStickerSet(123, 'example text');
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.setChatStickerSet();
});
```

**See also:** [setChatStickerSet API method](../methods/setChatStickerSet.md)

### deleteChatStickerSet

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.

**Required parameters:**

| Parameter | Type                 | Required | Description                                                                                                      |
| :-------- | :------------------- | :------: | :--------------------------------------------------------------------------------------------------------------- |
| `chatId`  | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.deleteChatStickerSet(123);
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.deleteChatStickerSet();
});
```

**See also:** [deleteChatStickerSet API method](../methods/deleteChatStickerSet.md)

### getStickerSet

Use this method to get a sticker set. On success, a StickerSet object is returned.

**Required parameters:**

| Parameter | Type     | Required | Description             |
| :-------- | :------- | :------: | :---------------------- |
| `name`    | `string` |   Yes    | Name of the sticker set |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.getStickerSet('example text');
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.getStickerSet();
});
```

**See also:** [getStickerSet API method](../methods/getStickerSet.md)

### createNewStickerSet

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.

**Required parameters:**

| Parameter         | Type             | Required | Description                                                                                                                                                                                                                                                                                                           |
| :---------------- | :--------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`          | `number`         |   Yes    | User identifier of created sticker set owner                                                                                                                                                                                                                                                                          |
| `name`            | `string`         |   Yes    | Short name of sticker set, to be used in t.me/addstickers/ URLs \(e.g., animals\). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "\_by\_&lt;bot_username&gt;". &lt;bot_username&gt; is case insensitive. 1-64 characters. |
| `title`           | `string`         |   Yes    | Sticker set title, 1-64 characters                                                                                                                                                                                                                                                                                    |
| `stickers`        | `InputSticker[]` |   Yes    | A JSON-serialized list of 1-50 initial stickers to be added to the sticker set                                                                                                                                                                                                                                        |
| `stickerType`     | `string`         |    No    | Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.                                                                                                                                                                                                 |
| `needsRepainting` | `boolean`        |    No    | Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only                                                              |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.createNewStickerSet({
  userId: 123,
  name: 'example text',
});
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.createNewStickerSet({ name: 'Response' });
});
```

**See also:** [createNewStickerSet API method](../methods/createNewStickerSet.md)

### setStickerSetTitle

Use this method to set the title of a created sticker set. Returns True on success.

**Required parameters:**

| Parameter | Type     | Required | Description                        |
| :-------- | :------- | :------: | :--------------------------------- |
| `name`    | `string` |   Yes    | Sticker set name                   |
| `title`   | `string` |   Yes    | Sticker set title, 1-64 characters |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.setStickerSetTitle('example text', 'example text');
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.setStickerSetTitle();
});
```

**See also:** [setStickerSetTitle API method](../methods/setStickerSetTitle.md)

### setStickerSetThumbnail

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.

**Required parameters:**

| Parameter   | Type                    | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :---------- | :---------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`      | `string`                |   Yes    | Sticker set name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `userId`    | `number`                |   Yes    | User identifier of the sticker set owner                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `format`    | `string`                |   Yes    | Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a .WEBM video                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `thumbnail` | `InputFile` \| `string` |    No    | A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size \(see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements\), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.setStickerSetThumbnail('example text', 123);
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.setStickerSetThumbnail();
});
```

**See also:** [setStickerSetThumbnail API method](../methods/setStickerSetThumbnail.md)

### setCustomEmojiStickerSetThumbnail

Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.

**Required parameters:**

| Parameter       | Type     | Required | Description                                                                                                                                       |
| :-------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`          | `string` |   Yes    | Sticker set name                                                                                                                                  |
| `customEmojiId` | `string` |    No    | Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.setCustomEmojiStickerSetThumbnail('example text', 'example text');
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.setCustomEmojiStickerSetThumbnail();
});
```

**See also:** [setCustomEmojiStickerSetThumbnail API method](../methods/setCustomEmojiStickerSetThumbnail.md)

### deleteStickerSet

Use this method to delete a sticker set that was created by the bot. Returns True on success.

**Required parameters:**

| Parameter | Type     | Required | Description      |
| :-------- | :------- | :------: | :--------------- |
| `name`    | `string` |   Yes    | Sticker set name |

**Usage examples:**

1. Basic usage:

```typescript
const stickerset = new StickerSet(rawData, bot);
await stickerset.deleteStickerSet('example text');
```

2. In an event handler:

```typescript
bot.onStickerSet(async (stickerset: StickerSet) => {
  // Auto-fills parameters from the stickerset instance
  await stickerset.deleteStickerSet();
});
```

**See also:** [deleteStickerSet API method](../methods/deleteStickerSet.md)

## Event Handlers

You can listen for StickerSet events using:

```typescript
// Type-specific handler
bot.onStickerSet(async (stickerset: StickerSet) => {
  console.log('Received:', stickerset);
  // Use fluent methods
  await stickerset.setChatStickerSet(...);
});

// Generic handler
bot.on('stickerset', async (data: StickerSet) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StickerSet).
