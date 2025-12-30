# BackgroundFillGradient

The background is a gradient fill.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the background fill, always “gradient” |
| topColor | `number` | Yes | Top color of the gradient in the RGB24 format |
| bottomColor | `number` | Yes | Bottom color of the gradient in the RGB24 format |
| rotationAngle | `number` | Yes | Clockwise rotation angle of the background fill in degrees; 0-359 |


## Event Handlers

You can listen for BackgroundFillGradient events using:

```typescript
// Type-specific handler
bot.onBackgroundFillGradient(async (backgroundfillgradient: BackgroundFillGradient) => {
  console.log('Received:', backgroundfillgradient);
});

// Generic handler
bot.on('backgroundfillgradient', async (data: BackgroundFillGradient) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundFillGradient).
