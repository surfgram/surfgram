# removeMyProfilePhoto

Removes the profile photo of the bot. Requires no parameters. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### File (8 methods)

**Available methods:** `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `setMyProfilePhoto`, `removeMyProfilePhoto`, `setBusinessAccountProfilePhoto`, `removeBusinessAccountProfilePhoto`, `uploadStickerFile`


[View File documentation with fluent methods](../types/File.md)

### MenuButton (3 methods)

**Available methods:** `removeMyProfilePhoto`, `setChatMenuButton`, `getChatMenuButton`


[View MenuButton documentation with fluent methods](../types/MenuButton.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` | No | Unique identifier for the target private chat. If not specified, default bot's menu button will be changed |
| `menuButton` | `MenuButton` | No | A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault |


## Usage Example

```typescript
// When you already have a File instance
bot.onFile(async (file: File) => {
  await file.removeMyProfilePhoto();
});

// With filtering
bot.onFile((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#removeMyProfilePhoto).
