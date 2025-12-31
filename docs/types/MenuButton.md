# MenuButton

This object describes the bot&#39;s menu button in a private chat. It should be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the button, must be commands |

## Fluent Methods

The `MenuButton` class has the following fluent methods that automatically inject contextual parameters:

### setChatMenuButton

Use this method to change the bot&#39;s menu button in a private chat, or the default menu button. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` | No | Unique identifier for the target private chat. If not specified, default bot's menu button will be changed |
| `menuButton` | `MenuButton` | No | A JSON-serialized object for the bot's new menu button. Defaults to MenuButtonDefault |

**Usage examples:**

1. Basic usage:

```typescript
const menubutton = new MenuButton(rawData, bot);
await menubutton.setChatMenuButton(
  123,
  {} as any,
);
```

2. In an event handler:

```typescript
bot.onMenuButton(async (menubutton: MenuButton) => {
  // Auto-fills parameters from the menubutton instance
  await menubutton.setChatMenuButton();
});
```

**See also:** [setChatMenuButton API method](../methods/setChatMenuButton.md)

### getChatMenuButton

Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` | No | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned |

**Usage examples:**

1. Basic usage:

```typescript
const menubutton = new MenuButton(rawData, bot);
await menubutton.getChatMenuButton(
  123,
);
```

2. In an event handler:

```typescript
bot.onMenuButton(async (menubutton: MenuButton) => {
  // Auto-fills parameters from the menubutton instance
  await menubutton.getChatMenuButton();
});
```

**See also:** [getChatMenuButton API method](../methods/getChatMenuButton.md)


## Event Handlers

You can listen for MenuButton events using:

```typescript
// Type-specific handler
bot.onMenuButton(async (menubutton: MenuButton) => {
  console.log('Received:', menubutton);
  // Use fluent methods
  await menubutton.setChatMenuButton(...);
});

// Generic handler
bot.on('menubutton', async (data: MenuButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#MenuButton).
