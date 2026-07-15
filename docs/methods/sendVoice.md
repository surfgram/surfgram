# sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (62 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `getUserPersonalChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `savePreparedInlineMessage`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `deleteEphemeralMessage`, `deleteMessageReaction`, `deleteAllMessageReactions`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, businessConnectionId, messageThreadId, directMessagesTopicId, receiverUserId

[View Message documentation with fluent methods](../types/Message.md)

### MessageId (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageId documentation with fluent methods](../types/MessageId.md)

### InaccessibleMessage (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View InaccessibleMessage documentation with fluent methods](../types/InaccessibleMessage.md)

### MaybeInaccessibleMessage (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** receiverUserId

[View MaybeInaccessibleMessage documentation with fluent methods](../types/MaybeInaccessibleMessage.md)

### MessageEntity (51 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `postStory`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** receiverUserId

[View MessageEntity documentation with fluent methods](../types/MessageEntity.md)

### ReplyParameters (25 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendSticker`, `sendRichMessage`, `sendInvoice`, `sendGame`

**Auto-filled parameters:** chatId

[View ReplyParameters documentation with fluent methods](../types/ReplyParameters.md)

### MessageOrigin (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** receiverUserId

[View MessageOrigin documentation with fluent methods](../types/MessageOrigin.md)

### MessageOriginUser (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** receiverUserId

[View MessageOriginUser documentation with fluent methods](../types/MessageOriginUser.md)

### MessageOriginHiddenUser (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageOriginHiddenUser documentation with fluent methods](../types/MessageOriginHiddenUser.md)

### MessageOriginChat (76 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `editForumTopic`, `editGeneralForumTopic`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `editUserStarSubscription`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View MessageOriginChat documentation with fluent methods](../types/MessageOriginChat.md)

### MessageOriginChannel (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View MessageOriginChannel documentation with fluent methods](../types/MessageOriginChannel.md)

### PhotoSize (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View PhotoSize documentation with fluent methods](../types/PhotoSize.md)

### Document (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View Document documentation with fluent methods](../types/Document.md)

### LivePhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View LivePhoto documentation with fluent methods](../types/LivePhoto.md)

### VideoQuality (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View VideoQuality documentation with fluent methods](../types/VideoQuality.md)

### Video (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View Video documentation with fluent methods](../types/Video.md)

### VideoNote (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View VideoNote documentation with fluent methods](../types/VideoNote.md)

### Voice (3 methods)

**Available methods:** `sendVoice`, `sendInvoice`, `createInvoiceLink`


[View Voice documentation with fluent methods](../types/Voice.md)

### PaidMediaLivePhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View PaidMediaLivePhoto documentation with fluent methods](../types/PaidMediaLivePhoto.md)

### PaidMediaPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View PaidMediaPhoto documentation with fluent methods](../types/PaidMediaPhoto.md)

### PaidMediaVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View PaidMediaVideo documentation with fluent methods](../types/PaidMediaVideo.md)

### MessageAutoDeleteTimerChanged (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View MessageAutoDeleteTimerChanged documentation with fluent methods](../types/MessageAutoDeleteTimerChanged.md)

### VideoChatScheduled (58 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `sendChatJoinRequestWebApp`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatScheduled documentation with fluent methods](../types/VideoChatScheduled.md)

### VideoChatStarted (58 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `sendChatJoinRequestWebApp`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatStarted documentation with fluent methods](../types/VideoChatStarted.md)

### VideoChatEnded (58 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `sendChatJoinRequestWebApp`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View VideoChatEnded documentation with fluent methods](../types/VideoChatEnded.md)

### VideoChatParticipantsInvited (58 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `sendChatJoinRequestWebApp`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** receiverUserId, chatId

[View VideoChatParticipantsInvited documentation with fluent methods](../types/VideoChatParticipantsInvited.md)

### PaidMessagePriceChanged (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View PaidMessagePriceChanged documentation with fluent methods](../types/PaidMessagePriceChanged.md)

### DirectMessagePriceChanged (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View DirectMessagePriceChanged documentation with fluent methods](../types/DirectMessagePriceChanged.md)

