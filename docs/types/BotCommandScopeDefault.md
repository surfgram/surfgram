# BotCommandScopeDefault

Represents the default scope of bot commands. Default commands are used if no commands with a narrower scope are specified for the user.

## Fields

| Name | Type     | Required | Description                 |
| :--- | :------- | :------: | :-------------------------- |
| type | `string` |   Yes    | Scope type, must be default |

## Event Handlers

You can listen for BotCommandScopeDefault events using:

```typescript
// Type-specific handler
bot.onBotCommandScopeDefault(async (botcommandscopedefault: BotCommandScopeDefault) => {
  console.log('Received:', botcommandscopedefault);
});

// Generic handler
bot.on('botcommandscopedefault', async (data: BotCommandScopeDefault) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BotCommandScopeDefault).
