# InputMediaLink

Represents an HTTP link to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the media, must be link |
| url | `string` | Yes | HTTP URL of the link |


## Event Handlers

You can listen for InputMediaLink events using:

```typescript
// Type-specific handler
bot.onInputMediaLink(async (inputmedialink: InputMediaLink) => {
  console.log('Received:', inputmedialink);
});

// Generic handler
bot.on('inputmedialink', async (data: InputMediaLink) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMediaLink).
