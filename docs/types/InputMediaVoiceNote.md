# InputMediaVoiceNote

Represents a voice message file to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the media, must be voice\_note |
| media | `string` | Yes | File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass "attach://&lt;file\_attach\_name&gt;" to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |
| caption | `string` | No | Optional. Caption of the voice message to be sent, 0-1024 characters after entities parsing |
| parseMode | `string` | No | Optional. Mode for parsing entities in the voice message caption. See formatting options for more details. |
| captionEntities | `MessageEntity[]` | No | Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode |
| duration | `number` | No | Optional. Duration of the voice message in seconds |


## Event Handlers

You can listen for InputMediaVoiceNote events using:

```typescript
// Type-specific handler
bot.onInputMediaVoiceNote(async (inputmediavoicenote: InputMediaVoiceNote) => {
  console.log('Received:', inputmediavoicenote);
});

// Generic handler
bot.on('inputmediavoicenote', async (data: InputMediaVoiceNote) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMediaVoiceNote).
