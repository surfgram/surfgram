# PreparedKeyboardButton

Describes a keyboard button to be used by a user of a Mini App.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Unique identifier of the keyboard button |

## Fluent Methods

The `PreparedKeyboardButton` class has the following fluent methods that automatically inject contextual parameters:

### savePreparedKeyboardButton

Stores a keyboard button that can be used by a user within a Mini App. Returns a PreparedKeyboardButton object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user that can use the button |
| `button` | `KeyboardButton` | Yes | A JSON-serialized object describing the button to be saved. The button must be of the type request\_users, request\_chat, or request\_managed\_bot |

**Usage examples:**

1. Basic usage:

```typescript
const preparedkeyboardbutton = new PreparedKeyboardButton(rawData, bot);
await preparedkeyboardbutton.savePreparedKeyboardButton(
  123,
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onPreparedKeyboardButton(async (preparedkeyboardbutton: PreparedKeyboardButton) => {
  // Auto-fills parameters from the preparedkeyboardbutton instance
  await preparedkeyboardbutton.savePreparedKeyboardButton();
});
```

**See also:** [savePreparedKeyboardButton API method](../methods/savePreparedKeyboardButton.md)


## Event Handlers

You can listen for PreparedKeyboardButton events using:

```typescript
// Type-specific handler
bot.onPreparedKeyboardButton(async (preparedkeyboardbutton: PreparedKeyboardButton) => {
  console.log('Received:', preparedkeyboardbutton);
  // Use fluent methods
  await preparedkeyboardbutton.savePreparedKeyboardButton(...);
});

// Generic handler
bot.on('preparedkeyboardbutton', async (data: PreparedKeyboardButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PreparedKeyboardButton).
