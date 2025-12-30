# MenuButtonDefault

Describes that no specific value for the menu button was set.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the button, must be default |


## Event Handlers

You can listen for MenuButtonDefault events using:

```typescript
// Type-specific handler
bot.onMenuButtonDefault(async (menubuttondefault: MenuButtonDefault) => {
  console.log('Received:', menubuttondefault);
});

// Generic handler
bot.on('menubuttondefault', async (data: MenuButtonDefault) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#MenuButtonDefault).
