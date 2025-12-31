# UniqueGiftColors

This object contains information about the color scheme for a user&#39;s name, message replies and link previews based on a unique gift.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| modelCustomEmojiId | `string` | Yes | Custom emoji identifier of the unique gift's model |
| symbolCustomEmojiId | `string` | Yes | Custom emoji identifier of the unique gift's symbol |
| lightThemeMainColor | `number` | Yes | Main color used in light themes; RGB format |
| lightThemeOtherColors | `number[]` | Yes | List of 1-3 additional colors used in light themes; RGB format |
| darkThemeMainColor | `number` | Yes | Main color used in dark themes; RGB format |
| darkThemeOtherColors | `number[]` | Yes | List of 1-3 additional colors used in dark themes; RGB format |


## Event Handlers

You can listen for UniqueGiftColors events using:

```typescript
// Type-specific handler
bot.onUniqueGiftColors(async (uniquegiftcolors: UniqueGiftColors) => {
  console.log('Received:', uniquegiftcolors);
});

// Generic handler
bot.on('uniquegiftcolors', async (data: UniqueGiftColors) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UniqueGiftColors).
