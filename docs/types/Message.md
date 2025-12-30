# Message

This object represents a message.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| messageId | `number` | Yes | Unique message identifier inside this chat. In specific instances \(e.g., message containing a video sent to a big chat\), the server might automatically schedule a message instead of sending it immediately. In such cases, this field will be 0 and the relevant message will be unusable until it is actually sent |
| messageThreadId | `number` | No | Optional. Unique identifier of a message thread to which the message belongs; for supergroups only |
| directMessagesTopic | `DirectMessagesTopic` | No | Optional. Information about the direct messages chat topic that contains the message |
| from | `User` | No | Optional. Sender of the message; may be empty for messages sent to channels. For backward compatibility, if the message was sent on behalf of a chat, the field contains a fake sender user in non-channel chats |
| senderChat | `Chat` | No | Optional. Sender of the message when sent on behalf of a chat. For example, the supergroup itself for messages sent by its anonymous administrators or a linked channel for messages automatically forwarded to the channel's discussion group. For backward compatibility, if the message was sent on behalf of a chat, the field from contains a fake sender user in non-channel chats. |
| senderBoostCount | `number` | No | Optional. If the sender of the message boosted the chat, the number of boosts added by the user |
| senderBusinessBot | `User` | No | Optional. The bot that actually sent the message on behalf of the business account. Available only for outgoing messages sent on behalf of the connected business account. |
| date | `number` | Yes | Date the message was sent in Unix time. It is always a positive number, representing a valid date. |
| businessConnectionId | `string` | No | Optional. Unique identifier of the business connection from which the message was received. If non-empty, the message belongs to a chat of the corresponding business account that is independent from any potential bot chat which might share the same identifier. |
| chat | `Chat` | Yes | Chat the message belongs to |
| forwardOrigin | `MessageOrigin` | No | Optional. Information about the original message for forwarded messages |
| isTopicMessage | `boolean` | No | Optional. True, if the message is sent to a forum topic |
| isAutomaticForward | `boolean` | No | Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group |
| replyToMessage | `Message` | No | Optional. For replies in the same chat and message thread, the original message. Note that the Message object in this field will not contain further reply\_to\_message fields even if it itself is a reply. |
| externalReply | `ExternalReplyInfo` | No | Optional. Information about the message that is being replied to, which may come from another chat or forum topic |
| quote | `TextQuote` | No | Optional. For replies that quote part of the original message, the quoted part of the message |
| replyToStory | `Story` | No | Optional. For replies to a story, the original story |
| replyToChecklistTaskId | `number` | No | Optional. Identifier of the specific checklist task that is being replied to |
| viaBot | `User` | No | Optional. Bot through which the message was sent |
| editDate | `number` | No | Optional. Date the message was last edited in Unix time |
| hasProtectedContent | `boolean` | No | Optional. True, if the message can't be forwarded |
| isFromOffline | `boolean` | No | Optional. True, if the message was sent by an implicit action, for example, as an away or a greeting business message, or as a scheduled message |
| isPaidPost | `boolean` | No | Optional. True, if the message is a paid post. Note that such posts must not be deleted for 24 hours to receive the payment and can't be edited. |
| mediaGroupId | `string` | No | Optional. The unique identifier of a media message group this message belongs to |
| authorSignature | `string` | No | Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator |
| paidStarCount | `number` | No | Optional. The number of Telegram Stars that were paid by the sender of the message to send it |
| text | `string` | No | Optional. For text messages, the actual UTF-8 text of the message |
| entities | `MessageEntity[]` | No | Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text |
| linkPreviewOptions | `LinkPreviewOptions` | No | Optional. Options used for link preview generation for the message, if it is a text message and link preview options were changed |
| suggestedPostInfo | `SuggestedPostInfo` | No | Optional. Information about suggested post parameters if the message is a suggested post in a channel direct messages chat. If the message is an approved or declined suggested post, then it can't be edited. |
| effectId | `string` | No | Optional. Unique identifier of the message effect added to the message |
| animation | `Animation` | No | Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set |
| audio | `Audio` | No | Optional. Message is an audio file, information about the file |
| document | `Document` | No | Optional. Message is a general file, information about the file |
| paidMedia | `PaidMediaInfo` | No | Optional. Message contains paid media; information about the paid media |
| photo | `PhotoSize[]` | No | Optional. Message is a photo, available sizes of the photo |
| sticker | `Sticker` | No | Optional. Message is a sticker, information about the sticker |
| story | `Story` | No | Optional. Message is a forwarded story |
| video | `Video` | No | Optional. Message is a video, information about the video |
| videoNote | `VideoNote` | No | Optional. Message is a video note, information about the video message |
| voice | `Voice` | No | Optional. Message is a voice message, information about the file |
| caption | `string` | No | Optional. Caption for the animation, audio, document, paid media, photo, video or voice |
| captionEntities | `MessageEntity[]` | No | Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption |
| showCaptionAboveMedia | `boolean` | No | Optional. True, if the caption must be shown above the message media |
| hasMediaSpoiler | `boolean` | No | Optional. True, if the message media is covered by a spoiler animation |
| checklist | `Checklist` | No | Optional. Message is a checklist |
| contact | `Contact` | No | Optional. Message is a shared contact, information about the contact |
| dice | `Dice` | No | Optional. Message is a dice with random value |
| game | `Game` | No | Optional. Message is a game, information about the game. More about games » |
| poll | `Poll` | No | Optional. Message is a native poll, information about the poll |
| venue | `Venue` | No | Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set |
| location | `Location` | No | Optional. Message is a shared location, information about the location |
| newChatMembers | `User[]` | No | Optional. New members that were added to the group or supergroup and information about them \(the bot itself may be one of these members\) |
| leftChatMember | `User` | No | Optional. A member was removed from the group, information about them \(this member may be the bot itself\) |
| newChatTitle | `string` | No | Optional. A chat title was changed to this value |
| newChatPhoto | `PhotoSize[]` | No | Optional. A chat photo was change to this value |
| deleteChatPhoto | `boolean` | No | Optional. Service message: the chat photo was deleted |
| groupChatCreated | `boolean` | No | Optional. Service message: the group has been created |
| supergroupChatCreated | `boolean` | No | Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a directly created supergroup. |
| channelChatCreated | `boolean` | No | Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply\_to\_message if someone replies to a very first message in a channel. |
| messageAutoDeleteTimerChanged | `MessageAutoDeleteTimerChanged` | No | Optional. Service message: auto-delete timer settings changed in the chat |
| migrateToChatId | `number` | No | Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. |
| migrateFromChatId | `number` | No | Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier. |
| pinnedMessage | `MaybeInaccessibleMessage` | No | Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply\_to\_message fields even if it itself is a reply. |
| invoice | `Invoice` | No | Optional. Message is an invoice for a payment, information about the invoice. More about payments » |
| successfulPayment | `SuccessfulPayment` | No | Optional. Message is a service message about a successful payment, information about the payment. More about payments » |
| refundedPayment | `RefundedPayment` | No | Optional. Message is a service message about a refunded payment, information about the payment. More about payments » |
| usersShared | `UsersShared` | No | Optional. Service message: users were shared with the bot |
| chatShared | `ChatShared` | No | Optional. Service message: a chat was shared with the bot |
| gift | `GiftInfo` | No | Optional. Service message: a regular gift was sent or received |
| uniqueGift | `UniqueGiftInfo` | No | Optional. Service message: a unique gift was sent or received |
| connectedWebsite | `string` | No | Optional. The domain name of the website on which the user has logged in. More about Telegram Login » |
| writeAccessAllowed | `WriteAccessAllowed` | No | Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess |
| passportData | `PassportData` | No | Optional. Telegram Passport data |
| proximityAlertTriggered | `ProximityAlertTriggered` | No | Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location. |
| boostAdded | `ChatBoostAdded` | No | Optional. Service message: user boosted the chat |
| chatBackgroundSet | `ChatBackground` | No | Optional. Service message: chat background set |
| checklistTasksDone | `ChecklistTasksDone` | No | Optional. Service message: some tasks in a checklist were marked as done or not done |
| checklistTasksAdded | `ChecklistTasksAdded` | No | Optional. Service message: tasks were added to a checklist |
| directMessagePriceChanged | `DirectMessagePriceChanged` | No | Optional. Service message: the price for paid messages in the corresponding direct messages chat of a channel has changed |
| forumTopicCreated | `ForumTopicCreated` | No | Optional. Service message: forum topic created |
| forumTopicEdited | `ForumTopicEdited` | No | Optional. Service message: forum topic edited |
| forumTopicClosed | `ForumTopicClosed` | No | Optional. Service message: forum topic closed |
| forumTopicReopened | `ForumTopicReopened` | No | Optional. Service message: forum topic reopened |
| generalForumTopicHidden | `GeneralForumTopicHidden` | No | Optional. Service message: the 'General' forum topic hidden |
| generalForumTopicUnhidden | `GeneralForumTopicUnhidden` | No | Optional. Service message: the 'General' forum topic unhidden |
| giveawayCreated | `GiveawayCreated` | No | Optional. Service message: a scheduled giveaway was created |
| giveaway | `Giveaway` | No | Optional. The message is a scheduled giveaway message |
| giveawayWinners | `GiveawayWinners` | No | Optional. A giveaway with public winners was completed |
| giveawayCompleted | `GiveawayCompleted` | No | Optional. Service message: a giveaway without public winners was completed |
| paidMessagePriceChanged | `PaidMessagePriceChanged` | No | Optional. Service message: the price for paid messages has changed in the chat |
| suggestedPostApproved | `SuggestedPostApproved` | No | Optional. Service message: a suggested post was approved |
| suggestedPostApprovalFailed | `SuggestedPostApprovalFailed` | No | Optional. Service message: approval of a suggested post has failed |
| suggestedPostDeclined | `SuggestedPostDeclined` | No | Optional. Service message: a suggested post was declined |
| suggestedPostPaid | `SuggestedPostPaid` | No | Optional. Service message: payment for a suggested post was received |
| suggestedPostRefunded | `SuggestedPostRefunded` | No | Optional. Service message: payment for a suggested post was refunded |
| videoChatScheduled | `VideoChatScheduled` | No | Optional. Service message: video chat scheduled |
| videoChatStarted | `VideoChatStarted` | No | Optional. Service message: video chat started |
| videoChatEnded | `VideoChatEnded` | No | Optional. Service message: video chat ended |
| videoChatParticipantsInvited | `VideoChatParticipantsInvited` | No | Optional. Service message: new participants invited to a video chat |
| webAppData | `WebAppData` | No | Optional. Service message: data sent by a Web App |
| replyMarkup | `InlineKeyboardMarkup` | No | Optional. Inline keyboard attached to the message. login\_url buttons are represented as ordinary url buttons. |

