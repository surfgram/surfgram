# setBusinessAccountProfilePhoto

Changes the profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### File (5 methods)

**Available methods:** `getUserProfilePhotos`, `getFile`, `setBusinessAccountProfilePhoto`, `removeBusinessAccountProfilePhoto`, `uploadStickerFile`


[View File documentation with fluent methods](../types/File.md)

### InputProfilePhoto (22 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `setBusinessAccountProfilePhoto`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputProfilePhoto documentation with fluent methods](../types/InputProfilePhoto.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `photo` | `InputProfilePhoto` | Yes | The new profile photo to set |
| `isPublic` | `boolean` | No | Pass True to set the public photo, which will be visible even if the main photo is hidden by the business account's privacy settings. An account can have only one public photo. |


## Usage Example

```typescript
// When you already have a File instance
bot.onFile(async (file: File) => {
  await file.setBusinessAccountProfilePhoto();
});

// With filtering
bot.onFile((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setBusinessAccountProfilePhoto).
