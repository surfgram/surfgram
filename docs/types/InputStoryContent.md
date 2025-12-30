# InputStoryContent

This object describes the content of a story to post. Currently, it can be one of

## Fields

| Name  | Type     | Required | Description                                                                                                                                                                                                                                                                                                                                    |
| :---- | :------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type  | `string` |   Yes    | Type of the content, must be photo                                                                                                                                                                                                                                                                                                             |
| photo | `string` |   Yes    | The photo to post as a story. The photo must be of the size 1080x1920 and must not exceed 10 MB. The photo can't be reused and can only be uploaded as a new file, so you can pass “attach://&lt;file_attach_name&gt;” if the photo was uploaded using multipart/form-data under &lt;file_attach_name&gt;. More information on Sending Files » |

## Fluent Methods

The `InputStoryContent` class has the following fluent methods that automatically inject contextual parameters:

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
const inputstorycontent = new InputStoryContent(rawData, bot);
await inputstorycontent.postStory({
  businessConnectionId: 'example text',
  content: {} as any,
});
```

2. In an event handler:

```typescript
bot.onInputStoryContent(async (inputstorycontent: InputStoryContent) => {
  // Auto-fills parameters from the inputstorycontent instance
  await inputstorycontent.postStory({ businessConnectionId: 'Response' });
});
```

**See also:** [postStory API method](../methods/postStory.md)

### editStory

Edits a story previously posted by the bot on behalf of a managed business account. Requires the can_manage_stories business bot right. Returns Story on success.

**Auto-filled parameters:**

| Parameter | Source     | Description                            |
| :-------- | :--------- | :------------------------------------- |
| `storyId` | `this?.id` | Unique identifier of the story to edit |

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
const inputstorycontent = new InputStoryContent(rawData, bot);
await inputstorycontent.editStory({
  businessConnectionId: 'example text',
  content: {} as any,
});
```

2. In an event handler:

```typescript
bot.onInputStoryContent(async (inputstorycontent: InputStoryContent) => {
  // Auto-fills parameters from the inputstorycontent instance
  await inputstorycontent.editStory({ businessConnectionId: 'Response' });
});
```

**See also:** [editStory API method](../methods/editStory.md)

## Event Handlers

You can listen for InputStoryContent events using:

```typescript
// Type-specific handler
bot.onInputStoryContent(async (inputstorycontent: InputStoryContent) => {
  console.log('Received:', inputstorycontent);
  // Use fluent methods
  await inputstorycontent.postStory(...);
});

// Generic handler
bot.on('inputstorycontent', async (data: InputStoryContent) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputStoryContent).
