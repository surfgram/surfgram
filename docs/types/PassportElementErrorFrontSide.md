# PassportElementErrorFrontSide

Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.

## Fields

| Name     | Type     | Required | Description                                                                                                                                |
| :------- | :------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------- |
| source   | `string` |   Yes    | Error source, must be front_side                                                                                                           |
| type     | `string` |   Yes    | The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport” |
| fileHash | `string` |   Yes    | Base64-encoded hash of the file with the front side of the document                                                                        |
| message  | `string` |   Yes    | Error message                                                                                                                              |

## Event Handlers

You can listen for PassportElementErrorFrontSide events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorFrontSide(
  async (passportelementerrorfrontside: PassportElementErrorFrontSide) => {
    console.log('Received:', passportelementerrorfrontside);
  }
);

// Generic handler
bot.on('passportelementerrorfrontside', async (data: PassportElementErrorFrontSide) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorFrontSide).
