# PassportElementErrorUnspecified

Represents an issue in an unspecified place. The error is considered resolved when new data is added.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| source | `string` | Yes | Error source, must be unspecified |
| type | `string` | Yes | Type of element of the user's Telegram Passport which has the issue |
| elementHash | `string` | Yes | Base64-encoded element hash |
| message | `string` | Yes | Error message |


## Event Handlers

You can listen for PassportElementErrorUnspecified events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorUnspecified(async (passportelementerrorunspecified: PassportElementErrorUnspecified) => {
  console.log('Received:', passportelementerrorunspecified);
});

// Generic handler
bot.on('passportelementerrorunspecified', async (data: PassportElementErrorUnspecified) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorUnspecified).
