# BackgroundTypeFill

The background is automatically filled based on the selected colors.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the background, always “fill” |
| fill | `BackgroundFill` | Yes | The background fill |
| darkThemeDimming | `number` | Yes | Dimming of the background in dark themes, as a percentage; 0-100 |


## Event Handlers

You can listen for BackgroundTypeFill events using:

```typescript
// Type-specific handler
bot.onBackgroundTypeFill(async (backgroundtypefill: BackgroundTypeFill) => {
  console.log('Received:', backgroundtypefill);
});

// Generic handler
bot.on('backgroundtypefill', async (data: BackgroundTypeFill) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundTypeFill).
