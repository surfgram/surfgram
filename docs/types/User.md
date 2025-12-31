# User

This object represents a Telegram user or bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `number` | Yes | Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. |
| isBot | `boolean` | Yes | True, if this user is a bot |
| firstName | `string` | Yes | User's or bot's first name |
| lastName | `string` | No | Optional. User's or bot's last name |
| username | `string` | No | Optional. User's or bot's username |
| languageCode | `string` | No | Optional. IETF language tag of the user's language |
| isPremium | `boolean` | No | Optional. True, if this user is a Telegram Premium user |
| addedToAttachmentMenu | `boolean` | No | Optional. True, if this user added the bot to the attachment menu |
| canJoinGroups | `boolean` | No | Optional. True, if the bot can be invited to groups. Returned only in getMe. |
| canReadAllGroupMessages | `boolean` | No | Optional. True, if privacy mode is disabled for the bot. Returned only in getMe. |
| supportsInlineQueries | `boolean` | No | Optional. True, if the bot supports inline queries. Returned only in getMe. |
| canConnectToBusiness | `boolean` | No | Optional. True, if the bot can be connected to a Telegram Business account to receive its messages. Returned only in getMe. |
| hasMainWebApp | `boolean` | No | Optional. True, if the bot has a main Web App. Returned only in getMe. |

## Fluent Methods

The `User` class has the following fluent methods that automatically inject contextual parameters:

### getUserProfilePhotos

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Sequential number of the first photo to be returned. By default, all photos are returned. |
| `limit` | `number` | No | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.getUserProfilePhotos(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.getUserProfilePhotos();
});
```

**See also:** [getUserProfilePhotos API method](../methods/getUserProfilePhotos.md)

### setUserEmojiStatus

Changes the emoji status for a given user that previously allowed the bot to manage their emoji status via the Mini App method requestEmojiStatusAccess. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `emojiStatusCustomEmojiId` | `string` | No | Custom emoji identifier of the emoji status to set. Pass an empty string to remove the status. |
| `emojiStatusExpirationDate` | `number` | No | Expiration date of the emoji status, if any |

**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.setUserEmojiStatus(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.setUserEmojiStatus();
});
```

**See also:** [setUserEmojiStatus API method](../methods/setUserEmojiStatus.md)

### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the chat or username of the channel \(in the format @channelusername\) |

**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.getUserChatBoosts(
  123,
);
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.getUserChatBoosts();
});
```

**See also:** [getUserChatBoosts API method](../methods/getUserChatBoosts.md)

### verifyUser

Verifies a user on behalf of the organization which is represented by the bot. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `customDescription` | `string` | No | Custom description for the verification; 0-70 characters. Must be empty if the organization isn't allowed to provide a custom verification description. |

**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.verifyUser(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.verifyUser();
});
```

**See also:** [verifyUser API method](../methods/verifyUser.md)

### removeUserVerification

Removes verification from a user who is currently verified on behalf of the organization represented by the bot. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.id` | Unique identifier of the target user |


**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.removeUserVerification();
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.removeUserVerification();
});
```

**See also:** [removeUserVerification API method](../methods/removeUserVerification.md)

### setBusinessAccountUsername

Changes the username of a managed business account. Requires the can\_change\_username business bot right. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `username` | `string` | No | The new value of the username for the business account; 0-32 characters |

**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.setBusinessAccountUsername(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.setBusinessAccountUsername();
});
```

**See also:** [setBusinessAccountUsername API method](../methods/setBusinessAccountUsername.md)

### editUserStarSubscription

Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.id` | Identifier of the user whose subscription will be edited |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `telegramPaymentChargeId` | `string` | Yes | Telegram payment identifier for the subscription |
| `isCanceled` | `boolean` | Yes | Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot. |

**Usage examples:**

1. Basic usage:

```typescript
const user = new User(rawData, bot);
await user.editUserStarSubscription(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onUser(async (user: User) => {
  // Auto-fills parameters from the user instance
  await user.editUserStarSubscription();
});
```

**See also:** [editUserStarSubscription API method](../methods/editUserStarSubscription.md)


## Event Handlers

You can listen for User events using:

```typescript
// Type-specific handler
bot.onUser(async (user: User) => {
  console.log('Received:', user);
  // Use fluent methods
  await user.getUserProfilePhotos(...);
});

// Generic handler
bot.on('user', async (data: User) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#User).
