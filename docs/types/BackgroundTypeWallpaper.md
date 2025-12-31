# BackgroundTypeWallpaper

The background is a wallpaper in the JPEG format.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the background, always “wallpaper” |
| document | `Document` | Yes | Document with the wallpaper |
| darkThemeDimming | `number` | Yes | Dimming of the background in dark themes, as a percentage; 0-100 |
| isBlurred | `boolean` | No | Optional. True, if the wallpaper is downscaled to fit in a 450x450 square and then box-blurred with radius 12 |
| isMoving | `boolean` | No | Optional. True, if the background moves slightly when the device is tilted |


## Event Handlers

You can listen for BackgroundTypeWallpaper events using:

```typescript
// Type-specific handler
bot.onBackgroundTypeWallpaper(async (backgroundtypewallpaper: BackgroundTypeWallpaper) => {
  console.log('Received:', backgroundtypewallpaper);
});

// Generic handler
bot.on('backgroundtypewallpaper', async (data: BackgroundTypeWallpaper) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundTypeWallpaper).
