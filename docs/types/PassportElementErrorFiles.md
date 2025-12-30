# PassportElementErrorFiles

Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.

## Fields

| Name       | Type       | Required | Description                                                                                                                                                                     |
| :--------- | :--------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| source     | `string`   |   Yes    | Error source, must be files                                                                                                                                                     |
| type       | `string`   |   Yes    | The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration” |
| fileHashes | `string[]` |   Yes    | List of base64-encoded file hashes                                                                                                                                              |
| message    | `string`   |   Yes    | Error message                                                                                                                                                                   |

## Event Handlers

You can listen for PassportElementErrorFiles events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorFiles(async (passportelementerrorfiles: PassportElementErrorFiles) => {
  console.log('Received:', passportelementerrorfiles);
});

// Generic handler
bot.on('passportelementerrorfiles', async (data: PassportElementErrorFiles) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorFiles).
