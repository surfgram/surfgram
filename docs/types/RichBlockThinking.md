# RichBlockThinking

A block with a “Thinking…” placeholder, corresponding to the custom HTML tag &lt;tg-thinking&gt;. The block may be used only in sendRichMessageDraft, therefore it can&#39;t be received in messages. See https://t.me/addemoji/AIActions for examples of custom emoji that are recommended for usage in the block.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “thinking” |
| text | `RichText` | Yes | Text of the block. See https://t.me/addemoji/AIActions for examples of custom emoji that are recommended for usage in the block. |


## Event Handlers

You can listen for RichBlockThinking events using:

```typescript
// Type-specific handler
bot.onRichBlockThinking(async (richblockthinking: RichBlockThinking) => {
  console.log('Received:', richblockthinking);
});

// Generic handler
bot.on('richblockthinking', async (data: RichBlockThinking) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockThinking).