## Fluent Methods

The `Message` class has the following fluent methods that automatically inject contextual parameters:

### sendMessage

Use this method to send text messages. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
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

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendMessage({
  text: "example text",
  parseMode: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendMessage({ text: "Response" });
});
```

**See also:** [sendMessage API method](../methods/sendMessage.md)

### forwardMessage

Use this method to forward messages of any kind. Service messages and messages with protected content can&#39;t be forwarded. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Message identifier in the chat specified in from_chat_id |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be forwarded; required if the message is forwarded to a direct messages chat |
| `fromChatId` | `this.from?.id` | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `videoStartTimestamp` | `number` | No | New start timestamp for the forwarded video in the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the forwarded message from forwarding and saving |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.forwardMessage({
  videoStartTimestamp: 123,
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.forwardMessage({});
});
```

**See also:** [forwardMessage API method](../methods/forwardMessage.md)

### forwardMessages

Use this method to forward multiple messages of any kind. If some of the specified messages can&#39;t be found or forwarded, they are skipped. Service messages and messages with protected content can&#39;t be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the messages will be forwarded; required if the messages are forwarded to a direct messages chat |
| `fromChatId` | `this.from?.id` | Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageIds` | `number[]` | Yes | A JSON-serialized list of 1-100 identifiers of messages in the chat from\_chat\_id to forward. The identifiers must be specified in a strictly increasing order. |
| `disableNotification` | `boolean` | No | Sends the messages silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the forwarded messages from forwarding and saving |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.forwardMessages({
  messageIds: [123],
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.forwardMessages({});
});
```

