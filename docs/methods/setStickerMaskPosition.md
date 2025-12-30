# setStickerMaskPosition

Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Sticker (19 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `uploadStickerFile`, `createNewStickerSet`, `addStickerToSet`, `setStickerPositionInSet`, `deleteStickerFromSet`, `replaceStickerInSet`, `setStickerEmojiList`, `setStickerKeywords`, `setStickerMaskPosition`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`


[View Sticker documentation with fluent methods](../types/Sticker.md)

### MaskPosition (1 methods)

**Available methods:** `setStickerMaskPosition`


[View MaskPosition documentation with fluent methods](../types/MaskPosition.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |
| `maskPosition` | `MaskPosition` | No | A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. |


## Usage Example

```typescript
// When you already have a Sticker instance
bot.onSticker(async (sticker: Sticker) => {
  await sticker.setStickerMaskPosition();
});

// With filtering
bot.onSticker((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setStickerMaskPosition).
