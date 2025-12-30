# uploadStickerFile

Use this method to upload a file with a sticker for later use in the createNewStickerSet, addStickerToSet, or replaceStickerInSet methods \(the file can be used multiple times\). Returns the uploaded File on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### File (5 methods)

**Available methods:** `getUserProfilePhotos`, `getFile`, `setBusinessAccountProfilePhoto`, `removeBusinessAccountProfilePhoto`, `uploadStickerFile`

[View File documentation with fluent methods](../types/File.md)

### InputFile (12 methods)

**Available methods:** `setWebhook`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `setChatPhoto`, `sendSticker`, `uploadStickerFile`, `setStickerSetThumbnail`

[View InputFile documentation with fluent methods](../types/InputFile.md)

### Sticker (19 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `uploadStickerFile`, `createNewStickerSet`, `addStickerToSet`, `setStickerPositionInSet`, `deleteStickerFromSet`, `replaceStickerInSet`, `setStickerEmojiList`, `setStickerKeywords`, `setStickerMaskPosition`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`

[View Sticker documentation with fluent methods](../types/Sticker.md)

## Parameters

| Parameter       | Type        | Required | Description                                                                                                                                                           |
| :-------------- | :---------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`        | `number`    |   Yes    | User identifier of sticker file owner                                                                                                                                 |
| `sticker`       | `InputFile` |   Yes    | A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files » |
| `stickerFormat` | `string`    |   Yes    | Format of the sticker, must be one of “static”, “animated”, “video”                                                                                                   |

## Usage Example

```typescript
// When you already have a File instance
bot.onFile(async (file: File) => {
  await file.uploadStickerFile();
});

// With filtering
bot.onFile(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#uploadStickerFile).
