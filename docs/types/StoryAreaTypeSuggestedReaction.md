# StoryAreaTypeSuggestedReaction

Describes a story area pointing to a suggested reaction. Currently, a story can have up to 5 suggested reaction areas.

## Fields

| Name         | Type           | Required | Description                                                    |
| :----------- | :------------- | :------: | :------------------------------------------------------------- |
| type         | `string`       |   Yes    | Type of the area, always “suggested_reaction”                  |
| reactionType | `ReactionType` |   Yes    | Type of the reaction                                           |
| isDark       | `boolean`      |    No    | Optional. Pass True if the reaction area has a dark background |
| isFlipped    | `boolean`      |    No    | Optional. Pass True if reaction area corner is flipped         |

## Event Handlers

You can listen for StoryAreaTypeSuggestedReaction events using:

```typescript
// Type-specific handler
bot.onStoryAreaTypeSuggestedReaction(
  async (storyareatypesuggestedreaction: StoryAreaTypeSuggestedReaction) => {
    console.log('Received:', storyareatypesuggestedreaction);
  }
);

// Generic handler
bot.on('storyareatypesuggestedreaction', async (data: StoryAreaTypeSuggestedReaction) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryAreaTypeSuggestedReaction).
