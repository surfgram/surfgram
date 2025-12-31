# InputMediaAnimation

Represents an animation file \(GIF or H.264/MPEG-4 AVC video without sound\) to be sent.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be animation |
| media | `string` | Yes | File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |
| thumbnail | `string` | No | Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| caption | `string` | No | Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing |
| parseMode | `string` | No | Optional. Mode for parsing entities in the animation caption. See formatting options for more details. |
| captionEntities | `MessageEntity[]` | No | Optional. List of special entities that appear in the caption, which can be specified instead of parse\_mode |
| showCaptionAboveMedia | `boolean` | No | Optional. Pass True, if the caption must be shown above the message media |
| width | `number` | No | Optional. Animation width |
| height | `number` | No | Optional. Animation height |
| duration | `number` | No | Optional. Animation duration in seconds |
| hasSpoiler | `boolean` | No | Optional. Pass True if the animation needs to be covered with a spoiler animation |


## Event Handlers

You can listen for InputMediaAnimation events using:

```typescript
// Type-specific handler
bot.onInputMediaAnimation(async (inputmediaanimation: InputMediaAnimation) => {
  console.log('Received:', inputmediaanimation);
});

// Generic handler
bot.on('inputmediaanimation', async (data: InputMediaAnimation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputMediaAnimation).
