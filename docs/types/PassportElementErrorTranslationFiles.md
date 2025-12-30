# PassportElementErrorTranslationFiles

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.

## Fields

| Name       | Type       | Required | Description                                                                                                                                                                                                                                             |
| :--------- | :--------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| source     | `string`   |   Yes    | Error source, must be translation_files                                                                                                                                                                                                                 |
| type       | `string`   |   Yes    | Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” |
| fileHashes | `string[]` |   Yes    | List of base64-encoded file hashes                                                                                                                                                                                                                      |
| message    | `string`   |   Yes    | Error message                                                                                                                                                                                                                                           |

## Event Handlers

You can listen for PassportElementErrorTranslationFiles events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorTranslationFiles(
  async (passportelementerrortranslationfiles: PassportElementErrorTranslationFiles) => {
    console.log('Received:', passportelementerrortranslationfiles);
  }
);

// Generic handler
bot.on(
  'passportelementerrortranslationfiles',
  async (data: PassportElementErrorTranslationFiles) => {
    // Same as above
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorTranslationFiles).
