# EncryptedCredentials

Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| data | `string` | Yes | Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication |
| hash | `string` | Yes | Base64-encoded data hash for data authentication |
| secret | `string` | Yes | Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption |


## Event Handlers

You can listen for EncryptedCredentials events using:

```typescript
// Type-specific handler
bot.onEncryptedCredentials(async (encryptedcredentials: EncryptedCredentials) => {
  console.log('Received:', encryptedcredentials);
});

// Generic handler
bot.on('encryptedcredentials', async (data: EncryptedCredentials) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#EncryptedCredentials).
