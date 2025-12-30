# PassportElementErrorTranslationFile

Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| source | `string` | Yes | Error source, must be translation\_file |
| type | `string` | Yes | Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” |
| fileHash | `string` | Yes | Base64-encoded file hash |
| message | `string` | Yes | Error message |


## Event Handlers

You can listen for PassportElementErrorTranslationFile events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorTranslationFile(async (passportelementerrortranslationfile: PassportElementErrorTranslationFile) => {
  console.log('Received:', passportelementerrortranslationfile);
});

// Generic handler
bot.on('passportelementerrortranslationfile', async (data: PassportElementErrorTranslationFile) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorTranslationFile).
