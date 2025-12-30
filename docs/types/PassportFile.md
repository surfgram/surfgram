# PassportFile

This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don&#39;t exceed 10MB.

## Fields

| Name         | Type     | Required | Description                                                                                                                                      |
| :----------- | :------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| fileId       | `string` |   Yes    | Identifier for this file, which can be used to download or reuse the file                                                                        |
| fileUniqueId | `string` |   Yes    | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file. |
| fileSize     | `number` |   Yes    | File size in bytes                                                                                                                               |
| fileDate     | `number` |   Yes    | Unix time when the file was uploaded                                                                                                             |

## Event Handlers

You can listen for PassportFile events using:

```typescript
// Type-specific handler
bot.onPassportFile(async (passportfile: PassportFile) => {
  console.log('Received:', passportfile);
});

// Generic handler
bot.on('passportfile', async (data: PassportFile) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportFile).
