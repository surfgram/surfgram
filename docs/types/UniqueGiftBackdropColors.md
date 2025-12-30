# UniqueGiftBackdropColors

This object describes the colors of the backdrop of a unique gift.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| centerColor | `number` | Yes | The color in the center of the backdrop in RGB format |
| edgeColor | `number` | Yes | The color on the edges of the backdrop in RGB format |
| symbolColor | `number` | Yes | The color to be applied to the symbol in RGB format |
| textColor | `number` | Yes | The color for the text on the backdrop in RGB format |


## Event Handlers

You can listen for UniqueGiftBackdropColors events using:

```typescript
// Type-specific handler
bot.onUniqueGiftBackdropColors(async (uniquegiftbackdropcolors: UniqueGiftBackdropColors) => {
  console.log('Received:', uniquegiftbackdropcolors);
});

// Generic handler
bot.on('uniquegiftbackdropcolors', async (data: UniqueGiftBackdropColors) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGiftBackdropColors).
