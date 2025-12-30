# StoryAreaTypeLink

Describes a story area pointing to an HTTP or tg:// link. Currently, a story can have up to 3 link areas.

## Fields

| Name | Type     | Required | Description                                             |
| :--- | :------- | :------: | :------------------------------------------------------ |
| type | `string` |   Yes    | Type of the area, always “link”                         |
| url  | `string` |   Yes    | HTTP or tg:// URL to be opened when the area is clicked |

## Event Handlers

You can listen for StoryAreaTypeLink events using:

```typescript
// Type-specific handler
bot.onStoryAreaTypeLink(async (storyareatypelink: StoryAreaTypeLink) => {
  console.log('Received:', storyareatypelink);
});

// Generic handler
bot.on('storyareatypelink', async (data: StoryAreaTypeLink) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaTypeLink).
