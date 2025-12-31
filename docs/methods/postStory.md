# postStory

Posts a story on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### MessageEntity (43 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `postStory`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageEntity documentation with fluent methods](../types/MessageEntity.md)

### Story (4 methods)

**Available methods:** `postStory`, `repostStory`, `editStory`, `deleteStory`


[View Story documentation with fluent methods](../types/Story.md)

### StoryArea (2 methods)

**Available methods:** `postStory`, `editStory`


[View StoryArea documentation with fluent methods](../types/StoryArea.md)

### InputStoryContent (2 methods)

**Available methods:** `postStory`, `editStory`


[View InputStoryContent documentation with fluent methods](../types/InputStoryContent.md)


## Parameters

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


## Usage Example

```typescript
// When you already have a MessageEntity instance
bot.onMessageEntity(async (messageentity: MessageEntity) => {
  await messageentity.postStory({});
});

// With filtering
bot.onMessageEntity((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#postStory).
