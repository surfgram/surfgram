# InputRichBlockVoiceNote

A block with a voice note, corresponding to the HTML tag &lt;audio&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “voice\_note” |
| voiceNote | `InputMediaVoiceNote` | Yes | The voice note. Caption is ignored. |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for InputRichBlockVoiceNote events using:

```typescript
// Type-specific handler
bot.onInputRichBlockVoiceNote(async (inputrichblockvoicenote: InputRichBlockVoiceNote) => {
  console.log('Received:', inputrichblockvoicenote);
});

// Generic handler
bot.on('inputrichblockvoicenote', async (data: InputRichBlockVoiceNote) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockVoiceNote).
