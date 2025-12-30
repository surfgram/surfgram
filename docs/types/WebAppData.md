# WebAppData

Describes data sent from a Web App to the bot.

## Fields

| Name       | Type     | Required | Description                                                                                                                              |
| :--------- | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------- |
| data       | `string` |   Yes    | The data. Be aware that a bad client can send arbitrary data in this field.                                                              |
| buttonText | `string` |   Yes    | Text of the web_app keyboard button from which the Web App was opened. Be aware that a bad client can send arbitrary data in this field. |

## Event Handlers

You can listen for WebAppData events using:

```typescript
// Type-specific handler
bot.onWebAppData(async (webappdata: WebAppData) => {
  console.log('Received:', webappdata);
});

// Generic handler
bot.on('webappdata', async (data: WebAppData) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#WebAppData).
