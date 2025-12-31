# StoryArea

Describes a clickable area on a story media.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| position | `StoryAreaPosition` | Yes | Position of the area |
| type | `StoryAreaType` | Yes | Type of the area |

## Fluent Methods

The `StoryArea` class has the following fluent methods that automatically inject contextual parameters:

### postStory

Posts a story on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `content` | `InputStoryContent` | Yes | Content of the story |
| `activePeriod` | `number` | Yes | Period after which the story is moved to the archive, in seconds; must be one of 6 \* 3600, 12 \* 3600, 86400, or 2 \* 86400 |
| `caption` | `string` | No | Caption of the story, 0-2048 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the story caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `areas` | `StoryArea[]` | No | A JSON-serialized list of clickable areas to be shown on the story |
| `postToChatPage` | `boolean` | No | Pass True to keep the story accessible after it expires |
| `protectContent` | `boolean` | No | Pass True if the content of the story must be protected from forwarding and screenshotting |

**Usage examples:**

1. Basic usage:

```typescript
const storyarea = new StoryArea(rawData, bot);
await storyarea.postStory({
  businessConnectionId: "example text",
  content: {} as any,
});
```

2. In an event handler:

```typescript
bot.onStoryArea(async (storyarea: StoryArea) => {
  // Auto-fills parameters from the storyarea instance
  await storyarea.postStory({ businessConnectionId: "Response" });
});
```

**See also:** [postStory API method](../methods/postStory.md)

### editStory

Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `storyId` | `this?.id` | Unique identifier of the story to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `content` | `InputStoryContent` | Yes | Content of the story |
| `caption` | `string` | No | Caption of the story, 0-2048 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the story caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `areas` | `StoryArea[]` | No | A JSON-serialized list of clickable areas to be shown on the story |

**Usage examples:**

1. Basic usage:

```typescript
const storyarea = new StoryArea(rawData, bot);
await storyarea.editStory({
  businessConnectionId: "example text",
  content: {} as any,
});
```

2. In an event handler:

```typescript
bot.onStoryArea(async (storyarea: StoryArea) => {
  // Auto-fills parameters from the storyarea instance
  await storyarea.editStory({ businessConnectionId: "Response" });
});
```

**See also:** [editStory API method](../methods/editStory.md)


## Event Handlers

You can listen for StoryArea events using:

```typescript
// Type-specific handler
bot.onStoryArea(async (storyarea: StoryArea) => {
  console.log('Received:', storyarea);
  // Use fluent methods
  await storyarea.postStory(...);
});

// Generic handler
bot.on('storyarea', async (data: StoryArea) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#StoryArea).
