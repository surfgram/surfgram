# RichBlockCaption

Caption of a rich formatted block.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| text | `RichText` | Yes | Block caption |
| credit | `RichText` | No | Optional. Block credit which corresponds to the HTML tag &lt;cite&gt; |


## Event Handlers

You can listen for RichBlockCaption events using:

```typescript
// Type-specific handler
bot.onRichBlockCaption(async (richblockcaption: RichBlockCaption) => {
  console.log('Received:', richblockcaption);
});

// Generic handler
bot.on('richblockcaption', async (data: RichBlockCaption) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockCaption).
