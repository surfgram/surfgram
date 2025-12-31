# GiftBackground

This object describes the background of a gift.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| centerColor | `number` | Yes | Center color of the background in RGB format |
| edgeColor | `number` | Yes | Edge color of the background in RGB format |
| textColor | `number` | Yes | Text color of the background in RGB format |


## Event Handlers

You can listen for GiftBackground events using:

```typescript
// Type-specific handler
bot.onGiftBackground(async (giftbackground: GiftBackground) => {
  console.log('Received:', giftbackground);
});

// Generic handler
bot.on('giftbackground', async (data: GiftBackground) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GiftBackground).
