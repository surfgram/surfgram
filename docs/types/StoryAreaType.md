# StoryAreaType

Describes the type of a clickable area on a story. Currently, it can be one of

## Fields

| Name      | Type              | Required | Description                         |
| :-------- | :---------------- | :------: | :---------------------------------- |
| type      | `string`          |   Yes    | Type of the area, always “location” |
| latitude  | `number`          |   Yes    | Location latitude in degrees        |
| longitude | `number`          |   Yes    | Location longitude in degrees       |
| address   | `LocationAddress` |    No    | Optional. Address of the location   |

## Event Handlers

You can listen for StoryAreaType events using:

```typescript
// Type-specific handler
bot.onStoryAreaType(async (storyareatype: StoryAreaType) => {
  console.log('Received:', storyareatype);
});

// Generic handler
bot.on('storyareatype', async (data: StoryAreaType) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaType).
