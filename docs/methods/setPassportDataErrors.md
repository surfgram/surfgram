# setPassportDataErrors

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed \(the contents of the field for which you returned the error must change\). Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### PassportData (1 methods)

**Available methods:** `setPassportDataErrors`


[View PassportData documentation with fluent methods](../types/PassportData.md)

### PassportElementError (1 methods)

**Available methods:** `setPassportDataErrors`


[View PassportElementError documentation with fluent methods](../types/PassportElementError.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier |
| `errors` | `PassportElementError[]` | Yes | A JSON-serialized array describing the errors |


## Usage Example

```typescript
// When you already have a PassportData instance
bot.onPassportData(async (passportdata: PassportData) => {
  await passportdata.setPassportDataErrors();
});

// With filtering
bot.onPassportData((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setPassportDataErrors).
