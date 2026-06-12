# RichBlockAudio

A block with a music file, corresponding to the HTML tag &lt;audio&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “audio” |
| audio | `Audio` | Yes | The audio |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for RichBlockAudio events using:

```typescript
// Type-specific handler
bot.onRichBlockAudio(async (richblockaudio: RichBlockAudio) => {
  console.log('Received:', richblockaudio);
});

// Generic handler
bot.on('richblockaudio', async (data: RichBlockAudio) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockAudio).