**See also:** [forwardMessages API method](../methods/forwardMessages.md)

### copyMessage

Use this method to copy messages of any kind. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn&#39;t have a link to the original message. Returns the MessageId of the sent message on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Message identifier in the chat specified in from_chat_id |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `fromChatId` | `this.from?.id` | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `videoStartTimestamp` | `number` | No | New start timestamp for the copied video in the message |
| `caption` | `string` | No | New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept |
| `parseMode` | `string` | No | Mode for parsing entities in the new caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.copyMessage({
  videoStartTimestamp: 123,
  caption: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.copyMessage({ caption: "Response" });
});
```

**See also:** [copyMessage API method](../methods/copyMessage.md)

### copyMessages

Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct\_option\_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don&#39;t have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat |
| `fromChatId` | `this.from?.id` | Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageIds` | `number[]` | Yes | A JSON-serialized list of 1-100 identifiers of messages in the chat from\_chat\_id to copy. The identifiers must be specified in a strictly increasing order. |
| `disableNotification` | `boolean` | No | Sends the messages silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent messages from forwarding and saving |
| `removeCaption` | `boolean` | No | Pass True to copy the messages without their captions |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.copyMessages({
  messageIds: [123],
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.copyMessages({});
});
```

**See also:** [copyMessages API method](../methods/copyMessages.md)

### sendPhoto

Use this method to send photos. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `photo` | `InputFile` \| `string` | Yes | Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More information on Sending Files » |
| `caption` | `string` | No | Photo caption \(may also be used when resending photos by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the photo caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `hasSpoiler` | `boolean` | No | Pass True if the photo needs to be covered with a spoiler animation |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendPhoto({
  photo: {} as any,
  caption: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendPhoto({ photo: "Response" });
});
```

**See also:** [sendPhoto API method](../methods/sendPhoto.md)

### sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `audio` | `InputFile` \| `string` | Yes | Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `caption` | `string` | No | Audio caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the audio caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `duration` | `number` | No | Duration of the audio in seconds |
| `performer` | `string` | No | Performer |
| `title` | `string` | No | Track name |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendAudio({
  audio: {} as any,
  caption: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendAudio({ audio: "Response" });
});
```

**See also:** [sendAudio API method](../methods/sendAudio.md)

### sendDocument

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `document` | `InputFile` \| `string` | Yes | File to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `caption` | `string` | No | Document caption \(may also be used when resending documents by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the document caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `disableContentTypeDetection` | `boolean` | No | Disables automatic server-side content type detection for files uploaded using multipart/form-data |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendDocument({
  document: {} as any,
  thumbnail: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendDocument({ document: "Response" });
});
```

