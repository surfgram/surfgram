# BotAccessSettings

This object describes the access settings of a bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| isAccessRestricted | `boolean` | Yes | True, if only selected users can access the bot. The bot's owner can always access it. |
| addedUsers | `User[]` | No | Optional. The list of other users who have access to the bot if the access is restricted |

## Fluent Methods

The `BotAccessSettings` class has the following fluent methods that automatically inject contextual parameters:

### getManagedBotAccessSettings

Use this method to get the access settings of a managed bot. Returns a BotAccessSettings object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.addedUsers?.id` | User identifier of the managed bot whose access settings will be returned |


**Usage examples:**

1. Basic usage:

```typescript
const botaccesssettings = new BotAccessSettings(rawData, bot);
await botaccesssettings.getManagedBotAccessSettings();
```

2. In an event handler:

```typescript
bot.onBotAccessSettings(async (botaccesssettings: BotAccessSettings) => {
  // Auto-fills parameters from the botaccesssettings instance
  await botaccesssettings.getManagedBotAccessSettings();
});
```

**See also:** [getManagedBotAccessSettings API method](../methods/getManagedBotAccessSettings.md)

### setManagedBotAccessSettings

Use this method to change the access settings of a managed bot. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.addedUsers?.id` | User identifier of the managed bot whose access settings will be changed |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `isAccessRestricted` | `boolean` | Yes | Pass True, if only selected users can access the bot. The bot's owner can always access it. |
| `addedUserIds` | `number[]` | No | A JSON-serialized list of up to 10 identifiers of users who will have access to the bot in addition to its owner. Ignored if is\_access\_restricted is false. |

**Usage examples:**

1. Basic usage:

```typescript
const botaccesssettings = new BotAccessSettings(rawData, bot);
await botaccesssettings.setManagedBotAccessSettings(
  true,
  [123],
);
```

2. In an event handler:

```typescript
bot.onBotAccessSettings(async (botaccesssettings: BotAccessSettings) => {
  // Auto-fills parameters from the botaccesssettings instance
  await botaccesssettings.setManagedBotAccessSettings();
});
```

**See also:** [setManagedBotAccessSettings API method](../methods/setManagedBotAccessSettings.md)


## Event Handlers

You can listen for BotAccessSettings events using:

```typescript
// Type-specific handler
bot.onBotAccessSettings(async (botaccesssettings: BotAccessSettings) => {
  console.log('Received:', botaccesssettings);
  // Use fluent methods
  await botaccesssettings.getManagedBotAccessSettings(...);
});

// Generic handler
bot.on('botaccesssettings', async (data: BotAccessSettings) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotAccessSettings).
