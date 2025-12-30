# BackgroundFill

This object describes the way a background is filled based on the selected colors. Currently, it can be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the background fill, always “solid” |
| color | `number` | Yes | The color of the background fill in the RGB24 format |


## Event Handlers

You can listen for BackgroundFill events using:

```typescript
// Type-specific handler
bot.onBackgroundFill(async (backgroundfill: BackgroundFill) => {
  console.log('Received:', backgroundfill);
});

// Generic handler
bot.on('backgroundfill', async (data: BackgroundFill) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundFill).
