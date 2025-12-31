# removeUserVerification

Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### User (8 methods)

**Available methods:** `getUserProfilePhotos`, `setUserEmojiStatus`, `getUserChatBoosts`, `verifyUser`, `removeUserVerification`, `setBusinessAccountUsername`, `getUserGifts`, `editUserStarSubscription`

**Auto-filled parameters:** userId

[View User documentation with fluent methods](../types/User.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user |


## Usage Example

```typescript
// When you already have a User instance
bot.onUser(async (user: User) => {
  await user.removeUserVerification();
});

// With filtering
bot.onUser((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#removeUserVerification).
