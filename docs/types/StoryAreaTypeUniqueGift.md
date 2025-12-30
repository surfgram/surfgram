# StoryAreaTypeUniqueGift

Describes a story area pointing to a unique gift. Currently, a story can have at most 1 unique gift area.

## Fields

| Name | Type     | Required | Description                            |
| :--- | :------- | :------: | :------------------------------------- |
| type | `string` |   Yes    | Type of the area, always “unique_gift” |
| name | `string` |   Yes    | Unique name of the gift                |

## Event Handlers

You can listen for StoryAreaTypeUniqueGift events using:

```typescript
// Type-specific handler
bot.onStoryAreaTypeUniqueGift(async (storyareatypeuniquegift: StoryAreaTypeUniqueGift) => {
  console.log('Received:', storyareatypeuniquegift);
});

// Generic handler
bot.on('storyareatypeuniquegift', async (data: StoryAreaTypeUniqueGift) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaTypeUniqueGift).
