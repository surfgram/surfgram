# removeBusinessAccountProfilePhoto

Removes the current profile photo of a managed business account. Requires the can\_edit\_profile\_photo business bot right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### File (8 methods)

**Available methods:** `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `setMyProfilePhoto`, `removeMyProfilePhoto`, `setBusinessAccountProfilePhoto`, `removeBusinessAccountProfilePhoto`, `uploadStickerFile`


[View File documentation with fluent methods](../types/File.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `isPublic` | `boolean` | No | Pass True to remove the public photo, which is visible even if the main photo is hidden by the business account's privacy settings. After the main photo is removed, the previous profile photo \(if present\) becomes the main photo. |


## Usage Example

```typescript
// When you already have a File instance
bot.onFile(async (file: File) => {
  await file.removeBusinessAccountProfilePhoto();
});

// With filtering
bot.onFile((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#removeBusinessAccountProfilePhoto).
