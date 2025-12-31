# deleteMyCommands

Use this method to delete the list of the bot&#39;s commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### BotCommandScope (3 methods)

**Available methods:** `setMyCommands`, `deleteMyCommands`, `getMyCommands`

[View BotCommandScope documentation with fluent methods](../types/BotCommandScope.md)

## Parameters

| Parameter      | Type              | Required | Description                                                                                                                                                    |
| :------------- | :---------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scope`        | `BotCommandScope` |    No    | A JSON-serialized object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.                                   |
| `languageCode` | `string`          |    No    | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |

## Usage Example

```typescript
// When you already have a BotCommandScope instance
bot.onBotCommandScope(async (botcommandscope: BotCommandScope) => {
  await botcommandscope.deleteMyCommands();
});

// With filtering
bot.onBotCommandScope(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#deleteMyCommands).
