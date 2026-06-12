# RichBlockCollage

A collage, corresponding to the custom HTML tag &lt;tg-collage&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “collage” |
| blocks | `RichBlock[]` | Yes | Elements of the collage |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for RichBlockCollage events using:

```typescript
// Type-specific handler
bot.onRichBlockCollage(async (richblockcollage: RichBlockCollage) => {
  console.log('Received:', richblockcollage);
});

// Generic handler
bot.on('richblockcollage', async (data: RichBlockCollage) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockCollage).