**See also:** [sendDocument API method](../methods/sendDocument.md)

### sendVideo

Use this method to send video files, Telegram clients support MPEG4 videos \(other formats may be sent as Document\). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `video` | `InputFile` \| `string` | Yes | Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More information on Sending Files » |
| `duration` | `number` | No | Duration of sent video in seconds |
| `width` | `number` | No | Video width |
| `height` | `number` | No | Video height |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `cover` | `InputFile` \| `string` | No | Cover for the video in the message. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |
| `startTimestamp` | `number` | No | Start timestamp for the video in the message |
| `caption` | `string` | No | Video caption \(may also be used when resending videos by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the video caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `hasSpoiler` | `boolean` | No | Pass True if the video needs to be covered with a spoiler animation |
| `supportsStreaming` | `boolean` | No | Pass True if the uploaded video is suitable for streaming |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendVideo({
  video: {} as any,
  duration: 123,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendVideo({ video: "Response" });
});
```

**See also:** [sendVideo API method](../methods/sendVideo.md)

### sendAnimation

Use this method to send animation files \(GIF or H.264/MPEG-4 AVC video without sound\). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `animation` | `InputFile` \| `string` | Yes | Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More information on Sending Files » |
| `duration` | `number` | No | Duration of sent animation in seconds |
| `width` | `number` | No | Animation width |
| `height` | `number` | No | Animation height |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `caption` | `string` | No | Animation caption \(may also be used when resending animation by file\_id\), 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the animation caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `hasSpoiler` | `boolean` | No | Pass True if the animation needs to be covered with a spoiler animation |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendAnimation({
  animation: {} as any,
  duration: 123,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendAnimation({ animation: "Response" });
});
```

**See also:** [sendAnimation API method](../methods/sendAnimation.md)

### sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS, or in .MP3 format, or in .M4A format \(other formats may be sent as Audio or Document\). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `voice` | `InputFile` \| `string` | Yes | Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files » |
| `caption` | `string` | No | Voice message caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the voice message caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `duration` | `number` | No | Duration of the voice message in seconds |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendVoice({
  voice: {} as any,
  caption: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendVoice({ voice: "Response" });
});
```

**See also:** [sendVoice API method](../methods/sendVoice.md)

### sendVideoNote

As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `videoNote` | `InputFile` \| `string` | Yes | Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers \(recommended\) or upload a new video using multipart/form-data. More information on Sending Files ». Sending video notes by a URL is currently unsupported |
| `duration` | `number` | No | Duration of sent video in seconds |
| `length` | `number` | No | Video width and height, i.e. diameter of the video message |
| `thumbnail` | `InputFile` \| `string` | No | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://&lt;file\_attach\_name&gt;” if the thumbnail was uploaded using multipart/form-data under &lt;file\_attach\_name&gt;. More information on Sending Files » |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendVideoNote({
  videoNote: {} as any,
  duration: 123,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendVideoNote({ videoNote: "Response" });
});
```

**See also:** [sendVideoNote API method](../methods/sendVideoNote.md)

### sendPaidMedia

Use this method to send paid media. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `starCount` | `number` | Yes | The number of Telegram Stars that must be paid to buy access to the media; 1-10000 |
| `media` | `InputPaidMedia[]` | Yes | A JSON-serialized array describing the media to be sent; up to 10 items |
| `payload` | `string` | No | Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `caption` | `string` | No | Media caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the media caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendPaidMedia({
  starCount: 123,
  media: [{} as any],
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendPaidMedia({ payload: "Response" });
});
```

**See also:** [sendPaidMedia API method](../methods/sendPaidMedia.md)

### sendMediaGroup

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Message objects that were sent is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `media` | `any[]` | Yes | A JSON-serialized array describing messages to be sent, must include 2-10 items |
| `disableNotification` | `boolean` | No | Sends messages silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent messages from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendMediaGroup({
  media: [{} as any],
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendMediaGroup({ messageEffectId: "Response" });
});
```

**See also:** [sendMediaGroup API method](../methods/sendMediaGroup.md)

### sendLocation

Use this method to send point on the map. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `latitude` | `number` | Yes | Latitude of the location |
| `longitude` | `number` | Yes | Longitude of the location |
| `horizontalAccuracy` | `number` | No | The radius of uncertainty for the location, measured in meters; 0-1500 |
| `livePeriod` | `number` | No | Period in seconds during which the location will be updated \(see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. |
| `heading` | `number` | No | For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. |
| `proximityAlertRadius` | `number` | No | For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendLocation({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendLocation({ messageEffectId: "Response" });
});
```

**See also:** [sendLocation API method](../methods/sendLocation.md)

### sendVenue

Use this method to send information about a venue. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `latitude` | `number` | Yes | Latitude of the venue |
| `longitude` | `number` | Yes | Longitude of the venue |
| `title` | `string` | Yes | Name of the venue |
| `address` | `string` | Yes | Address of the venue |
| `foursquareId` | `string` | No | Foursquare identifier of the venue |
| `foursquareType` | `string` | No | Foursquare type of the venue, if known. \(For example, “arts\_entertainment/default”, “arts\_entertainment/aquarium” or “food/icecream”.\) |
| `googlePlaceId` | `string` | No | Google Places identifier of the venue |
| `googlePlaceType` | `string` | No | Google Places type of the venue. \(See supported types.\) |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendVenue({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendVenue({ title: "Response" });
});
```

**See also:** [sendVenue API method](../methods/sendVenue.md)

### sendContact

Use this method to send phone contacts. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `phoneNumber` | `string` | Yes | Contact's phone number |
| `firstName` | `string` | Yes | Contact's first name |
| `lastName` | `string` | No | Contact's last name |
| `vcard` | `string` | No | Additional data about the contact in the form of a vCard, 0-2048 bytes |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendContact({
  phoneNumber: "example text",
  firstName: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendContact({ phoneNumber: "Response" });
});
```

**See also:** [sendContact API method](../methods/sendContact.md)

### sendPoll

Use this method to send a native poll. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). Polls can't be sent to channel direct messages chats. |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `question` | `string` | Yes | Poll question, 1-300 characters |
| `options` | `InputPollOption[]` | Yes | A JSON-serialized list of 2-12 answer options |
| `questionParseMode` | `string` | No | Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed |
| `questionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll question. It can be specified instead of question\_parse\_mode |
| `isAnonymous` | `boolean` | No | True, if the poll needs to be anonymous, defaults to True |
| `type` | `string` | No | Poll type, “quiz” or “regular”, defaults to “regular” |
| `allowsMultipleAnswers` | `boolean` | No | True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False |
| `correctOptionId` | `number` | No | 0-based identifier of the correct answer option, required for polls in quiz mode |
| `explanation` | `string` | No | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing |
| `explanationParseMode` | `string` | No | Mode for parsing entities in the explanation. See formatting options for more details. |
| `explanationEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the poll explanation. It can be specified instead of explanation\_parse\_mode |
| `openPeriod` | `number` | No | Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close\_date. |
| `closeDate` | `number` | No | Point in time \(Unix timestamp\) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open\_period. |
| `isClosed` | `boolean` | No | Pass True if the poll needs to be immediately closed. This can be useful for poll preview. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendPoll({
  question: "example text",
  options: [{} as any],
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendPoll({ question: "Response" });
});
```

**See also:** [sendPoll API method](../methods/sendPoll.md)

### sendChecklist

Use this method to send a checklist on behalf of a connected business account. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `checklist` | `InputChecklist` | Yes | A JSON-serialized object for the checklist to send |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message |
| `replyParameters` | `ReplyParameters` | No | A JSON-serialized object for description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendChecklist({
  checklist: {} as any,
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendChecklist({ messageEffectId: "Response" });
});
```

**See also:** [sendChecklist API method](../methods/sendChecklist.md)

### sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `emoji` | `string` | No | Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendDice({
  emoji: "example text",
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendDice({ emoji: "Response" });
});
```

**See also:** [sendDice API method](../methods/sendDice.md)

### sendChatAction

Use this method when you need to tell the user that something is happening on the bot&#39;s side. The status is set for 5 seconds or less \(when a message arrives from your bot, Telegram clients clear its typing status\). Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Channel chats and channel direct messages chats aren't supported. |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the action will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread; for supergroups only |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `action` | `string` | Yes | Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload\_photo for photos, record\_video or upload\_video for videos, record\_voice or upload\_voice for voice notes, upload\_document for general files, choose\_sticker for stickers, find\_location for location data, record\_video\_note or upload\_video\_note for video notes. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendChatAction(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendChatAction();
});
```

**See also:** [sendChatAction API method](../methods/sendChatAction.md)

### setMessageReaction

Use this method to change the chosen reactions on a message. Service messages of some types can&#39;t be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can&#39;t use paid reactions. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `reaction` | `ReactionType[]` | No | A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots. |
| `isBig` | `boolean` | No | Pass True to set the reaction with a big animation |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.setMessageReaction(
  [{} as any],
  true,
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.setMessageReaction();
});
```

**See also:** [setMessageReaction API method](../methods/setMessageReaction.md)

### editChatInviteLink

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `inviteLink` | `string` | Yes | The invite link to edit |
| `name` | `string` | No | Invite link name; 0-32 characters |
| `expireDate` | `number` | No | Point in time \(Unix timestamp\) when the link will expire |
| `memberLimit` | `number` | No | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 |
| `createsJoinRequest` | `boolean` | No | True, if users joining the chat via the link need to be approved by chat administrators. If True, member\_limit can't be specified |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editChatInviteLink({
  inviteLink: "example text",
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editChatInviteLink({ inviteLink: "Response" });
});
```

**See also:** [editChatInviteLink API method](../methods/editChatInviteLink.md)

### editChatSubscriptionInviteLink

Use this method to edit a subscription invite link created by the bot. The bot must have the can\_invite\_users administrator rights. Returns the edited invite link as a ChatInviteLink object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `inviteLink` | `string` | Yes | The invite link to edit |
| `name` | `string` | No | Invite link name; 0-32 characters |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editChatSubscriptionInviteLink(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editChatSubscriptionInviteLink();
});
```

**See also:** [editChatSubscriptionInviteLink API method](../methods/editChatSubscriptionInviteLink.md)

### pinChatMessage

Use this method to add a message to the list of pinned messages in a chat. In private chats and channel direct messages chats, all non-service messages can be pinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to pin messages in groups and channels respectively. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Identifier of a message to pin |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be pinned |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `disableNotification` | `boolean` | No | Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.pinChatMessage(
  true,
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.pinChatMessage();
});
```

**See also:** [pinChatMessage API method](../methods/pinChatMessage.md)

### unpinChatMessage

Use this method to remove a message from the list of pinned messages in a chat. In private chats and channel direct messages chats, all messages can be unpinned. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin messages in groups and channels respectively. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be unpinned |
| `messageId` | `this.id` | Identifier of the message to unpin. Required if business_connection_id is specified. If not specified, the most recent pinned message (by sending date) will be unpinned. |


**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.unpinChatMessage();
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.unpinChatMessage();
});
```

**See also:** [unpinChatMessage API method](../methods/unpinChatMessage.md)

### unpinAllChatMessages

Use this method to clear the list of pinned messages in a chat. In private chats and channel direct messages chats, no additional rights are required to unpin all pinned messages. Conversely, the bot must be an administrator with the &#39;can\_pin\_messages&#39; right or the &#39;can\_edit\_messages&#39; right to unpin all pinned messages in groups and channels respectively. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.unpinAllChatMessages();
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.unpinAllChatMessages();
});
```

**See also:** [unpinAllChatMessages API method](../methods/unpinAllChatMessages.md)

### editForumTopic

Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights, unless it is the creator of the topic. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | No | New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept |
| `iconCustomEmojiId` | `string` | No | New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editForumTopic(
  "example text",
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editForumTopic();
});
```

**See also:** [editForumTopic API method](../methods/editForumTopic.md)

### unpinAllForumTopicMessages

Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread of the forum topic |


**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.unpinAllForumTopicMessages();
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.unpinAllForumTopicMessages();
});
```

**See also:** [unpinAllForumTopicMessages API method](../methods/unpinAllForumTopicMessages.md)

### editGeneralForumTopic

Use this method to edit the name of the &#39;General&#39; topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can\_manage\_topics administrator rights. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | New topic name, 1-128 characters |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editGeneralForumTopic(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editGeneralForumTopic();
});
```

**See also:** [editGeneralForumTopic API method](../methods/editGeneralForumTopic.md)

### unpinAllGeneralForumTopicMessages

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can\_pin\_messages administrator right in the supergroup. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |


**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.unpinAllGeneralForumTopicMessages();
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.unpinAllGeneralForumTopicMessages();
});
```

**See also:** [unpinAllGeneralForumTopicMessages API method](../methods/unpinAllGeneralForumTopicMessages.md)

### sendGift

Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `giftId` | `this.gift?.id` | Identifier of the gift |
| `chatId` | `this.chat?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |
| `userId` | `this.usersShared?.id` | Required if chat_id is not specified. Unique identifier of the target user who will receive the gift. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendGift({
  payForUpgrade: true,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendGift({ text: "Response" });
});
```

**See also:** [sendGift API method](../methods/sendGift.md)

### readBusinessMessage

Marks incoming message as read on behalf of a business account. Requires the can\_read\_messages business bot right. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which to read the message |
| `chatId` | `this.chat?.id` | Unique identifier of the chat in which the message was received. The chat must have been active in the last 24 hours. |
| `messageId` | `this.id` | Unique identifier of the message to mark as read |


**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.readBusinessMessage();
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.readBusinessMessage();
});
```

**See also:** [readBusinessMessage API method](../methods/readBusinessMessage.md)

### deleteBusinessMessages

Delete messages on behalf of a business account. Requires the can\_delete\_sent\_messages business bot right to delete messages sent by the bot itself, or the can\_delete\_all\_messages business bot right to delete any message. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which to delete the messages |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageIds` | `number[]` | Yes | A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.deleteBusinessMessages(
  [123],
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.deleteBusinessMessages();
});
```

**See also:** [deleteBusinessMessages API method](../methods/deleteBusinessMessages.md)

### editStory

Edits a story previously posted by the bot on behalf of a managed business account. Requires the can\_manage\_stories business bot right. Returns Story on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection |
| `storyId` | `this.story?.id` | Unique identifier of the story to edit |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `content` | `InputStoryContent` | Yes | Content of the story |
| `caption` | `string` | No | Caption of the story, 0-2048 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the story caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `areas` | `StoryArea[]` | No | A JSON-serialized list of clickable areas to be shown on the story |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editStory({
  content: {} as any,
  caption: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editStory({ caption: "Response" });
});
```

**See also:** [editStory API method](../methods/editStory.md)

### editMessageText

Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `this.chat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `this.replyToMessage?.id` | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | New text of the message, 1-4096 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editMessageText({
  text: "example text",
  parseMode: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editMessageText({ text: "Response" });
});
```

**See also:** [editMessageText API method](../methods/editMessageText.md)

### editMessageCaption

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `this.chat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `this.replyToMessage?.id` | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `caption` | `string` | No | New caption of the message, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the message caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages. |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editMessageCaption({
  caption: "example text",
  parseMode: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editMessageCaption({ caption: "Response" });
});
```

**See also:** [editMessageCaption API method](../methods/editMessageCaption.md)

### editMessageMedia

Use this method to edit animation, audio, document, photo, or video messages, or to add media to text messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can&#39;t be uploaded; use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `this.chat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `this.replyToMessage?.id` | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `media` | `InputMedia` | Yes | A JSON-serialized object for a new media content of the message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editMessageMedia({
  media: {} as any,
  replyMarkup: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editMessageMedia({});
});
```

**See also:** [editMessageMedia API method](../methods/editMessageMedia.md)

### editMessageLiveLocation

Use this method to edit live location messages. A location can be edited until its live\_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `this.chat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `this.replyToMessage?.id` | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `latitude` | `number` | Yes | Latitude of new location |
| `longitude` | `number` | Yes | Longitude of new location |
| `livePeriod` | `number` | No | New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live\_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live\_period remains unchanged |
| `horizontalAccuracy` | `number` | No | The radius of uncertainty for the location, measured in meters; 0-1500 |
| `heading` | `number` | No | Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified. |
| `proximityAlertRadius` | `number` | No | The maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified. |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editMessageLiveLocation({
  latitude: 123,
  longitude: 123,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editMessageLiveLocation({});
});
```

**See also:** [editMessageLiveLocation API method](../methods/editMessageLiveLocation.md)

### stopMessageLiveLocation

Use this method to stop updating a live location message before live\_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `this.chat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Required if inline_message_id is not specified. Identifier of the message with live location to stop |
| `inlineMessageId` | `this.replyToMessage?.id` | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for a new inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.stopMessageLiveLocation({
  replyMarkup: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.stopMessageLiveLocation({});
});
```

**See also:** [stopMessageLiveLocation API method](../methods/stopMessageLiveLocation.md)

### editMessageChecklist

Use this method to edit a checklist on behalf of a connected business account. On success, the edited Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat |
| `messageId` | `this.id` | Unique identifier for the target message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `checklist` | `InputChecklist` | Yes | A JSON-serialized object for the new checklist |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for the new inline keyboard for the message |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editMessageChecklist({
  checklist: {} as any,
  replyMarkup: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editMessageChecklist({});
});
```

**See also:** [editMessageChecklist API method](../methods/editMessageChecklist.md)

### editMessageReplyMarkup

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `this.chat?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `this.replyToMessage?.id` | Required if chat_id and message_id are not specified. Identifier of the inline message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editMessageReplyMarkup({
  replyMarkup: {} as any,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editMessageReplyMarkup({});
});
```

**See also:** [editMessageReplyMarkup API method](../methods/editMessageReplyMarkup.md)

### deleteMessage

Use this method to delete a message, including service messages, with the following limitations:- A message can only be deleted if it was sent less than 48 hours ago.- Service messages about a supergroup, channel, or forum topic creation can&#39;t be deleted.- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.- Bots can delete outgoing messages in private chats, groups, and supergroups.- Bots can delete incoming messages in private chats.- Bots granted can\_post\_messages permissions can delete outgoing messages in channels.- If the bot is an administrator of a group, it can delete any message there.- If the bot has can\_delete\_messages administrator right in a supergroup or a channel, it can delete any message there.- If the bot has can\_manage\_direct\_messages administrator right in a channel, it can delete any message in the corresponding direct messages chat.Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageId` | `this.id` | Identifier of the message to delete |


**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.deleteMessage();
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.deleteMessage();
});
```

**See also:** [deleteMessage API method](../methods/deleteMessage.md)

### deleteMessages

Use this method to delete multiple messages simultaneously. If some of the specified messages can&#39;t be found, they are skipped. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `messageIds` | `number[]` | Yes | A JSON-serialized list of 1-100 identifiers of messages to delete. See deleteMessage for limitations on which messages can be deleted |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.deleteMessages(
  [123],
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.deleteMessages();
});
```

**See also:** [deleteMessages API method](../methods/deleteMessages.md)

