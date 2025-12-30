# BotCommandScope

This object represents the scope to which bot commands are applied. Currently, the following 7 scopes are supported:

## Fields

| Name | Type     | Required | Description                 |
| :--- | :------- | :------: | :-------------------------- |
| type | `string` |   Yes    | Scope type, must be default |

## Fluent Methods

The `BotCommandScope` class has the following fluent methods that automatically inject contextual parameters:

### setMyCommands

Use this method to change the list of the bot&#39;s commands. See this manual for more details about bot commands. Returns True on success.

**Required parameters:**

| Parameter      | Type              | Required | Description                                                                                                                                                    |
| :------------- | :---------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `commands`     | `BotCommand[]`    |   Yes    | A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.                                     |
| `scope`        | `BotCommandScope` |    No    | A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.                                   |
| `languageCode` | `string`          |    No    | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |

**Usage examples:**

1. Basic usage:

```typescript
const botcommandscope = new BotCommandScope(rawData, bot);
await botcommandscope.setMyCommands([{} as any], {} as any);
```

2. In an event handler:

```typescript
bot.onBotCommandScope(async (botcommandscope: BotCommandScope) => {
  // Auto-fills parameters from the botcommandscope instance
  await botcommandscope.setMyCommands();
});
```

**See also:** [setMyCommands API method](../methods/setMyCommands.md)

### deleteMyCommands

Use this method to delete the list of the bot&#39;s commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.

**Required parameters:**

| Parameter      | Type              | Required | Description                                                                                                                                                    |
| :------------- | :---------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scope`        | `BotCommandScope` |    No    | A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.                                   |
| `languageCode` | `string`          |    No    | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |

**Usage examples:**

1. Basic usage:

```typescript
const botcommandscope = new BotCommandScope(rawData, bot);
await botcommandscope.deleteMyCommands({} as any, 'example text');
```

2. In an event handler:

```typescript
bot.onBotCommandScope(async (botcommandscope: BotCommandScope) => {
  // Auto-fills parameters from the botcommandscope instance
  await botcommandscope.deleteMyCommands();
});
```

**See also:** [deleteMyCommands API method](../methods/deleteMyCommands.md)

### getMyCommands

Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.

**Required parameters:**

| Parameter      | Type              | Required | Description                                                                              |
| :------------- | :---------------- | :------: | :--------------------------------------------------------------------------------------- |
| `scope`        | `BotCommandScope` |    No    | A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. |
| `languageCode` | `string`          |    No    | A two-letter ISO 639-1 language code or an empty string                                  |

**Usage examples:**

1. Basic usage:

```typescript
const botcommandscope = new BotCommandScope(rawData, bot);
await botcommandscope.getMyCommands({} as any, 'example text');
```

2. In an event handler:

```typescript
bot.onBotCommandScope(async (botcommandscope: BotCommandScope) => {
  // Auto-fills parameters from the botcommandscope instance
  await botcommandscope.getMyCommands();
});
```

**See also:** [getMyCommands API method](../methods/getMyCommands.md)

## Event Handlers

You can listen for BotCommandScope events using:

```typescript
// Type-specific handler
bot.onBotCommandScope(async (botcommandscope: BotCommandScope) => {
  console.log('Received:', botcommandscope);
  // Use fluent methods
  await botcommandscope.setMyCommands(...);
});

// Generic handler
bot.on('botcommandscope', async (data: BotCommandScope) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotCommandScope).
