# editMessageLiveLocation

Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (49 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** businessConnectionId, chatId, messageId, inlineMessageId

[View Message documentation with fluent methods](../types/Message.md)

### MessageId (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId, inlineMessageId

[View MessageId documentation with fluent methods](../types/MessageId.md)

### InaccessibleMessage (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, messageId

[View InaccessibleMessage documentation with fluent methods](../types/InaccessibleMessage.md)

### MaybeInaccessibleMessage (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View MaybeInaccessibleMessage documentation with fluent methods](../types/MaybeInaccessibleMessage.md)

### MessageEntity (42 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `postStory`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View MessageEntity documentation with fluent methods](../types/MessageEntity.md)

### MessageOrigin (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View MessageOrigin documentation with fluent methods](../types/MessageOrigin.md)

### MessageOriginUser (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View MessageOriginUser documentation with fluent methods](../types/MessageOriginUser.md)

### MessageOriginHiddenUser (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View MessageOriginHiddenUser documentation with fluent methods](../types/MessageOriginHiddenUser.md)

### MessageOriginChat (61 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `editForumTopic`, `editGeneralForumTopic`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `editUserStarSubscription`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId, messageId

[View MessageOriginChat documentation with fluent methods](../types/MessageOriginChat.md)

### MessageOriginChannel (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, messageId

[View MessageOriginChannel documentation with fluent methods](../types/MessageOriginChannel.md)

### Location (3 methods)

**Available methods:** `sendLocation`, `editMessageLiveLocation`, `stopMessageLiveLocation`

[View Location documentation with fluent methods](../types/Location.md)

### MessageAutoDeleteTimerChanged (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View MessageAutoDeleteTimerChanged documentation with fluent methods](../types/MessageAutoDeleteTimerChanged.md)

### PaidMessagePriceChanged (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View PaidMessagePriceChanged documentation with fluent methods](../types/PaidMessagePriceChanged.md)

### DirectMessagePriceChanged (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View DirectMessagePriceChanged documentation with fluent methods](../types/DirectMessagePriceChanged.md)

### DirectMessagesTopic (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View DirectMessagesTopic documentation with fluent methods](../types/DirectMessagesTopic.md)

### InlineKeyboardMarkup (30 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `stopPoll`, `sendSticker`, `sendInvoice`, `sendGame`

[View InlineKeyboardMarkup documentation with fluent methods](../types/InlineKeyboardMarkup.md)

### MessageReactionUpdated (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, messageId

[View MessageReactionUpdated documentation with fluent methods](../types/MessageReactionUpdated.md)

### MessageReactionCountUpdated (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, messageId

[View MessageReactionCountUpdated documentation with fluent methods](../types/MessageReactionCountUpdated.md)

### BusinessMessagesDeleted (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** businessConnectionId, chatId, messageId

[View BusinessMessagesDeleted documentation with fluent methods](../types/BusinessMessagesDeleted.md)

### InputMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View InputMessageContent documentation with fluent methods](../types/InputMessageContent.md)

### InputTextMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View InputTextMessageContent documentation with fluent methods](../types/InputTextMessageContent.md)

### InputLocationMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View InputLocationMessageContent documentation with fluent methods](../types/InputLocationMessageContent.md)

### InputVenueMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View InputVenueMessageContent documentation with fluent methods](../types/InputVenueMessageContent.md)

### InputContactMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View InputContactMessageContent documentation with fluent methods](../types/InputContactMessageContent.md)

### InputInvoiceMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId

[View InputInvoiceMessageContent documentation with fluent methods](../types/InputInvoiceMessageContent.md)

### SentWebAppMessage (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** inlineMessageId, messageId

[View SentWebAppMessage documentation with fluent methods](../types/SentWebAppMessage.md)

### PreparedInlineMessage (36 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** messageId, inlineMessageId

[View PreparedInlineMessage documentation with fluent methods](../types/PreparedInlineMessage.md)

## Parameters

| Parameter              | Type                   | Required | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| :--------------------- | :--------------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `latitude`             | `number`               |   Yes    | Latitude of new location                                                                                                                                                                                                                                                                                                                                                                        |
| `longitude`            | `number`               |   Yes    | Longitude of new location                                                                                                                                                                                                                                                                                                                                                                       |
| `businessConnectionId` | `string`               |    No    | Unique identifier of the business connection on behalf of which the message to be edited was sent                                                                                                                                                                                                                                                                                               |
| `chatId`               | `number` \| `string`   |    No    | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                                                                                                                                                                                                      |
| `messageId`            | `number`               |    No    | Required if inline_message_id is not specified. Identifier of the message to edit                                                                                                                                                                                                                                                                                                               |
| `inlineMessageId`      | `string`               |    No    | Required if chat_id and message_id are not specified. Identifier of the inline message                                                                                                                                                                                                                                                                                                          |
| `livePeriod`           | `number`               |    No    | New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged |
| `horizontalAccuracy`   | `number`               |    No    | The radius of uncertainty for the location, measured in meters; 0-1500                                                                                                                                                                                                                                                                                                                          |
| `heading`              | `number`               |    No    | Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.                                                                                                                                                                                                                                                                                                      |
| `proximityAlertRadius` | `number`               |    No    | The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.                                                                                                                                                                                                                                                          |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for a new inline keyboard.                                                                                                                                                                                                                                                                                                                                             |

## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.editMessageLiveLocation({});
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

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#editMessageLiveLocation).
