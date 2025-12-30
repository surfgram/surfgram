# BusinessIntro

Contains information about the start page settings of a Telegram Business account.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| title | `string` | No | Optional. Title text of the business intro |
| message | `string` | No | Optional. Message text of the business intro |
| sticker | `Sticker` | No | Optional. Sticker of the business intro |


## Event Handlers

You can listen for BusinessIntro events using:

```typescript
// Type-specific handler
bot.onBusinessIntro(async (businessintro: BusinessIntro) => {
  console.log('Received:', businessintro);
});

// Generic handler
bot.on('businessintro', async (data: BusinessIntro) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BusinessIntro).
