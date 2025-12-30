# setStickerEmojiList

Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Sticker (19 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `uploadStickerFile`, `createNewStickerSet`, `addStickerToSet`, `setStickerPositionInSet`, `deleteStickerFromSet`, `replaceStickerInSet`, `setStickerEmojiList`, `setStickerKeywords`, `setStickerMaskPosition`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`


[View Sticker documentation with fluent methods](../types/Sticker.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `string` | Yes | File identifier of the sticker |
| `emojiList` | `string[]` | Yes | A JSON-serialized list of 1-20 emoji associated with the sticker |


## Usage Example

```typescript
// When you already have a Sticker instance
bot.onSticker(async (sticker: Sticker) => {
  await sticker.setStickerEmojiList();
});

// With filtering
bot.onSticker((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setStickerEmojiList).
