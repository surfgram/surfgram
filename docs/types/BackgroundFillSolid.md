# BackgroundFillSolid

The background is filled using the selected color.

## Fields

| Name  | Type     | Required | Description                                          |
| :---- | :------- | :------: | :--------------------------------------------------- |
| type  | `string` |   Yes    | Type of the background fill, always “solid”          |
| color | `number` |   Yes    | The color of the background fill in the RGB24 format |

## Event Handlers

You can listen for BackgroundFillSolid events using:

```typescript
// Type-specific handler
bot.onBackgroundFillSolid(async (backgroundfillsolid: BackgroundFillSolid) => {
  console.log('Received:', backgroundfillsolid);
});

// Generic handler
bot.on('backgroundfillsolid', async (data: BackgroundFillSolid) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundFillSolid).
