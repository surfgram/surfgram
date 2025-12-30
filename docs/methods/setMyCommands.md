# setMyCommands

Use this method to change the list of the bot&#39;s commands. See this manual for more details about bot commands. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### BotCommand (1 methods)

**Available methods:** `setMyCommands`

[View BotCommand documentation with fluent methods](../types/BotCommand.md)

### BotCommandScope (3 methods)

**Available methods:** `setMyCommands`, `deleteMyCommands`, `getMyCommands`

[View BotCommandScope documentation with fluent methods](../types/BotCommandScope.md)

## Parameters

| Parameter      | Type              | Required | Description                                                                                                                                                    |
| :------------- | :---------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `commands`     | `BotCommand[]`    |   Yes    | A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.                                     |
| `scope`        | `BotCommandScope` |    No    | A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.                                   |
| `languageCode` | `string`          |    No    | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |

## Usage Example

```typescript
// When you already have a BotCommand instance
bot.onBotCommand(async (botcommand: BotCommand) => {
  await botcommand.setMyCommands();
});

// With filtering
bot.onBotCommand(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setMyCommands).
