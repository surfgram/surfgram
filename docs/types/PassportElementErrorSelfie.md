# PassportElementErrorSelfie

Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| source | `string` | Yes | Error source, must be selfie |
| type | `string` | Yes | The section of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport” |
| fileHash | `string` | Yes | Base64-encoded hash of the file with the selfie |
| message | `string` | Yes | Error message |


## Event Handlers

You can listen for PassportElementErrorSelfie events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorSelfie(async (passportelementerrorselfie: PassportElementErrorSelfie) => {
  console.log('Received:', passportelementerrorselfie);
});

// Generic handler
bot.on('passportelementerrorselfie', async (data: PassportElementErrorSelfie) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorSelfie).
