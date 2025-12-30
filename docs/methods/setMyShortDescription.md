# setMyShortDescription

Use this method to change the bot&#39;s short description, which is shown on the bot&#39;s profile page and is sent together with the link when users share the bot. Returns True on success.

## Parameters

| Parameter          | Type     | Required | Description                                                                                                                                                    |
| :----------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shortDescription` | `string` |    No    | New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.                    |
| `languageCode`     | `string` |    No    | A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description. |

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setMyShortDescription).
