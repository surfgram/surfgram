# repostStory

Reposts a story on behalf of a business account from another business account. Both business accounts must be managed by the same bot, and the story on the source account must have been posted \(or reposted\) by the bot. Requires the can\_manage\_stories business bot right for both business accounts. Returns Story on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Story (4 methods)

**Available methods:** `postStory`, `repostStory`, `editStory`, `deleteStory`

**Auto-filled parameters:** fromChatId, fromStoryId

[View Story documentation with fluent methods](../types/Story.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `fromChatId` | `number` | Yes | Unique identifier of the chat which posted the story that should be reposted |
| `fromStoryId` | `number` | Yes | Unique identifier of the story that should be reposted |
| `activePeriod` | `number` | Yes | Period after which the story is moved to the archive, in seconds; must be one of 6 \* 3600, 12 \* 3600, 86400, or 2 \* 86400 |
| `postToChatPage` | `boolean` | No | Pass True to keep the story accessible after it expires |
| `protectContent` | `boolean` | No | Pass True if the content of the story must be protected from forwarding and screenshotting |


## Usage Example

```typescript
// When you already have a Story instance
bot.onStory(async (story: Story) => {
  await story.repostStory({});
});

// With filtering
bot.onStory((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#repostStory).
