# InputRichBlockAnimation

A block with an animation, corresponding to the HTML tag &lt;video&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “animation” |
| animation | `InputMediaAnimation` | Yes | The animation. Caption is ignored. |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for InputRichBlockAnimation events using:

```typescript
// Type-specific handler
bot.onInputRichBlockAnimation(async (inputrichblockanimation: InputRichBlockAnimation) => {
  console.log('Received:', inputrichblockanimation);
});

// Generic handler
bot.on('inputrichblockanimation', async (data: InputRichBlockAnimation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockAnimation).
