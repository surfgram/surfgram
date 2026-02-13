# UserProfileAudios

This object represents the audios displayed on a user&#39;s profile.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| totalCount | `number` | Yes | Total number of profile audios for the target user |
| audios | `Audio[]` | Yes | Requested profile audios |

## Fluent Methods

The `UserProfileAudios` class has the following fluent methods that automatically inject contextual parameters:

### getUserProfileAudios

Use this method to get a list of profile audios for a user. Returns a UserProfileAudios object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this?.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Sequential number of the first audio to be returned. By default, all audios are returned. |
| `limit` | `number` | No | Limits the number of audios to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const userprofileaudios = new UserProfileAudios(rawData, bot);
await userprofileaudios.getUserProfileAudios(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onUserProfileAudios(async (userprofileaudios: UserProfileAudios) => {
  // Auto-fills parameters from the userprofileaudios instance
  await userprofileaudios.getUserProfileAudios();
});
```

**See also:** [getUserProfileAudios API method](../methods/getUserProfileAudios.md)


## Event Handlers

You can listen for UserProfileAudios events using:

```typescript
// Type-specific handler
bot.onUserProfileAudios(async (userprofileaudios: UserProfileAudios) => {
  console.log('Received:', userprofileaudios);
  // Use fluent methods
  await userprofileaudios.getUserProfileAudios(...);
});

// Generic handler
bot.on('userprofileaudios', async (data: UserProfileAudios) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#UserProfileAudios).
