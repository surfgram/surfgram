# savePreparedInlineMessage

Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (62 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `getUserPersonalChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `savePreparedInlineMessage`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `deleteEphemeralMessage`, `deleteMessageReaction`, `deleteAllMessageReactions`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** userId

[View Message documentation with fluent methods](../types/Message.md)

### PreparedInlineMessage (45 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `savePreparedInlineMessage`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View PreparedInlineMessage documentation with fluent methods](../types/PreparedInlineMessage.md)

### InlineQueryResult (4 methods)

**Available methods:** `answerGuestQuery`, `answerWebAppQuery`, `savePreparedInlineMessage`, `answerInlineQuery`


[View InlineQueryResult documentation with fluent methods](../types/InlineQueryResult.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user that can use the prepared message |
| `result` | `InlineQueryResult` | Yes | A JSON-serialized object describing the message to be sent |
| `allowUserChats` | `boolean` | No | Pass True if the message can be sent to private chats with users |
| `allowBotChats` | `boolean` | No | Pass True if the message can be sent to private chats with bots |
| `allowGroupChats` | `boolean` | No | Pass True if the message can be sent to group and supergroup chats |
| `allowChannelChats` | `boolean` | No | Pass True if the message can be sent to channel chats |


## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.savePreparedInlineMessage({});
});

// With filtering
bot.onMessage((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#savePreparedInlineMessage).
