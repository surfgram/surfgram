# close

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.

## Fluent Usage

This method is available as a fluent method on the following types:

### MessageEntity (43 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `postStory`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageEntity documentation with fluent methods](../types/MessageEntity.md)

### ReplyParameters (23 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendSticker`, `sendInvoice`, `sendGame`

**Auto-filled parameters:** chatId

[View ReplyParameters documentation with fluent methods](../types/ReplyParameters.md)

### ForumTopicClosed (1 methods)

**Available methods:** `close`


[View ForumTopicClosed documentation with fluent methods](../types/ForumTopicClosed.md)

### LinkPreviewOptions (5 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `editMessageText`


[View LinkPreviewOptions documentation with fluent methods](../types/LinkPreviewOptions.md)

### SuggestedPostParameters (20 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendDice`, `sendSticker`, `sendInvoice`


[View SuggestedPostParameters documentation with fluent methods](../types/SuggestedPostParameters.md)

### ReplyKeyboardMarkup (19 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendDice`, `sendSticker`


[View ReplyKeyboardMarkup documentation with fluent methods](../types/ReplyKeyboardMarkup.md)

### ReplyKeyboardRemove (19 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendDice`, `sendSticker`


[View ReplyKeyboardRemove documentation with fluent methods](../types/ReplyKeyboardRemove.md)

### InlineKeyboardMarkup (30 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `stopPoll`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineKeyboardMarkup documentation with fluent methods](../types/InlineKeyboardMarkup.md)

### ForceReply (19 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendDice`, `sendSticker`


[View ForceReply documentation with fluent methods](../types/ForceReply.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |


## Usage Example

```typescript
// When you already have a MessageEntity instance
bot.onMessageEntity(async (messageentity: MessageEntity) => {
  await messageentity.close({});
});

// With filtering
bot.onMessageEntity((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#close).
