# MenuButtonCommands

Represents a menu button, which opens the bot&#39;s list of commands.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the button, must be commands |


## Event Handlers

You can listen for MenuButtonCommands events using:

```typescript
// Type-specific handler
bot.onMenuButtonCommands(async (menubuttoncommands: MenuButtonCommands) => {
  console.log('Received:', menubuttoncommands);
});

// Generic handler
bot.on('menubuttoncommands', async (data: MenuButtonCommands) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#MenuButtonCommands).
