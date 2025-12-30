# setMyDescription

Use this method to change the bot&#39;s description, which is shown in the chat with the bot if the chat is empty. Returns True on success.


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `description` | `string` | No | New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language. |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description. |



## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setMyDescription).
