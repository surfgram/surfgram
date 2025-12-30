# PassportData

Describes Telegram Passport data shared with the bot by the user.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| data | `EncryptedPassportElement[]` | Yes | Array with information about documents and other Telegram Passport elements that was shared with the bot |
| credentials | `EncryptedCredentials` | Yes | Encrypted credentials required to decrypt the data |

## Fluent Methods

The `PassportData` class has the following fluent methods that automatically inject contextual parameters:

### setPassportDataErrors

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed \(the contents of the field for which you returned the error must change\). Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier |
| `errors` | `PassportElementError[]` | Yes | A JSON-serialized array describing the errors |

**Usage examples:**

1. Basic usage:

```typescript
const passportdata = new PassportData(rawData, bot);
await passportdata.setPassportDataErrors(
  123,
  [{} as any],
);
```

2. In an event handler:

```typescript
bot.onPassportData(async (passportdata: PassportData) => {
  // Auto-fills parameters from the passportdata instance
  await passportdata.setPassportDataErrors();
});
```

**See also:** [setPassportDataErrors API method](../methods/setPassportDataErrors.md)


## Event Handlers

You can listen for PassportData events using:

```typescript
// Type-specific handler
bot.onPassportData(async (passportdata: PassportData) => {
  console.log('Received:', passportdata);
  // Use fluent methods
  await passportdata.setPassportDataErrors(...);
});

// Generic handler
bot.on('passportdata', async (data: PassportData) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportData).
