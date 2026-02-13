# InlineKeyboardButton

This object represents one button of an inline keyboard. Exactly one of the fields other than text, icon\_custom\_emoji\_id, and style must be used to specify the type of the button.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| text | `string` | Yes | Label text on the button |
| iconCustomEmojiId | `string` | No | Optional. Unique identifier of the custom emoji shown before the text of the button. Can only be used by bots that purchased additional usernames on Fragment or in the messages directly sent by the bot to private, group and supergroup chats if the owner of the bot has a Telegram Premium subscription. |
| style | `string` | No | Optional. Style of the button. Must be one of “danger” \(red\), “success” \(green\) or “primary” \(blue\). If omitted, then an app-specific style is used. |
| url | `string` | No | Optional. HTTP or tg:// URL to be opened when the button is pressed. Links tg://user?id=&lt;user\_id&gt; can be used to mention a user by their identifier without using a username, if this is allowed by their privacy settings. |
| callbackData | `string` | No | Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes |
| webApp | `WebAppInfo` | No | Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Available only in private chats between a user and the bot. Not supported for messages sent on behalf of a Telegram Business account. |
| loginUrl | `LoginUrl` | No | Optional. An HTTPS URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget. |
| switchInlineQuery | `string` | No | Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. May be empty, in which case just the bot's username will be inserted. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account. |
| switchInlineQueryCurrentChat | `string` | No | Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. May be empty, in which case only the bot's username will be inserted.This offers a quick way for the user to open your bot in inline mode in the same chat - good for selecting something from multiple options. Not supported in channels and for messages sent in channel direct messages chats and on behalf of a Telegram Business account. |
| switchInlineQueryChosenChat | `SwitchInlineQueryChosenChat` | No | Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type, open that chat and insert the bot's username and the specified inline query in the input field. Not supported for messages sent in channel direct messages chats and on behalf of a Telegram Business account. |
| copyText | `CopyTextButton` | No | Optional. Description of the button that copies the specified text to the clipboard. |
| callbackGame | `CallbackGame` | No | Optional. Description of the game that will be launched when the user presses the button.NOTE: This type of button must always be the first button in the first row. |
| pay | `boolean` | No | Optional. Specify True, to send a Pay button. Substrings “” and “XTR” in the buttons's text will be replaced with a Telegram Star icon.NOTE: This type of button must always be the first button in the first row and can only be used in invoice messages. |


## Event Handlers

You can listen for InlineKeyboardButton events using:

```typescript
// Type-specific handler
bot.onInlineKeyboardButton(async (inlinekeyboardbutton: InlineKeyboardButton) => {
  console.log('Received:', inlinekeyboardbutton);
});

// Generic handler
bot.on('inlinekeyboardbutton', async (data: InlineKeyboardButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineKeyboardButton).
