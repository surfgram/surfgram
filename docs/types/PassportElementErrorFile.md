# PassportElementErrorFile

Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| source | `string` | Yes | Error source, must be file |
| type | `string` | Yes | The section of the user's Telegram Passport which has the issue, one of “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration” |
| fileHash | `string` | Yes | Base64-encoded file hash |
| message | `string` | Yes | Error message |


## Event Handlers

You can listen for PassportElementErrorFile events using:

```typescript
// Type-specific handler
bot.onPassportElementErrorFile(async (passportelementerrorfile: PassportElementErrorFile) => {
  console.log('Received:', passportelementerrorfile);
});

// Generic handler
bot.on('passportelementerrorfile', async (data: PassportElementErrorFile) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementErrorFile).
