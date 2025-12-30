# BackgroundFillFreeformGradient

The background is a freeform gradient that rotates after every message in the chat.

## Fields

| Name   | Type       | Required | Description                                                                                          |
| :----- | :--------- | :------: | :--------------------------------------------------------------------------------------------------- |
| type   | `string`   |   Yes    | Type of the background fill, always “freeform_gradient”                                              |
| colors | `number[]` |   Yes    | A list of the 3 or 4 base colors that are used to generate the freeform gradient in the RGB24 format |

## Event Handlers

You can listen for BackgroundFillFreeformGradient events using:

```typescript
// Type-specific handler
bot.onBackgroundFillFreeformGradient(
  async (backgroundfillfreeformgradient: BackgroundFillFreeformGradient) => {
    console.log('Received:', backgroundfillfreeformgradient);
  }
);

// Generic handler
bot.on('backgroundfillfreeformgradient', async (data: BackgroundFillFreeformGradient) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundFillFreeformGradient).
