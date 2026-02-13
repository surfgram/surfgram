# setUserEmojiStatus

Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### User (9 methods)

**Available methods:** `getUserProfilePhotos`, `getUserProfileAudios`, `setUserEmojiStatus`, `getUserChatBoosts`, `verifyUser`, `removeUserVerification`, `setBusinessAccountUsername`, `getUserGifts`, `editUserStarSubscription`

**Auto-filled parameters:** userId

[View User documentation with fluent methods](../types/User.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |
| `emojiStatusCustomEmojiId` | `string` | No | Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status. |
| `emojiStatusExpirationDate` | `number` | No | Expiration date of the emoji status, if any |


## Usage Example

```typescript
// When you already have a User instance
bot.onUser(async (user: User) => {
  await user.setUserEmojiStatus();
});

// With filtering
bot.onUser((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setUserEmojiStatus).
