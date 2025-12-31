# Sticker

This object represents a sticker.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| fileId | `string` | Yes | Identifier for this file, which can be used to download or reuse the file |
| fileUniqueId | `string` | Yes | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |
| type | `string` | Yes | Type of the sticker, currently one of “regular”, “mask”, “custom\_emoji”. The type of the sticker is independent from its format, which is determined by the fields is\_animated and is\_video. |
| width | `number` | Yes | Sticker width |
| height | `number` | Yes | Sticker height |
| isAnimated | `boolean` | Yes | True, if the sticker is animated |
| isVideo | `boolean` | Yes | True, if the sticker is a video sticker |
| thumbnail | `PhotoSize` | No | Optional. Sticker thumbnail in the .WEBP or .JPG format |
| emoji | `string` | No | Optional. Emoji associated with the sticker |
| setName | `string` | No | Optional. Name of the sticker set to which the sticker belongs |
| premiumAnimation | `File` | No | Optional. For premium regular stickers, premium animation for the sticker |
| maskPosition | `MaskPosition` | No | Optional. For mask stickers, the position where the mask should be placed |
| customEmojiId | `string` | No | Optional. For custom emoji stickers, unique identifier of the custom emoji |
| needsRepainting | `boolean` | No | Optional. True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places |
| fileSize | `number` | No | Optional. File size in bytes |

## Fluent Methods

The `Sticker` class has the following fluent methods that automatically inject contextual parameters:

### setChatStickerSet

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can\_set\_sticker\_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `stickerSetName` | `string` | Yes | Name of the sticker set to be set as the group sticker set |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setChatStickerSet(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setChatStickerSet();
});
```

**See also:** [setChatStickerSet API method](../methods/setChatStickerSet.md)

### deleteChatStickerSet

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can\_set\_sticker\_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.deleteChatStickerSet(
  123,
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.deleteChatStickerSet();
});
```

**See also:** [deleteChatStickerSet API method](../methods/deleteChatStickerSet.md)

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `iconCustomEmojiId` | `this.emoji?.id` | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `name` | `string` | Yes | Topic name, 1-128 characters |
| `iconColor` | `number` | No | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.getForumTopicIconStickers(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### sendSticker

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `sticker` | `InputFile` \| `string` | Yes | Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
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
const sticker = new Sticker(rawData, bot);
await sticker.sendSticker({
  chatId: 123,
  sticker: {} as any,
});
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.sendSticker({ chatId: "Response" });
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
const sticker = new Sticker(rawData, bot);
await sticker.getStickerSet(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.getStickerSet();
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
const sticker = new Sticker(rawData, bot);
await sticker.getCustomEmojiStickers(
  ["example text"],
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.getCustomEmojiStickers();
});
```

**See also:** [getCustomEmojiStickers API method](../methods/getCustomEmojiStickers.md)

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
const sticker = new Sticker(rawData, bot);
await sticker.uploadStickerFile(
  123,
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.uploadStickerFile();
});
```

**See also:** [uploadStickerFile API method](../methods/uploadStickerFile.md)

### createNewStickerSet

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier of created sticker set owner |
| `name` | `string` | Yes | Short name of sticker set, to be used in t.me/addstickers/ URLs \(e.g., animals\). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "\_by\_&lt;bot\_username&gt;". &lt;bot\_username&gt; is case insensitive. 1-64 characters. |
| `title` | `string` | Yes | Sticker set title, 1-64 characters |
| `stickers` | `InputSticker[]` | Yes | A JSON-serialized list of 1-50 initial stickers to be added to the sticker set |
| `stickerType` | `string` | No | Type of stickers in the set, pass “regular”, “mask”, or “custom\_emoji”. By default, a regular sticker set is created. |
| `needsRepainting` | `boolean` | No | Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.createNewStickerSet({
  userId: 123,
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.createNewStickerSet({ name: "Response" });
});
```

**See also:** [createNewStickerSet API method](../methods/createNewStickerSet.md)

### addStickerToSet

Use this method to add a new sticker to a set created by the bot. Emoji sticker sets can have up to 200 stickers. Other sticker sets can have up to 120 stickers. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier of sticker set owner |
| `name` | `string` | Yes | Sticker set name |
| `sticker` | `InputSticker` | Yes | A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.addStickerToSet(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.addStickerToSet();
});
```

**See also:** [addStickerToSet API method](../methods/addStickerToSet.md)

### setStickerPositionInSet

Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |
| `position` | `number` | Yes | New sticker position in the set, zero-based |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setStickerPositionInSet(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setStickerPositionInSet();
});
```

**See also:** [setStickerPositionInSet API method](../methods/setStickerPositionInSet.md)

### deleteStickerFromSet

Use this method to delete a sticker from a set created by the bot. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.deleteStickerFromSet(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.deleteStickerFromSet();
});
```

