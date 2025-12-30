# StoryAreaTypeLocation

Describes a story area pointing to a location. Currently, a story can have up to 10 location areas.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the area, always “location” |
| latitude | `number` | Yes | Location latitude in degrees |
| longitude | `number` | Yes | Location longitude in degrees |
| address | `LocationAddress` | No | Optional. Address of the location |


## Event Handlers

You can listen for StoryAreaTypeLocation events using:

```typescript
// Type-specific handler
bot.onStoryAreaTypeLocation(async (storyareatypelocation: StoryAreaTypeLocation) => {
  console.log('Received:', storyareatypelocation);
});

// Generic handler
bot.on('storyareatypelocation', async (data: StoryAreaTypeLocation) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaTypeLocation).
