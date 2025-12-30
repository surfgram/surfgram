# PassportElementErrorTranslationFiles

Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| source | `string` | Yes | Error source, must be translation\_files |
| type | `string` | Yes | Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” |
| fileHashes | `string[]` | Yes | List of base64-encoded file hashes |
| message | `string` | Yes | Error message |


## Event Handlers

You can listen for PassportElementErrorTranslationFiles events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorTranslationFiles(async (passportelementerrortranslationfiles: PassportElementErrorTranslationFiles) => {
  console.log('Received:', passportelementerrortranslationfiles);
});

// Generic handler
bot.on('passportelementerrortranslationfiles', async (data: PassportElementErrorTranslationFiles) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorTranslationFiles).
