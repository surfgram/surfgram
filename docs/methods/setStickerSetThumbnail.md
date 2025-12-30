# setStickerSetThumbnail

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### InputFile (12 methods)

**Available methods:** `setWebhook`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `setChatPhoto`, `sendSticker`, `uploadStickerFile`, `setStickerSetThumbnail`


[View InputFile documentation with fluent methods](../types/InputFile.md)

### Sticker (19 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `uploadStickerFile`, `createNewStickerSet`, `addStickerToSet`, `setStickerPositionInSet`, `deleteStickerFromSet`, `replaceStickerInSet`, `setStickerEmojiList`, `setStickerKeywords`, `setStickerMaskPosition`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`


[View Sticker documentation with fluent methods](../types/Sticker.md)

### StickerSet (8 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getStickerSet`, `createNewStickerSet`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`


[View StickerSet documentation with fluent methods](../types/StickerSet.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Sticker set name |
| `userId` | `number` | Yes | User identifier of the sticker set owner |
| `format` | `string` | Yes | Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a .WEBM video |
| `thumbnail` | `InputFile` \| `string` | No | A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size \(see https://core.telegram.org/stickers#animation-requirements for animated sticker technical requirements\), or a .WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-requirements for video sticker technical requirements. Pass a file\_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. |


## Usage Example

```typescript
// When you already have a InputFile instance
bot.onInputFile(async (inputfile: InputFile) => {
  await inputfile.setStickerSetThumbnail();
});

// With filtering
bot.onInputFile((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setStickerSetThumbnail).
