# RichBlockVoiceNote

A block with a voice note, corresponding to the HTML tag &lt;audio&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “voice\_note” |
| voiceNote | `Voice` | Yes | The voice note |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for RichBlockVoiceNote events using:

```typescript
// Type-specific handler
bot.onRichBlockVoiceNote(async (richblockvoicenote: RichBlockVoiceNote) => {
  console.log('Received:', richblockvoicenote);
});

// Generic handler
bot.on('richblockvoicenote', async (data: RichBlockVoiceNote) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockVoiceNote).
