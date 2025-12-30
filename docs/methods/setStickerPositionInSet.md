# setStickerPositionInSet

Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Sticker (19 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `uploadStickerFile`, `createNewStickerSet`, `addStickerToSet`, `setStickerPositionInSet`, `deleteStickerFromSet`, `replaceStickerInSet`, `setStickerEmojiList`, `setStickerKeywords`, `setStickerMaskPosition`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`

[View Sticker documentation with fluent methods](../types/Sticker.md)

## Parameters

| Parameter  | Type     | Required | Description                                 |
| :--------- | :------- | :------: | :------------------------------------------ |
| `sticker`  | `string` |   Yes    | File identifier of the sticker              |
| `position` | `number` |   Yes    | New sticker position in the set, zero-based |

## Usage Example

```typescript
// When you already have a Sticker instance
bot.onSticker(async (sticker: Sticker) => {
  await sticker.setStickerPositionInSet();
});

// With filtering
bot.onSticker(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setStickerPositionInSet).
