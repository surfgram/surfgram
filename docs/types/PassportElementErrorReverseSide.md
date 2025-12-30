# PassportElementErrorReverseSide

Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.

## Fields

| Name     | Type     | Required | Description                                                                                               |
| :------- | :------- | :------: | :-------------------------------------------------------------------------------------------------------- |
| source   | `string` |   Yes    | Error source, must be reverse_side                                                                        |
| type     | `string` |   Yes    | The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card” |
| fileHash | `string` |   Yes    | Base64-encoded hash of the file with the reverse side of the document                                     |
| message  | `string` |   Yes    | Error message                                                                                             |

## Event Handlers

You can listen for PassportElementErrorReverseSide events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorReverseSide(
  async (passportelementerrorreverseside: PassportElementErrorReverseSide) => {
    console.log('Received:', passportelementerrorreverseside);
  }
);

// Generic handler
bot.on('passportelementerrorreverseside', async (data: PassportElementErrorReverseSide) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorReverseSide).
