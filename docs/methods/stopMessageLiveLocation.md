# stopMessageLiveLocation

Use this method to stop updating a live location message before live\_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (57 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `getUserPersonalChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `savePreparedInlineMessage`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `deleteMessageReaction`, `deleteAllMessageReactions`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId, businessConnectionId, chatId, inlineMessageId

[View Message documentation with fluent methods](../types/Message.md)

### Location (3 methods)

**Available methods:** `sendLocation`, `editMessageLiveLocation`, `stopMessageLiveLocation`


[View Location documentation with fluent methods](../types/Location.md)

### InlineKeyboardMarkup (32 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `stopPoll`, `sendSticker`, `sendRichMessage`, `sendInvoice`, `sendGame`


[View InlineKeyboardMarkup documentation with fluent methods](../types/InlineKeyboardMarkup.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `number` \| `string` | No | Required if inline\_message\_id is not specified. Unique identifier for the target chat or username of the target bot, supergroup or channel in the format @username. |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the message with live location to stop. |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message. |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard |


## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.stopMessageLiveLocation({});
});

// With filtering
bot.onMessage((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#stopMessageLiveLocation).
