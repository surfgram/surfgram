# WebAppInfo

Describes a Web App.

## Fields

| Name | Type     | Required | Description                                                                                       |
| :--- | :------- | :------: | :------------------------------------------------------------------------------------------------ |
| url  | `string` |   Yes    | An HTTPS URL of a Web App to be opened with additional data as specified in Initializing Web Apps |

## Event Handlers

You can listen for WebAppInfo events using:

```typescript
// Type-specific handler
bot.onWebAppInfo(async (webappinfo: WebAppInfo) => {
  console.log('Received:', webappinfo);
});

// Generic handler
bot.on('webappinfo', async (data: WebAppInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#WebAppInfo).
