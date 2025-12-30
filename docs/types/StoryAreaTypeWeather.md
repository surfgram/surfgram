# StoryAreaTypeWeather

Describes a story area containing weather information. Currently, a story can have up to 3 weather areas.

## Fields

| Name            | Type     | Required | Description                                       |
| :-------------- | :------- | :------: | :------------------------------------------------ |
| type            | `string` |   Yes    | Type of the area, always “weather”                |
| temperature     | `number` |   Yes    | Temperature, in degree Celsius                    |
| emoji           | `string` |   Yes    | Emoji representing the weather                    |
| backgroundColor | `number` |   Yes    | A color of the area background in the ARGB format |

## Event Handlers

You can listen for StoryAreaTypeWeather events using:

```typescript
// Type-specific handler
bot.onStoryAreaTypeWeather(async (storyareatypeweather: StoryAreaTypeWeather) => {
  console.log('Received:', storyareatypeweather);
});

// Generic handler
bot.on('storyareatypeweather', async (data: StoryAreaTypeWeather) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaTypeWeather).
