# InputMediaSticker

Represents a sticker file to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be sticker |
| media | `string` | Yes | File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a .WEBP sticker from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |
| emoji | `string` | No | Optional. Emoji associated with the sticker; only for just uploaded stickers |


## Event Handlers

You can listen for InputMediaSticker events using:

```typescript
// Type-specific handler
bot.onInputMediaSticker(async (inputmediasticker: InputMediaSticker) => {
  console.log('Received:', inputmediasticker);
});

// Generic handler
bot.on('inputmediasticker', async (data: InputMediaSticker) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMediaSticker).