### SuggestedPostParameters (22 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendDice`, `sendSticker`, `sendRichMessage`, `sendInvoice`


[View SuggestedPostParameters documentation with fluent methods](../types/SuggestedPostParameters.md)

### DirectMessagesTopic (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** directMessagesTopicId, receiverUserId

[View DirectMessagesTopic documentation with fluent methods](../types/DirectMessagesTopic.md)

### UserProfilePhotos (27 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View UserProfilePhotos documentation with fluent methods](../types/UserProfilePhotos.md)

### ReplyKeyboardMarkup (21 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendDice`, `sendSticker`, `sendRichMessage`


[View ReplyKeyboardMarkup documentation with fluent methods](../types/ReplyKeyboardMarkup.md)

### ReplyKeyboardRemove (21 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendDice`, `sendSticker`, `sendRichMessage`


[View ReplyKeyboardRemove documentation with fluent methods](../types/ReplyKeyboardRemove.md)

### InlineKeyboardMarkup (36 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `stopPoll`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendInvoice`, `sendGame`


[View InlineKeyboardMarkup documentation with fluent methods](../types/InlineKeyboardMarkup.md)

### ForceReply (21 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendDice`, `sendSticker`, `sendRichMessage`


[View ForceReply documentation with fluent methods](../types/ForceReply.md)

### ChatPhoto (60 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `sendChatJoinRequestWebApp`, `setChatPhoto`, `deleteChatPhoto`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `sendGift`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `sendSticker`, `getStickerSet`, `getCustomEmojiStickers`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `getMyStarBalance`, `getStarTransactions`, `sendGame`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View ChatPhoto documentation with fluent methods](../types/ChatPhoto.md)

### MessageReactionUpdated (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, receiverUserId

[View MessageReactionUpdated documentation with fluent methods](../types/MessageReactionUpdated.md)

### MessageReactionCountUpdated (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId

[View MessageReactionCountUpdated documentation with fluent methods](../types/MessageReactionCountUpdated.md)

### BusinessMessagesDeleted (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, businessConnectionId

[View BusinessMessagesDeleted documentation with fluent methods](../types/BusinessMessagesDeleted.md)

### SentWebAppMessage (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View SentWebAppMessage documentation with fluent methods](../types/SentWebAppMessage.md)

### SentGuestMessage (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View SentGuestMessage documentation with fluent methods](../types/SentGuestMessage.md)

### PreparedInlineMessage (45 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `savePreparedInlineMessage`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View PreparedInlineMessage documentation with fluent methods](../types/PreparedInlineMessage.md)

### InputMediaDocument (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputMediaDocument documentation with fluent methods](../types/InputMediaDocument.md)

### InputMediaLivePhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputMediaLivePhoto documentation with fluent methods](../types/InputMediaLivePhoto.md)

### InputMediaPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputMediaPhoto documentation with fluent methods](../types/InputMediaPhoto.md)

### InputMediaVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputMediaVideo documentation with fluent methods](../types/InputMediaVideo.md)

### InputFile (13 methods)

**Available methods:** `setWebhook`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `setChatPhoto`, `sendSticker`, `uploadStickerFile`, `setStickerSetThumbnail`


[View InputFile documentation with fluent methods](../types/InputFile.md)

### InputPaidMediaLivePhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputPaidMediaLivePhoto documentation with fluent methods](../types/InputPaidMediaLivePhoto.md)

### InputPaidMediaPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputPaidMediaPhoto documentation with fluent methods](../types/InputPaidMediaPhoto.md)

### InputPaidMediaVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputPaidMediaVideo documentation with fluent methods](../types/InputPaidMediaVideo.md)

### InputProfilePhoto (28 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `setMyProfilePhoto`, `sendGift`, `setBusinessAccountProfilePhoto`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputProfilePhoto documentation with fluent methods](../types/InputProfilePhoto.md)

### InputProfilePhotoStatic (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputProfilePhotoStatic documentation with fluent methods](../types/InputProfilePhotoStatic.md)

