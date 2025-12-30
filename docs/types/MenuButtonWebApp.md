# MenuButtonWebApp

Represents a menu button, which launches a Web App.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the button, must be web\_app |
| text | `string` | Yes | Text on the button |
| webApp | `WebAppInfo` | Yes | Description of the Web App that will be launched when the user presses the button. The Web App will be able to send an arbitrary message on behalf of the user using the method answerWebAppQuery. Alternatively, a t.me link to a Web App of the bot can be specified in the object instead of the Web App's URL, in which case the Web App will be opened as if the user pressed the link. |


## Event Handlers

You can listen for MenuButtonWebApp events using:

```typescript
// Type-specific handler
bot.onMenuButtonWebApp(async (menubuttonwebapp: MenuButtonWebApp) => {
  console.log('Received:', menubuttonwebapp);
});

// Generic handler
bot.on('menubuttonwebapp', async (data: MenuButtonWebApp) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#MenuButtonWebApp).
