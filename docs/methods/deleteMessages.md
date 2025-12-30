# deleteMessages

Use this method to delete multiple messages simultaneously. If some of the specified messages can&#39;t be found, they are skipped. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (49 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View Message documentation with fluent methods](../types/Message.md)

## Parameters

| Parameter    | Type                 | Required | Description                                                                                                                           |
| :----------- | :------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`     | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                            |
| `messageIds` | `number[]`           |   Yes    | A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted |

## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.deleteMessages();
});

// With filtering
bot.onMessage(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#deleteMessages).
