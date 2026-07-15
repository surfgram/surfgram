# InputRichBlockSlideshow

A slideshow, corresponding to the custom HTML tag &lt;tg-slideshow&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “slideshow” |
| blocks | `InputRichBlock[]` | Yes | Elements of the slideshow |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for InputRichBlockSlideshow events using:

```typescript
// Type-specific handler
bot.onInputRichBlockSlideshow(async (inputrichblockslideshow: InputRichBlockSlideshow) => {
  console.log('Received:', inputrichblockslideshow);
});

// Generic handler
bot.on('inputrichblockslideshow', async (data: InputRichBlockSlideshow) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockSlideshow).
