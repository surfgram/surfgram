# InputMedia

This object represents the content of a media message to be sent. It should be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be photo |
| media | `string` | Yes | File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |
| caption | `string` | No | Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing |
| parseMode | `string` | No | Optional. Mode for parsing entities in the photo caption. See formatting options for more details. |
| captionEntities | `MessageEntity[]` | No | Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode |
| showCaptionAboveMedia | `boolean` | No | Optional. Pass True, if the caption must be shown above the message media |
| hasSpoiler | `boolean` | No | Optional. Pass True if the photo needs to be covered with a spoiler animation |

## Fluent Methods

The `InputMedia` class has the following fluent methods that automatically inject contextual parameters:

### editMessageMedia

Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can&#39;t be uploaded; use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `media` | `InputMedia` | Yes | A JSON-serialized object for a new media content of the message |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `number` \| `string` | No | Required if inline\_message\_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const inputmedia = new InputMedia(rawData, bot);
await inputmedia.editMessageMedia({
  media: {} as any,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onInputMedia(async (inputmedia: InputMedia) => {
  // Auto-fills parameters from the inputmedia instance
  await inputmedia.editMessageMedia({ businessConnectionId: "Response" });
});
```

**See also:** [editMessageMedia API method](../methods/editMessageMedia.md)


## Event Handlers

You can listen for InputMedia events using:

```typescript
// Type-specific handler
bot.onInputMedia(async (inputmedia: InputMedia) => {
  console.log('Received:', inputmedia);
  // Use fluent methods
  await inputmedia.editMessageMedia(...);
});

// Generic handler
bot.on('inputmedia', async (data: InputMedia) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMedia).
