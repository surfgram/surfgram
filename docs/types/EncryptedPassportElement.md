# EncryptedPassportElement

Describes documents or other Telegram Passport elements shared with the bot by the user.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Element type. One of “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “address”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration”, “temporary\_registration”, “phone\_number”, “email”. |
| data | `string` | No | Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal\_details”, “passport”, “driver\_license”, “identity\_card”, “internal\_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials. |
| phoneNumber | `string` | No | Optional. User's verified phone number; available only for “phone\_number” type |
| email | `string` | No | Optional. User's verified email address; available only for “email” type |
| files | `PassportFile[]` | No | Optional. Array of encrypted files with documents provided by the user; available only for “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. |
| frontSide | `PassportFile` | No | Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver\_license”, “identity\_card” and “internal\_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. |
| reverseSide | `PassportFile` | No | Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver\_license” and “identity\_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials. |
| selfie | `PassportFile` | No | Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver\_license”, “identity\_card” and “internal\_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials. |
| translation | `PassportFile[]` | No | Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver\_license”, “identity\_card”, “internal\_passport”, “utility\_bill”, “bank\_statement”, “rental\_agreement”, “passport\_registration” and “temporary\_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. |
| hash | `string` | Yes | Base64-encoded element hash for using in PassportElementErrorUnspecified |


## Event Handlers

You can listen for EncryptedPassportElement events using:

```typescript
// Type-specific handler
bot.onEncryptedPassportElement(async (encryptedpassportelement: EncryptedPassportElement) => {
  console.log('Received:', encryptedpassportelement);
});

// Generic handler
bot.on('encryptedpassportelement', async (data: EncryptedPassportElement) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#EncryptedPassportElement).
