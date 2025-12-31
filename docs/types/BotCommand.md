# BotCommand

This object represents a bot command.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| command | `string` | Yes | Text of the command; 1-32 characters. Can contain only lowercase English letters, digits and underscores. |
| description | `string` | Yes | Description of the command; 1-256 characters. |

## Fluent Methods

The `BotCommand` class has the following fluent methods that automatically inject contextual parameters:

### setMyCommands

Use this method to change the list of the bot&#39;s commands. See this manual for more details about bot commands. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `commands` | `BotCommand[]` | Yes | A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. |
| `scope` | `BotCommandScope` | No | A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |

**Usage examples:**

1. Basic usage:

```typescript
const botcommand = new BotCommand(rawData, bot);
await botcommand.setMyCommands(
  [{} as any],
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onBotCommand(async (botcommand: BotCommand) => {
  // Auto-fills parameters from the botcommand instance
  await botcommand.setMyCommands();
});
```

**See also:** [setMyCommands API method](../methods/setMyCommands.md)


## Event Handlers

You can listen for BotCommand events using:

```typescript
// Type-specific handler
bot.onBotCommand(async (botcommand: BotCommand) => {
  console.log('Received:', botcommand);
  // Use fluent methods
  await botcommand.setMyCommands(...);
});

// Generic handler
bot.on('botcommand', async (data: BotCommand) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotCommand).
