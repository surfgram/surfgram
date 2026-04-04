# KeyboardButton

This object represents one button of the reply keyboard. At most one of the fields other than text, icon\_custom\_emoji\_id, and style must be used to specify the type of the button. For simple text buttons, String can be used instead of this object to specify the button text.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| text | `string` | Yes | Text of the button. If none of the fields other than text, icon\_custom\_emoji\_id, and style are used, it will be sent as a message when the button is pressed |
| iconCustomEmojiId | `string` | No | Optional. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on Fragment or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription. |
| style | `string` | No | Optional. Style of the button. Must be one of “danger” \(red\), “success” \(green\) or “primary” \(blue\). If omitted, then an app-specific style is used. |
| requestUsers | `KeyboardButtonRequestUsers` | No | Optional. If specified, pressing the button will open a list of suitable users. Identifiers of selected users will be sent to the bot in a “users\_shared” service message. Available in private chats only. |
| requestChat | `KeyboardButtonRequestChat` | No | Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a “chat\_shared” service message. Available in private chats only. |
| requestManagedBot | `KeyboardButtonRequestManagedBot` | No | Optional. If specified, pressing the button will ask the user to create and share a bot that will be managed by the current bot. Available for bots that enabled management of other bots in the @BotFather Mini App. Available in private chats only. |
| requestContact | `boolean` | No | Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only. |
| requestLocation | `boolean` | No | Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only. |
| requestPoll | `KeyboardButtonPollType` | No | Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only. |
| webApp | `WebAppInfo` | No | Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a “web\_app\_data” service message. Available in private chats only. |

## Fluent Methods

The `KeyboardButton` class has the following fluent methods that automatically inject contextual parameters:

### savePreparedKeyboardButton

Stores a keyboard button that can be used by a user within a Mini App. Returns a PreparedKeyboardButton object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.requestUsers?.id` | Unique identifier of the target user that can use the button |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `button` | `KeyboardButton` | Yes | A JSON-serialized object describing the button to be saved. The button must be of the type request\_users, request\_chat, or request\_managed\_bot |

**Usage examples:**

1. Basic usage:

```typescript
const keyboardbutton = new KeyboardButton(rawData, bot);
await keyboardbutton.savePreparedKeyboardButton(
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onKeyboardButton(async (keyboardbutton: KeyboardButton) => {
  // Auto-fills parameters from the keyboardbutton instance
  await keyboardbutton.savePreparedKeyboardButton();
});
```

**See also:** [savePreparedKeyboardButton API method](../methods/savePreparedKeyboardButton.md)


## Event Handlers

You can listen for KeyboardButton events using:

```typescript
// Type-specific handler
bot.onKeyboardButton(async (keyboardbutton: KeyboardButton) => {
  console.log('Received:', keyboardbutton);
  // Use fluent methods
  await keyboardbutton.savePreparedKeyboardButton(...);
});

// Generic handler
bot.on('keyboardbutton', async (data: KeyboardButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#KeyboardButton).
