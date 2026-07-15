# InputRichBlockAudio

A block with a music file, corresponding to the HTML tag &lt;audio&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “audio” |
| audio | `InputMediaAudio` | Yes | The audio. Caption is ignored. |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for InputRichBlockAudio events using:

```typescript
// Type-specific handler
bot.onInputRichBlockAudio(async (inputrichblockaudio: InputRichBlockAudio) => {
  console.log('Received:', inputrichblockaudio);
});

// Generic handler
bot.on('inputrichblockaudio', async (data: InputRichBlockAudio) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockAudio).
