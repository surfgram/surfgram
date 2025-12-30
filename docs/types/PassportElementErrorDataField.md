# PassportElementErrorDataField

Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field&#39;s value changes.

## Fields

| Name      | Type     | Required | Description                                                                                                                                                               |
| :-------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| source    | `string` |   Yes    | Error source, must be data                                                                                                                                                |
| type      | `string` |   Yes    | The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” |
| fieldName | `string` |   Yes    | Name of the data field which has the error                                                                                                                                |
| dataHash  | `string` |   Yes    | Base64-encoded data hash                                                                                                                                                  |
| message   | `string` |   Yes    | Error message                                                                                                                                                             |

## Event Handlers

You can listen for PassportElementErrorDataField events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorDataField(
  async (passportelementerrordatafield: PassportElementErrorDataField) => {
    console.log('Received:', passportelementerrordatafield);
  }
);

// Generic handler
bot.on('passportelementerrordatafield', async (data: PassportElementErrorDataField) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorDataField).