### InputProfilePhotoAnimated (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputProfilePhotoAnimated documentation with fluent methods](../types/InputProfilePhotoAnimated.md)

### InputStoryContentPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputStoryContentPhoto documentation with fluent methods](../types/InputStoryContentPhoto.md)

### InputStoryContentVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputStoryContentVideo documentation with fluent methods](../types/InputStoryContentVideo.md)

### RichMessage (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View RichMessage documentation with fluent methods](../types/RichMessage.md)

### InputRichMessage (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputRichMessage documentation with fluent methods](../types/InputRichMessage.md)

### InputRichMessageMedia (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputRichMessageMedia documentation with fluent methods](../types/InputRichMessageMedia.md)

### RichBlockPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View RichBlockPhoto documentation with fluent methods](../types/RichBlockPhoto.md)

### RichBlockVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View RichBlockVideo documentation with fluent methods](../types/RichBlockVideo.md)

### InputRichBlockPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputRichBlockPhoto documentation with fluent methods](../types/InputRichBlockPhoto.md)

### InputRichBlockVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InputRichBlockVideo documentation with fluent methods](../types/InputRichBlockVideo.md)

### InlineQueryResultPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InlineQueryResultPhoto documentation with fluent methods](../types/InlineQueryResultPhoto.md)

### InlineQueryResultVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InlineQueryResultVideo documentation with fluent methods](../types/InlineQueryResultVideo.md)

### InlineQueryResultDocument (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InlineQueryResultDocument documentation with fluent methods](../types/InlineQueryResultDocument.md)

### InlineQueryResultCachedPhoto (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InlineQueryResultCachedPhoto documentation with fluent methods](../types/InlineQueryResultCachedPhoto.md)

### InlineQueryResultCachedDocument (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InlineQueryResultCachedDocument documentation with fluent methods](../types/InlineQueryResultCachedDocument.md)

### InlineQueryResultCachedVideo (26 methods)

**Available methods:** `sendMessage`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `sendChatJoinRequestWebApp`, `sendGift`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `sendGame`


[View InlineQueryResultCachedVideo documentation with fluent methods](../types/InlineQueryResultCachedVideo.md)

### InputMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputMessageContent documentation with fluent methods](../types/InputMessageContent.md)

### InputTextMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputTextMessageContent documentation with fluent methods](../types/InputTextMessageContent.md)

### InputRichMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputRichMessageContent documentation with fluent methods](../types/InputRichMessageContent.md)

### InputLocationMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputLocationMessageContent documentation with fluent methods](../types/InputLocationMessageContent.md)

### InputVenueMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputVenueMessageContent documentation with fluent methods](../types/InputVenueMessageContent.md)

### InputContactMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputContactMessageContent documentation with fluent methods](../types/InputContactMessageContent.md)

### InputInvoiceMessageContent (44 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `sendPhoto`, `sendLivePhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendMessageDraft`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `sendChatJoinRequestWebApp`, `editForumTopic`, `editGeneralForumTopic`, `sendGift`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `editEphemeralMessageText`, `editEphemeralMessageMedia`, `editEphemeralMessageCaption`, `editEphemeralMessageReplyMarkup`, `sendSticker`, `sendRichMessage`, `sendRichMessageDraft`, `sendInvoice`, `editUserStarSubscription`, `sendGame`


[View InputInvoiceMessageContent documentation with fluent methods](../types/InputInvoiceMessageContent.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target bot, supergroup or channel in the format @username |
| `voice` | `InputFile` \| `string` | Yes | Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `receiverUserId` | `number` | No | For outgoing ephemeral messages, unique identifier of the user who will receive the message; for group and supergroup chats only. It is not guaranteed that the user will receive the message, especially if they are offline. See ephemeral message sending for more details. |
| `callbackQueryId` | `string` | No | For outgoing ephemeral messages, identifier of the callback query which triggerred the message if any |
| `caption` | `string` | No | Voice message caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the voice message caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `duration` | `number` | No | Duration of the voice message in seconds |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance. |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |


## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.sendVoice({});
});

// With filtering
bot.onMessage((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#sendVoice).
