# EncryptedPassportElement

Describes documents or other Telegram Passport elements shared with the bot by the user.

## Fields

| Name        | Type             | Required | Description                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------- | :--------------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | `string`         |   Yes    | Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.                                                                                                                                        |
| data        | `string`         |    No    | Optional. Base64-encoded encrypted Telegram Passport element data provided by the user; available only for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.                                                                                                |
| phoneNumber | `string`         |    No    | Optional. User's verified phone number; available only for “phone_number” type                                                                                                                                                                                                                                                                                                                   |
| email       | `string`         |    No    | Optional. User's verified email address; available only for “email” type                                                                                                                                                                                                                                                                                                                         |
| files       | `PassportFile[]` |    No    | Optional. Array of encrypted files with documents provided by the user; available only for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.                                                                                                    |
| frontSide   | `PassportFile`   |    No    | Optional. Encrypted file with the front side of the document, provided by the user; available only for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.                                                                                                                                |
| reverseSide | `PassportFile`   |    No    | Optional. Encrypted file with the reverse side of the document, provided by the user; available only for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.                                                                                                                                                               |
| selfie      | `PassportFile`   |    No    | Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available if requested for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.                                                                                                             |
| translation | `PassportFile[]` |    No    | Optional. Array of encrypted files with translated versions of documents provided by the user; available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials. |
| hash        | `string`         |   Yes    | Base64-encoded element hash for using in PassportElementErrorUnspecified                                                                                                                                                                                                                                                                                                                         |

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
