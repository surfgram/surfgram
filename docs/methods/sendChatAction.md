# sendChatAction

Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Chat (56 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatAdministratorCustomTitle`, `banChatSenderChat`, `unbanChatSenderChat`, `setChatPermissions`, `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `createChatSubscriptionInviteLink`, `editChatSubscriptionInviteLink`, `revokeChatInviteLink`, `approveChatJoinRequest`, `declineChatJoinRequest`, `setChatPhoto`, `deleteChatPhoto`, `setChatTitle`, `setChatDescription`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `leaveChat`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `setChatMenuButton`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `verifyChat`, `removeChatVerification`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View Chat documentation with fluent methods](../types/Chat.md)

### Message (49 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, businessConnectionId, messageThreadId

[View Message documentation with fluent methods](../types/Message.md)

### MessageId (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageId documentation with fluent methods](../types/MessageId.md)

### InaccessibleMessage (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View InaccessibleMessage documentation with fluent methods](../types/InaccessibleMessage.md)

### MaybeInaccessibleMessage (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MaybeInaccessibleMessage documentation with fluent methods](../types/MaybeInaccessibleMessage.md)

### MessageEntity (42 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `postStory`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageEntity documentation with fluent methods](../types/MessageEntity.md)

### MessageOrigin (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageOrigin documentation with fluent methods](../types/MessageOrigin.md)

### MessageOriginUser (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageOriginUser documentation with fluent methods](../types/MessageOriginUser.md)

### MessageOriginHiddenUser (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageOriginHiddenUser documentation with fluent methods](../types/MessageOriginHiddenUser.md)

### MessageOriginChat (61 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `editForumTopic`, `editGeneralForumTopic`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `editUserStarSubscription`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View MessageOriginChat documentation with fluent methods](../types/MessageOriginChat.md)

### MessageOriginChannel (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View MessageOriginChannel documentation with fluent methods](../types/MessageOriginChannel.md)

### PhotoSize (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View PhotoSize documentation with fluent methods](../types/PhotoSize.md)

### Document (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View Document documentation with fluent methods](../types/Document.md)

### Video (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View Video documentation with fluent methods](../types/Video.md)

### VideoNote (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View VideoNote documentation with fluent methods](../types/VideoNote.md)

### PaidMediaPhoto (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View PaidMediaPhoto documentation with fluent methods](../types/PaidMediaPhoto.md)

### PaidMediaVideo (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View PaidMediaVideo documentation with fluent methods](../types/PaidMediaVideo.md)

### MessageAutoDeleteTimerChanged (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageAutoDeleteTimerChanged documentation with fluent methods](../types/MessageAutoDeleteTimerChanged.md)

### VideoChatScheduled (47 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatScheduled documentation with fluent methods](../types/VideoChatScheduled.md)

### VideoChatStarted (47 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatStarted documentation with fluent methods](../types/VideoChatStarted.md)

### VideoChatEnded (47 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatEnded documentation with fluent methods](../types/VideoChatEnded.md)

### VideoChatParticipantsInvited (47 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatParticipantsInvited documentation with fluent methods](../types/VideoChatParticipantsInvited.md)

### PaidMessagePriceChanged (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View PaidMessagePriceChanged documentation with fluent methods](../types/PaidMessagePriceChanged.md)

### DirectMessagePriceChanged (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View DirectMessagePriceChanged documentation with fluent methods](../types/DirectMessagePriceChanged.md)

### DirectMessagesTopic (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View DirectMessagesTopic documentation with fluent methods](../types/DirectMessagesTopic.md)

### UserProfilePhotos (22 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View UserProfilePhotos documentation with fluent methods](../types/UserProfilePhotos.md)

### ChatPhoto (49 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `setChatPhoto`, `deleteChatPhoto`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View ChatPhoto documentation with fluent methods](../types/ChatPhoto.md)

### MessageReactionUpdated (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View MessageReactionUpdated documentation with fluent methods](../types/MessageReactionUpdated.md)

