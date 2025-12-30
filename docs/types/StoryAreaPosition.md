# StoryAreaPosition

Describes the position of a clickable area within a story.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| xPercentage | `number` | Yes | The abscissa of the area's center, as a percentage of the media width |
| yPercentage | `number` | Yes | The ordinate of the area's center, as a percentage of the media height |
| widthPercentage | `number` | Yes | The width of the area's rectangle, as a percentage of the media width |
| heightPercentage | `number` | Yes | The height of the area's rectangle, as a percentage of the media height |
| rotationAngle | `number` | Yes | The clockwise rotation angle of the rectangle, in degrees; 0-360 |
| cornerRadiusPercentage | `number` | Yes | The radius of the rectangle corner rounding, as a percentage of the media width |


## Event Handlers

You can listen for StoryAreaPosition events using:

```typescript
// Type-specific handler
bot.onStoryAreaPosition(async (storyareaposition: StoryAreaPosition) => {
  console.log('Received:', storyareaposition);
});

// Generic handler
bot.on('storyareaposition', async (data: StoryAreaPosition) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaPosition).
