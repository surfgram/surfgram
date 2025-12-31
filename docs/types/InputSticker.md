# InputSticker

This object describes a sticker to be added to a sticker set.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| sticker | `string` | Yes | The added sticker. Pass a file\_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new file using multipart/form-data under &lt;file\_attach\_name&gt; name. Animated and video stickers can't be uploaded via HTTP URL. More information on Sending Files » |
| format | `string` | Yes | Format of the added sticker, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, “video” for a .WEBM video |
| emojiList | `string[]` | Yes | List of 1-20 emoji associated with the sticker |
| maskPosition | `MaskPosition` | No | Optional. Position where the mask should be placed on faces. For “mask” stickers only. |
| keywords | `string[]` | No | Optional. List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom\_emoji” stickers only. |

## Fluent Methods

The `InputSticker` class has the following fluent methods that automatically inject contextual parameters:

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
const inputsticker = new InputSticker(rawData, bot);
await inputsticker.createNewStickerSet({
  userId: 123,
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onInputSticker(async (inputsticker: InputSticker) => {
  // Auto-fills parameters from the inputsticker instance
  await inputsticker.createNewStickerSet({ name: "Response" });
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
const inputsticker = new InputSticker(rawData, bot);
await inputsticker.addStickerToSet(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onInputSticker(async (inputsticker: InputSticker) => {
  // Auto-fills parameters from the inputsticker instance
  await inputsticker.addStickerToSet();
});
```

**See also:** [addStickerToSet API method](../methods/addStickerToSet.md)

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
const inputsticker = new InputSticker(rawData, bot);
await inputsticker.replaceStickerInSet({
  userId: 123,
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onInputSticker(async (inputsticker: InputSticker) => {
  // Auto-fills parameters from the inputsticker instance
  await inputsticker.replaceStickerInSet({ name: "Response" });
});
```

**See also:** [replaceStickerInSet API method](../methods/replaceStickerInSet.md)


## Event Handlers

You can listen for InputSticker events using:

```typescript
// Type-specific handler
bot.onInputSticker(async (inputsticker: InputSticker) => {
  console.log('Received:', inputsticker);
  // Use fluent methods
  await inputsticker.createNewStickerSet(...);
});

// Generic handler
bot.on('inputsticker', async (data: InputSticker) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputSticker).