### MessageReactionCountUpdated (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View MessageReactionCountUpdated documentation with fluent methods](../types/MessageReactionCountUpdated.md)

### BusinessMessagesDeleted (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, businessConnectionId

[View BusinessMessagesDeleted documentation with fluent methods](../types/BusinessMessagesDeleted.md)

### InputMediaPhoto (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputMediaPhoto documentation with fluent methods](../types/InputMediaPhoto.md)

### InputMediaVideo (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputMediaVideo documentation with fluent methods](../types/InputMediaVideo.md)

### InputMediaDocument (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputMediaDocument documentation with fluent methods](../types/InputMediaDocument.md)

### InputPaidMediaPhoto (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputPaidMediaPhoto documentation with fluent methods](../types/InputPaidMediaPhoto.md)

### InputPaidMediaVideo (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputPaidMediaVideo documentation with fluent methods](../types/InputPaidMediaVideo.md)

### InputProfilePhoto (22 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `setBusinessAccountProfilePhoto`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputProfilePhoto documentation with fluent methods](../types/InputProfilePhoto.md)

### InputProfilePhotoStatic (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputProfilePhotoStatic documentation with fluent methods](../types/InputProfilePhotoStatic.md)

### InputProfilePhotoAnimated (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputProfilePhotoAnimated documentation with fluent methods](../types/InputProfilePhotoAnimated.md)

### InputStoryContentPhoto (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputStoryContentPhoto documentation with fluent methods](../types/InputStoryContentPhoto.md)

### InputStoryContentVideo (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InputStoryContentVideo documentation with fluent methods](../types/InputStoryContentVideo.md)

### InlineQueryResultPhoto (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineQueryResultPhoto documentation with fluent methods](../types/InlineQueryResultPhoto.md)

### InlineQueryResultVideo (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineQueryResultVideo documentation with fluent methods](../types/InlineQueryResultVideo.md)

### InlineQueryResultDocument (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineQueryResultDocument documentation with fluent methods](../types/InlineQueryResultDocument.md)

### InlineQueryResultCachedPhoto (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineQueryResultCachedPhoto documentation with fluent methods](../types/InlineQueryResultCachedPhoto.md)

### InlineQueryResultCachedDocument (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineQueryResultCachedDocument documentation with fluent methods](../types/InlineQueryResultCachedDocument.md)

### InlineQueryResultCachedVideo (21 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `sendGift`, `sendSticker`, `sendInvoice`, `sendGame`


[View InlineQueryResultCachedVideo documentation with fluent methods](../types/InlineQueryResultCachedVideo.md)

### InputMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputMessageContent documentation with fluent methods](../types/InputMessageContent.md)

### InputTextMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputTextMessageContent documentation with fluent methods](../types/InputTextMessageContent.md)

### InputLocationMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputLocationMessageContent documentation with fluent methods](../types/InputLocationMessageContent.md)

### InputVenueMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputVenueMessageContent documentation with fluent methods](../types/InputVenueMessageContent.md)

### InputContactMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputContactMessageContent documentation with fluent methods](../types/InputContactMessageContent.md)

### InputInvoiceMessageContent (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputInvoiceMessageContent documentation with fluent methods](../types/InputInvoiceMessageContent.md)

### SentWebAppMessage (35 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View SentWebAppMessage documentation with fluent methods](../types/SentWebAppMessage.md)

### PreparedInlineMessage (36 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View PreparedInlineMessage documentation with fluent methods](../types/PreparedInlineMessage.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\). Channel chats and channel direct messages chats aren't supported. |
| `action` | `string` | Yes | Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload\_photo for photos, record\_video or upload\_video for videos, record\_voice or upload\_voice for voice notes, upload\_document for general files, choose\_sticker for stickers, find\_location for location data, record\_video\_note or upload\_video\_note for video notes. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the action will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread; for supergroups only |


## Usage Example

```typescript
// When you already have a Chat instance
bot.onChat(async (chat: Chat) => {
  await chat.sendChatAction();
});

// With filtering
bot.onChat((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#sendChatAction).
