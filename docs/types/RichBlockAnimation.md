# RichBlockAnimation

A block with an animation, corresponding to the HTML tag &lt;video&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “animation” |
| animation | `Animation` | Yes | The animation |
| hasSpoiler | `boolean` | No | Optional. True, if the media preview is covered by a spoiler animation |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for RichBlockAnimation events using:

```typescript
// Type-specific handler
bot.onRichBlockAnimation(async (richblockanimation: RichBlockAnimation) => {
  console.log('Received:', richblockanimation);
});

// Generic handler
bot.on('richblockanimation', async (data: RichBlockAnimation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockAnimation).
