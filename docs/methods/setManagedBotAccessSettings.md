# setManagedBotAccessSettings

Use this method to change the access settings of a managed bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### BotAccessSettings (2 methods)

**Available methods:** `getManagedBotAccessSettings`, `setManagedBotAccessSettings`

**Auto-filled parameters:** userId

[View BotAccessSettings documentation with fluent methods](../types/BotAccessSettings.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | User identifier of the managed bot whose access settings will be changed |
| `isAccessRestricted` | `boolean` | Yes | Pass True, if only selected users can access the bot. The bot's owner can always access it. |
| `addedUserIds` | `number[]` | No | A JSON-serialized list of up to 10 identifiers of users who will have access to the bot in addition to its owner. Ignored if is\_access\_restricted is false. |


## Usage Example

```typescript
// When you already have a BotAccessSettings instance
bot.onBotAccessSettings(async (botaccesssettings: BotAccessSettings) => {
  await botaccesssettings.setManagedBotAccessSettings();
});

// With filtering
bot.onBotAccessSettings((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setManagedBotAccessSettings).
