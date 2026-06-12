# deleteAllMessageReactions

Use this method to remove up to 10000 recent reactions in a group or a supergroup chat added by a given user or chat. The bot must have the &#39;can\_delete\_messages&#39; administrator right in the chat. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (57 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `getUserPersonalChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `savePreparedInlineMessage`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `deleteMessageReaction`, `deleteAllMessageReactions`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, userId, actorChatId

[View Message documentation with fluent methods](../types/Message.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup in the format @username |
| `userId` | `number` | No | Identifier of the user whose reactions will be removed, if the reactions were added by a user |
| `actorChatId` | `number` | No | Identifier of the chat whose reactions will be removed, if the reactions were added by a chat |


## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.deleteAllMessageReactions();
});

// With filtering
bot.onMessage((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#deleteAllMessageReactions).
