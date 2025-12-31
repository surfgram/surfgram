# createNewStickerSet

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Sticker (19 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `uploadStickerFile`, `createNewStickerSet`, `addStickerToSet`, `setStickerPositionInSet`, `deleteStickerFromSet`, `replaceStickerInSet`, `setStickerEmojiList`, `setStickerKeywords`, `setStickerMaskPosition`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`

[View Sticker documentation with fluent methods](../types/Sticker.md)

### StickerSet (8 methods)

**Available methods:** `setChatStickerSet`, `deleteChatStickerSet`, `getStickerSet`, `createNewStickerSet`, `setStickerSetTitle`, `setStickerSetThumbnail`, `setCustomEmojiStickerSetThumbnail`, `deleteStickerSet`

[View StickerSet documentation with fluent methods](../types/StickerSet.md)

### InputSticker (3 methods)

**Available methods:** `createNewStickerSet`, `addStickerToSet`, `replaceStickerInSet`

[View InputSticker documentation with fluent methods](../types/InputSticker.md)

## Parameters

| Parameter         | Type             | Required | Description                                                                                                                                                                                                                                                                                                           |
| :---------------- | :--------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`          | `number`         |   Yes    | User identifier of created sticker set owner                                                                                                                                                                                                                                                                          |
| `name`            | `string`         |   Yes    | Short name of sticker set, to be used in t.me/addstickers/ URLs \(e.g., animals\). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "\_by\_&lt;bot_username&gt;". &lt;bot_username&gt; is case insensitive. 1-64 characters. |
| `title`           | `string`         |   Yes    | Sticker set title, 1-64 characters                                                                                                                                                                                                                                                                                    |
| `stickers`        | `InputSticker[]` |   Yes    | A JSON-serialized list of 1-50 initial stickers to be added to the sticker set                                                                                                                                                                                                                                        |
| `stickerType`     | `string`         |    No    | Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.                                                                                                                                                                                                 |
| `needsRepainting` | `boolean`        |    No    | Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only                                                              |

## Usage Example

```typescript
// When you already have a Sticker instance
bot.onSticker(async (sticker: Sticker) => {
  await sticker.createNewStickerSet({});
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

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#createNewStickerSet).
