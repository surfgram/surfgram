# setBusinessAccountUsername

Changes the username of a managed business account. Requires the can\_change\_username business bot right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### User (9 methods)

**Available methods:** `getUserProfilePhotos`, `getUserProfileAudios`, `setUserEmojiStatus`, `getUserChatBoosts`, `verifyUser`, `removeUserVerification`, `setBusinessAccountUsername`, `getUserGifts`, `editUserStarSubscription`


[View User documentation with fluent methods](../types/User.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `username` | `string` | No | The new value of the username for the business account; 0-32 characters |


## Usage Example

```typescript
// When you already have a User instance
bot.onUser(async (user: User) => {
  await user.setBusinessAccountUsername();
});

// With filtering
bot.onUser((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setBusinessAccountUsername).
