# MaskPosition

This object describes the position on faces where a mask should be placed by default.

## Fields

| Name   | Type     | Required | Description                                                                                                                                                                           |
| :----- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| point  | `string` |   Yes    | The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.                                                                      |
| xShift | `number` |   Yes    | Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position. |
| yShift | `number` |   Yes    | Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.               |
| scale  | `number` |   Yes    | Mask scaling coefficient. For example, 2.0 means double size.                                                                                                                         |

## Fluent Methods

The `MaskPosition` class has the following fluent methods that automatically inject contextual parameters:

### setStickerMaskPosition

Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.

**Required parameters:**

| Parameter      | Type           | Required | Description                                                                                                                          |
| :------------- | :------------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------- |
| `sticker`      | `string`       |   Yes    | File identifier of the sticker                                                                                                       |
| `maskPosition` | `MaskPosition` |    No    | A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position. |

**Usage examples:**

1. Basic usage:

```typescript
const maskposition = new MaskPosition(rawData, bot);
await maskposition.setStickerMaskPosition('example text', {} as any);
```

2. In an event handler:

```typescript
bot.onMaskPosition(async (maskposition: MaskPosition) => {
  // Auto-fills parameters from the maskposition instance
  await maskposition.setStickerMaskPosition();
});
```

**See also:** [setStickerMaskPosition API method](../methods/setStickerMaskPosition.md)

## Event Handlers

You can listen for MaskPosition events using:

```typescript
// Type-specific handler
bot.onMaskPosition(async (maskposition: MaskPosition) => {
  console.log('Received:', maskposition);
  // Use fluent methods
  await maskposition.setStickerMaskPosition(...);
});

// Generic handler
bot.on('maskposition', async (data: MaskPosition) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#MaskPosition).
