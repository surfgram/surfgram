# RichBlockSlideshow

A slideshow, corresponding to the custom HTML tag &lt;tg-slideshow&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “slideshow” |
| blocks | `RichBlock[]` | Yes | Elements of the slideshow |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for RichBlockSlideshow events using:

```typescript
// Type-specific handler
bot.onRichBlockSlideshow(async (richblockslideshow: RichBlockSlideshow) => {
  console.log('Received:', richblockslideshow);
});

// Generic handler
bot.on('richblockslideshow', async (data: RichBlockSlideshow) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockSlideshow).