**See also:** [deleteStickerFromSet API method](../methods/deleteStickerFromSet.md)

### replaceStickerInSet

Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier of the sticker set owner |
| `name` | `string` | Yes | Sticker set name |
| `oldSticker` | `string` | Yes | File identifier of the replaced sticker |
| `sticker` | `InputSticker` | Yes | A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged. |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.replaceStickerInSet({
  userId: 123,
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.replaceStickerInSet({ name: "Response" });
});
```

**See also:** [replaceStickerInSet API method](../methods/replaceStickerInSet.md)

### setStickerEmojiList

Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |
| `emojiList` | `string[]` | Yes | A JSON-serialized list of 1-20 emoji associated with the sticker |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setStickerEmojiList(
  "example text",
  ["example text"],
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setStickerEmojiList();
});
```

**See also:** [setStickerEmojiList API method](../methods/setStickerEmojiList.md)

### setStickerKeywords

Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |
| `keywords` | `string[]` | No | A JSON-serialized list of 0-20 search keywords for the sticker with total length of up to 64 characters |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setStickerKeywords(
  "example text",
  ["example text"],
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setStickerKeywords();
});
```

**See also:** [setStickerKeywords API method](../methods/setStickerKeywords.md)

### setStickerMaskPosition

Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |
| `maskPosition` | `MaskPosition` | No | A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setStickerMaskPosition(
  "example text",
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setStickerMaskPosition();
});
```

**See also:** [setStickerMaskPosition API method](../methods/setStickerMaskPosition.md)

### setStickerSetTitle

Use this method to set the title of a created sticker set. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Sticker set name |
| `title` | `string` | Yes | Sticker set title, 1-64 characters |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setStickerSetTitle(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setStickerSetTitle();
});
```

**See also:** [setStickerSetTitle API method](../methods/setStickerSetTitle.md)

### setStickerSetThumbnail

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Sticker set name |
| `userId` | `number` | Yes | User identifier of the sticker set owner |
| `format` | `string` | Yes | Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a .WEBM video |
| `thumbnail` | `InputFile` \| `string` | No | A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size \(see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements\), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file\_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setStickerSetThumbnail(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setStickerSetThumbnail();
});
```

**See also:** [setStickerSetThumbnail API method](../methods/setStickerSetThumbnail.md)

### setCustomEmojiStickerSetThumbnail

Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `customEmojiId` | `this.customEmojiId` | Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Sticker set name |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.setCustomEmojiStickerSetThumbnail(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.setCustomEmojiStickerSetThumbnail();
});
```

**See also:** [setCustomEmojiStickerSetThumbnail API method](../methods/setCustomEmojiStickerSetThumbnail.md)

### deleteStickerSet

Use this method to delete a sticker set that was created by the bot. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Sticker set name |

**Usage examples:**

1. Basic usage:

```typescript
const sticker = new Sticker(rawData, bot);
await sticker.deleteStickerSet(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onSticker(async (sticker: Sticker) => {
  // Auto-fills parameters from the sticker instance
  await sticker.deleteStickerSet();
});
```

**See also:** [deleteStickerSet API method](../methods/deleteStickerSet.md)


## Event Handlers

You can listen for Sticker events using:

```typescript
// Type-specific handler
bot.onSticker(async (sticker: Sticker) => {
  console.log('Received:', sticker);
  // Use fluent methods
  await sticker.setChatStickerSet(...);
});

// Generic handler
bot.on('sticker', async (data: Sticker) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Sticker).