### sendSticker

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `sticker` | `InputFile` \| `string` | Yes | Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. More information on Sending Files ». Video and animated stickers can't be sent via an HTTP URL. |
| `emoji` | `string` | No | Emoji associated with the sticker; only for just uploaded stickers |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendSticker({
  sticker: {} as any,
  emoji: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendSticker({ sticker: "Response" });
});
```

**See also:** [sendSticker API method](../methods/sendSticker.md)

### savePreparedInlineMessage

Stores a message that can be sent by a user of a Mini App. Returns a PreparedInlineMessage object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.usersShared?.id` | Unique identifier of the target user that can use the prepared message |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `result` | `InlineQueryResult` | Yes | A JSON-serialized object describing the message to be sent |
| `allowUserChats` | `boolean` | No | Pass True if the message can be sent to private chats with users |
| `allowBotChats` | `boolean` | No | Pass True if the message can be sent to private chats with bots |
| `allowGroupChats` | `boolean` | No | Pass True if the message can be sent to group and supergroup chats |
| `allowChannelChats` | `boolean` | No | Pass True if the message can be sent to channel chats |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.savePreparedInlineMessage({
  result: {} as any,
  allowUserChats: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.savePreparedInlineMessage({});
});
```

**See also:** [savePreparedInlineMessage API method](../methods/savePreparedInlineMessage.md)

### sendInvoice

Use this method to send invoices. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `directMessagesTopicId` | `this.directMessagesTopic?.id` | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `title` | `string` | Yes | Product name, 1-32 characters |
| `description` | `string` | Yes | Product description, 1-255 characters |
| `payload` | `string` | Yes | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `currency` | `string` | Yes | Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. |
| `prices` | `LabeledPrice[]` | Yes | Price breakdown, a JSON-serialized list of components \(e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.\). Must contain exactly one item for payments in Telegram Stars. |
| `providerToken` | `string` | No | Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. |
| `maxTipAmount` | `number` | No | The maximum accepted amount for tips in the smallest units of the currency \(integer, not float/double\). For example, for a maximum tip of US$ 1.45 pass max\_tip\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). Defaults to 0. Not supported for payments in Telegram Stars. |
| `suggestedTipAmounts` | `number[]` | No | A JSON-serialized array of suggested amounts of tips in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount. |
| `startParameter` | `string` | No | Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot \(instead of a Pay button\), with the value used as the start parameter |
| `providerData` | `string` | No | JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| `photoUrl` | `string` | No | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
| `photoSize` | `number` | No | Photo size in bytes |
| `photoWidth` | `number` | No | Photo width |
| `photoHeight` | `number` | No | Photo height |
| `needName` | `boolean` | No | Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. |
| `needPhoneNumber` | `boolean` | No | Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. |
| `needEmail` | `boolean` | No | Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. |
| `needShippingAddress` | `boolean` | No | Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. |
| `sendPhoneNumberToProvider` | `boolean` | No | Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. |
| `sendEmailToProvider` | `boolean` | No | Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. |
| `isFlexible` | `boolean` | No | Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendInvoice({
  title: "example text",
  description: "example text",
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendInvoice({ title: "Response" });
});
```

**See also:** [sendInvoice API method](../methods/sendInvoice.md)

### editUserStarSubscription

Allows the bot to cancel or re-enable extension of a subscription paid in Telegram Stars. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.usersShared?.id` | Identifier of the user whose subscription will be edited |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `telegramPaymentChargeId` | `string` | Yes | Telegram payment identifier for the subscription |
| `isCanceled` | `boolean` | Yes | Pass True to cancel extension of the user subscription; the subscription must be active up to the end of the current subscription period. Pass False to allow the user to re-enable a subscription that was previously canceled by the bot. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.editUserStarSubscription(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.editUserStarSubscription();
});
```

**See also:** [editUserStarSubscription API method](../methods/editUserStarSubscription.md)

### sendGame

Use this method to send a game. On success, the sent Message is returned.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this.chat?.id` | Unique identifier for the target chat. Games can't be sent to channel direct messages chats and channel chats. |
| `businessConnectionId` | `this.businessConnectionId` | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `this.messageThreadId` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `gameShortName` | `string` | Yes | Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather. |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. If empty, one 'Play game\_title' button will be shown. If not empty, the first button must launch the game. |

**Usage examples:**

1. Basic usage:

```typescript
const message = new Message(rawData, bot);
await message.sendGame({
  gameShortName: "example text",
  disableNotification: true,
});
```

2. In an event handler:

```typescript
bot.onMessage(async (message: Message) => {
  // Auto-fills parameters from the message instance
  await message.sendGame({ gameShortName: "Response" });
});
```

**See also:** [sendGame API method](../methods/sendGame.md)


## Event Handlers

You can listen for Message events using:

```typescript
// Type-specific handler
bot.onMessage(async (message: Message) => {
  console.log('Received:', message);
  // Use fluent methods
  await message.sendMessage(...);
});

// Generic handler
bot.on('message', async (data: Message) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Message).
