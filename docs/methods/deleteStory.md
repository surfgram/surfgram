# deleteStory

Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Story (3 methods)

**Available methods:** `postStory`, `editStory`, `deleteStory`

**Auto-filled parameters:** storyId

[View Story documentation with fluent methods](../types/Story.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `storyId` | `number` | Yes | Unique identifier of the story to delete |


## Usage Example

```typescript
// When you already have a Story instance
bot.onStory(async (story: Story) => {
  await story.deleteStory();
});

// With filtering
bot.onStory((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#deleteStory).
