# Story

This object represents a story.

## Fields

| Name | Type     | Required | Description                                 |
| :--- | :------- | :------: | :------------------------------------------ |
| chat | `Chat`   |   Yes    | Chat that posted the story                  |
| id   | `number` |   Yes    | Unique identifier for the story in the chat |

## Fluent Methods

The `Story` class has the following fluent methods that automatically inject contextual parameters:

### postStory

Posts a story on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.

**Required parameters:**

| Parameter              | Type                | Required | Description                                                                                                                  |
| :--------------------- | :------------------ | :------: | :--------------------------------------------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`            |   Yes    | Unique identifier of the business connection                                                                                 |
| `content`              | `InputStoryContent` |   Yes    | Content of the story                                                                                                         |
| `activePeriod`         | `number`            |   Yes    | Period after which the story is moved to the archive, in seconds; must be one of 6 \* 3600, 12 \* 3600, 86400, or 2 \* 86400 |
| `caption`              | `string`            |    No    | Caption of the story, 0-2048 characters after entities parsing                                                               |
| `parseMode`            | `string`            |    No    | Mode for parsing entities in the story caption. See formatting options for more details.                                     |
| `captionEntities`      | `MessageEntity[]`   |    No    | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode          |
| `areas`                | `StoryArea[]`       |    No    | A JSON-serialized list of clickable areas to be shown on the story                                                           |
| `postToChatPage`       | `boolean`           |    No    | Pass True to keep the story accessible after it expires                                                                      |
| `protectContent`       | `boolean`           |    No    | Pass True if the content of the story must be protected from forwarding and screenshotting                                   |

**Usage examples:**

1. Basic usage:

```typescript
const story = new Story(rawData, bot);
await story.postStory({
  businessConnectionId: 'example text',
  content: {} as any,
});
```

2. In an event handler:

```typescript
bot.onStory(async (story: Story) => {
  // Auto-fills parameters from the story instance
  await story.postStory({ businessConnectionId: 'Response' });
});
```

**See also:** [postStory API method](../methods/postStory.md)

### editStory

Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                            |
| :-------- | :-------- | :------------------------------------- |
| `storyId` | `this.id` | Unique identifier of the story to edit |

**Required parameters:**

| Parameter              | Type                | Required | Description                                                                                                         |
| :--------------------- | :------------------ | :------: | :------------------------------------------------------------------------------------------------------------------ |
| `businessConnectionId` | `string`            |   Yes    | Unique identifier of the business connection                                                                        |
| `content`              | `InputStoryContent` |   Yes    | Content of the story                                                                                                |
| `caption`              | `string`            |    No    | Caption of the story, 0-2048 characters after entities parsing                                                      |
| `parseMode`            | `string`            |    No    | Mode for parsing entities in the story caption. See formatting options for more details.                            |
| `captionEntities`      | `MessageEntity[]`   |    No    | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `areas`                | `StoryArea[]`       |    No    | A JSON-serialized list of clickable areas to be shown on the story                                                  |

**Usage examples:**

1. Basic usage:

```typescript
const story = new Story(rawData, bot);
await story.editStory({
  businessConnectionId: 'example text',
  content: {} as any,
});
```

2. In an event handler:

```typescript
bot.onStory(async (story: Story) => {
  // Auto-fills parameters from the story instance
  await story.editStory({ businessConnectionId: 'Response' });
});
```

**See also:** [editStory API method](../methods/editStory.md)

### deleteStory

Deletes a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source    | Description                              |
| :-------- | :-------- | :--------------------------------------- |
| `storyId` | `this.id` | Unique identifier of the story to delete |

**Required parameters:**

| Parameter              | Type     | Required | Description                                  |
| :--------------------- | :------- | :------: | :------------------------------------------- |
| `businessConnectionId` | `string` |   Yes    | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const story = new Story(rawData, bot);
await story.deleteStory('example text');
```

2. In an event handler:

```typescript
bot.onStory(async (story: Story) => {
  // Auto-fills parameters from the story instance
  await story.deleteStory();
});
```

**See also:** [deleteStory API method](../methods/deleteStory.md)

## Event Handlers

You can listen for Story events using:

```typescript
// Type-specific handler
bot.onStory(async (story: Story) => {
  console.log('Received:', story);
  // Use fluent methods
  await story.postStory(...);
});

// Generic handler
bot.on('story', async (data: Story) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Story).
