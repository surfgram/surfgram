# WriteAccessAllowed

This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.

## Fields

| Name               | Type      | Required | Description                                                                                                                                |
| :----------------- | :-------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------- |
| fromRequest        | `boolean` |    No    | Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess |
| webAppName         | `string`  |    No    | Optional. Name of the Web App, if the access was granted when the Web App was launched from a link                                         |
| fromAttachmentMenu | `boolean` |    No    | Optional. True, if the access was granted when the bot was added to the attachment or side menu                                            |

## Event Handlers

You can listen for WriteAccessAllowed events using:

```typescript
// Type-specific handler
bot.onWriteAccessAllowed(async (writeaccessallowed: WriteAccessAllowed) => {
  console.log('Received:', writeaccessallowed);
});

// Generic handler
bot.on('writeaccessallowed', async (data: WriteAccessAllowed) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#WriteAccessAllowed).
