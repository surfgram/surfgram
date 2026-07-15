# InputRichBlockCollage

A collage, corresponding to the custom HTML tag &lt;tg-collage&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “collage” |
| blocks | `InputRichBlock[]` | Yes | Elements of the collage |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for InputRichBlockCollage events using:

```typescript
// Type-specific handler
bot.onInputRichBlockCollage(async (inputrichblockcollage: InputRichBlockCollage) => {
  console.log('Received:', inputrichblockcollage);
});

// Generic handler
bot.on('inputrichblockcollage', async (data: InputRichBlockCollage) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockCollage).
