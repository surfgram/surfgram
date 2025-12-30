# PassportElementError

This object represents an error in the Telegram Passport element which was submitted that should be resolved by the user. It should be one of:

## Fields

| Name      | Type     | Required | Description                                                                                                                                                               |
| :-------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| source    | `string` |   Yes    | Error source, must be data                                                                                                                                                |
| type      | `string` |   Yes    | The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address” |
| fieldName | `string` |   Yes    | Name of the data field which has the error                                                                                                                                |
| dataHash  | `string` |   Yes    | Base64-encoded data hash                                                                                                                                                  |
| message   | `string` |   Yes    | Error message                                                                                                                                                             |

## Fluent Methods

The `PassportElementError` class has the following fluent methods that automatically inject contextual parameters:

### setPassportDataErrors

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed \(the contents of the field for which you returned the error must change\). Returns True on success.

**Required parameters:**

| Parameter | Type                     | Required | Description                                   |
| :-------- | :----------------------- | :------: | :-------------------------------------------- |
| `userId`  | `number`                 |   Yes    | User identifier                               |
| `errors`  | `PassportElementError[]` |   Yes    | A JSON-serialized array describing the errors |

**Usage examples:**

1. Basic usage:

```typescript
const passportelementerror = new PassportElementError(rawData, bot);
await passportelementerror.setPassportDataErrors(123, [{} as any]);
```

2. In an event handler:

```typescript
bot.onPassportElementError(async (passportelementerror: PassportElementError) => {
  // Auto-fills parameters from the passportelementerror instance
  await passportelementerror.setPassportDataErrors();
});
```

**See also:** [setPassportDataErrors API method](../methods/setPassportDataErrors.md)

## Event Handlers

You can listen for PassportElementError events using:

```typescript
// Type-specific handler
bot.onPassportElementError(async (passportelementerror: PassportElementError) => {
  console.log('Received:', passportelementerror);
  // Use fluent methods
  await passportelementerror.setPassportDataErrors(...);
});

// Generic handler
bot.on('passportelementerror', async (data: PassportElementError) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PassportElementError).
