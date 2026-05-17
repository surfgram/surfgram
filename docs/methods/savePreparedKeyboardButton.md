# savePreparedKeyboardButton

Stores a keyboard button that can be used by a user within a Mini App. Returns a PreparedKeyboardButton object.

## Fluent Usage

This method is available as a fluent method on the following types:

### KeyboardButton (1 methods)

**Available methods:** `savePreparedKeyboardButton`

**Auto-filled parameters:** userId

[View KeyboardButton documentation with fluent methods](../types/KeyboardButton.md)

### PreparedKeyboardButton (1 methods)

**Available methods:** `savePreparedKeyboardButton`


[View PreparedKeyboardButton documentation with fluent methods](../types/PreparedKeyboardButton.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user that can use the button |
| `button` | `KeyboardButton` | Yes | A JSON-serialized object describing the button to be saved. The button must be of the type request\_users, request\_chat, or request\_managed\_bot. |


## Usage Example

```typescript
// When you already have a KeyboardButton instance
bot.onKeyboardButton(async (keyboardbutton: KeyboardButton) => {
  await keyboardbutton.savePreparedKeyboardButton();
});

// With filtering
bot.onKeyboardButton((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#savePreparedKeyboardButton).
