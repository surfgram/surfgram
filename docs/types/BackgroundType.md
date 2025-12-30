# BackgroundType

This object describes the type of a background. Currently, it can be one of

## Fields

| Name             | Type             | Required | Description                                                      |
| :--------------- | :--------------- | :------: | :--------------------------------------------------------------- |
| type             | `string`         |   Yes    | Type of the background, always “fill”                            |
| fill             | `BackgroundFill` |   Yes    | The background fill                                              |
| darkThemeDimming | `number`         |   Yes    | Dimming of the background in dark themes, as a percentage; 0-100 |

## Event Handlers

You can listen for BackgroundType events using:

```typescript
// Type-specific handler
bot.onBackgroundType(async (backgroundtype: BackgroundType) => {
  console.log('Received:', backgroundtype);
});

// Generic handler
bot.on('backgroundtype', async (data: BackgroundType) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundType).
