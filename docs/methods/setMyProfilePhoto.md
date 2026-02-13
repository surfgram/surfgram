# setMyProfilePhoto

Changes the profile photo of the bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### File (8 methods)

**Available methods:** `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `setMyProfilePhoto`, `removeMyProfilePhoto`, `setBusinessAccountProfilePhoto`, `removeBusinessAccountProfilePhoto`, `uploadStickerFile`


[View File documentation with fluent methods](../types/File.md)

### InputProfilePhoto (24 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `setMyProfilePhoto`, `sendGift`, `setBusinessAccountProfilePhoto`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputProfilePhoto documentation with fluent methods](../types/InputProfilePhoto.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `photo` | `InputProfilePhoto` | Yes | The new profile photo to set |


## Usage Example

```typescript
// When you already have a File instance
bot.onFile(async (file: File) => {
  await file.setMyProfilePhoto();
});

// With filtering
bot.onFile((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setMyProfilePhoto).
