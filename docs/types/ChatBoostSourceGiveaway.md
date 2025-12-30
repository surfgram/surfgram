# ChatBoostSourceGiveaway

The boost was obtained by the creation of a Telegram Premium or a Telegram Star giveaway. This boosts the chat 4 times for the duration of the corresponding Telegram Premium subscription for Telegram Premium giveaways and prize\_star\_count / 500 times for one year for Telegram Star giveaways.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| source | `string` | Yes | Source of the boost, always “giveaway” |
| giveawayMessageId | `number` | Yes | Identifier of a message in the chat with the giveaway; the message could have been deleted already. May be 0 if the message isn't sent yet. |
| user | `User` | No | Optional. User that won the prize in the giveaway if any; for Telegram Premium giveaways only |
| prizeStarCount | `number` | No | Optional. The number of Telegram Stars to be split between giveaway winners; for Telegram Star giveaways only |
| isUnclaimed | `boolean` | No | Optional. True, if the giveaway was completed, but there was no user to win the prize |

## Fluent Methods

The `ChatBoostSourceGiveaway` class has the following fluent methods that automatically inject contextual parameters:

### getUpdates

Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update\_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. |
| `limit` | `number` | No | Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. |
| `timeout` | `number` | No | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. |
| `allowedUpdates` | `string[]` | No | A JSON-serialized list of the update types you want your bot to receive. For example, specify \["message", "edited\_channel\_post", "callback\_query"\] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat\_member, message\_reaction, and message\_reaction\_count \(default\). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getUpdates({
  offset: 123,
  limit: 123,
});
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getUpdates({});
});
```

**See also:** [getUpdates API method](../methods/getUpdates.md)

### getWebhookInfo

Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `url` | `string` | Yes | Webhook URL, may be empty if webhook is not set up |
| `hasCustomCertificate` | `boolean` | Yes | True, if a custom certificate was provided for webhook certificate checks |
| `pendingUpdateCount` | `number` | Yes | Number of updates awaiting delivery |
| `ipAddress` | `string` | No | Optional. Currently used webhook IP address |
| `lastErrorDate` | `number` | No | Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook |
| `lastErrorMessage` | `string` | No | Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| `lastSynchronizationErrorDate` | `number` | No | Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters |
| `maxConnections` | `number` | No | Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery |
| `allowedUpdates` | `string[]` | No | Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat\_member |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getWebhookInfo({
  url: "example text",
  hasCustomCertificate: true,
});
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getWebhookInfo({ url: "Response" });
});
```

**See also:** [getWebhookInfo API method](../methods/getWebhookInfo.md)

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only |
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

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMe({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMe({ text: "Response" });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### getUserProfilePhotos

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.user?.id` | Unique identifier of the target user |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Sequential number of the first photo to be returned. By default, all photos are returned. |
| `limit` | `number` | No | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getUserProfilePhotos(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getUserProfilePhotos();
});
```

**See also:** [getUserProfilePhotos API method](../methods/getUserProfilePhotos.md)

### getFile

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot&lt;token&gt;/&lt;file\_path&gt;, where &lt;file\_path&gt; is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `fileId` | `string` | Yes | File identifier to get information about |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getFile(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getFile();
});
```

**See also:** [getFile API method](../methods/getFile.md)

### getChat

Use this method to get up-to-date information about the chat. Returns a ChatFullInfo object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getChat();
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getChat();
});
```

**See also:** [getChat API method](../methods/getChat.md)

### getChatAdministrators

Use this method to get a list of administrators in a chat, which aren&#39;t bots. Returns an Array of ChatMember objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getChatAdministrators();
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getChatAdministrators();
});
```

**See also:** [getChatAdministrators API method](../methods/getChatAdministrators.md)

### getChatMemberCount

Use this method to get the number of members in a chat. Returns Int on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getChatMemberCount();
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getChatMemberCount();
});
```

**See also:** [getChatMemberCount API method](../methods/getChatMemberCount.md)

### getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.user?.id` | Unique identifier of the target user |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getChatMember();
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getChatMember();
});
```

**See also:** [getChatMember API method](../methods/getChatMember.md)

### getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Topic name, 1-128 characters |
| `iconColor` | `number` | No | Color of the topic icon in RGB format. Currently, must be one of 7322096 \(0x6FB9F0\), 16766590 \(0xFFD67E\), 13338331 \(0xCB86DB\), 9367192 \(0x8EEE98\), 16749490 \(0xFF93B2\), or 16478047 \(0xFB6F5F\) |
| `iconCustomEmojiId` | `string` | No | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getForumTopicIconStickers(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getForumTopicIconStickers();
});
```

**See also:** [getForumTopicIconStickers API method](../methods/getForumTopicIconStickers.md)

### getUserChatBoosts

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.user?.id` | Unique identifier of the target user |
| `chatId` | `this?.id` | Unique identifier for the chat or username of the channel (in the format @channelusername) |


**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getUserChatBoosts();
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getUserChatBoosts();
});
```

**See also:** [getUserChatBoosts API method](../methods/getUserChatBoosts.md)

### getBusinessConnection

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getBusinessConnection(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getBusinessConnection();
});
```

**See also:** [getBusinessConnection API method](../methods/getBusinessConnection.md)

### getMyCommands

Use this method to get the current list of the bot&#39;s commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren&#39;t set, an empty list is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `scope` | `BotCommandScope` | No | A JSON-serialized object, describing scope of users. Defaults to BotCommandScopeDefault. |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMyCommands(
  {} as any,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMyCommands();
});
```

**See also:** [getMyCommands API method](../methods/getMyCommands.md)

### getMyName

Use this method to get the current bot name for the given user language. Returns BotName on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMyName(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMyName();
});
```

**See also:** [getMyName API method](../methods/getMyName.md)

### getMyDescription

Use this method to get the current bot description for the given user language. Returns BotDescription on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMyDescription(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMyDescription();
});
```

**See also:** [getMyDescription API method](../methods/getMyDescription.md)

### getMyShortDescription

Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `languageCode` | `string` | No | A two-letter ISO 639-1 language code or an empty string |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMyShortDescription(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMyShortDescription();
});
```

**See also:** [getMyShortDescription API method](../methods/getMyShortDescription.md)

### getChatMenuButton

Use this method to get the current value of the bot&#39;s menu button in a private chat, or the default menu button. Returns MenuButton on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `chatId` | `this?.id` | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned |


**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getChatMenuButton();
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getChatMenuButton();
});
```

**See also:** [getChatMenuButton API method](../methods/getChatMenuButton.md)

### getMyDefaultAdministratorRights

Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `forChannels` | `boolean` | No | Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMyDefaultAdministratorRights(
  true,
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMyDefaultAdministratorRights();
});
```

**See also:** [getMyDefaultAdministratorRights API method](../methods/getMyDefaultAdministratorRights.md)

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.user?.id` | Required if chat_id is not specified. Unique identifier of the target user who will receive the gift. |
| `chatId` | `this?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `giftId` | `string` | Yes | Identifier of the gift |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getAvailableGifts({
  giftId: "example text",
  payForUpgrade: true,
});
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getAvailableGifts({ giftId: "Response" });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

### getBusinessAccountStarBalance

Returns the amount of Telegram Stars owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns StarAmount on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getBusinessAccountStarBalance(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getBusinessAccountStarBalance();
});
```

**See also:** [getBusinessAccountStarBalance API method](../methods/getBusinessAccountStarBalance.md)

### getBusinessAccountGifts

Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `excludeUnsaved` | `boolean` | No | Pass True to exclude gifts that aren't saved to the account's profile page |
| `excludeSaved` | `boolean` | No | Pass True to exclude gifts that are saved to the account's profile page |
| `excludeUnlimited` | `boolean` | No | Pass True to exclude gifts that can be purchased an unlimited number of times |
| `excludeLimited` | `boolean` | No | Pass True to exclude gifts that can be purchased a limited number of times |
| `excludeUnique` | `boolean` | No | Pass True to exclude unique gifts |
| `sortByPrice` | `boolean` | No | Pass True to sort results by gift price instead of send date. Sorting is applied before pagination. |
| `offset` | `string` | No | Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results |
| `limit` | `number` | No | The maximum number of gifts to be returned; 1-100. Defaults to 100 |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getBusinessAccountGifts({
  businessConnectionId: "example text",
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getBusinessAccountGifts({ businessConnectionId: "Response" });
});
```

**See also:** [getBusinessAccountGifts API method](../methods/getBusinessAccountGifts.md)

### getStickerSet

Use this method to get a sticker set. On success, a StickerSet object is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `name` | `string` | Yes | Name of the sticker set |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getStickerSet(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getStickerSet();
});
```

**See also:** [getStickerSet API method](../methods/getStickerSet.md)

### getCustomEmojiStickers

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `customEmojiIds` | `string[]` | Yes | A JSON-serialized list of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getCustomEmojiStickers(
  ["example text"],
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getCustomEmojiStickers();
});
```

**See also:** [getCustomEmojiStickers API method](../methods/getCustomEmojiStickers.md)

### getMyStarBalance

A method to get the current Telegram Stars balance of the bot. Requires no parameters. On success, returns a StarAmount object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Number of transactions to skip in the response |
| `limit` | `number` | No | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getMyStarBalance(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getMyStarBalance();
});
```

**See also:** [getMyStarBalance API method](../methods/getMyStarBalance.md)

### getStarTransactions

Returns the bot&#39;s Telegram Star transactions in chronological order. On success, returns a StarTransactions object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Number of transactions to skip in the response |
| `limit` | `number` | No | The maximum number of transactions to be retrieved. Values between 1-100 are accepted. Defaults to 100. |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getStarTransactions(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getStarTransactions();
});
```

**See also:** [getStarTransactions API method](../methods/getStarTransactions.md)

### getGameHighScores

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `userId` | `this.user?.id` | Target user id |
| `messageId` | `this.giveawayMessageId?.id` | Required if inline_message_id is not specified. Identifier of the sent message |
| `chatId` | `this?.id` | Required if inline_message_id is not specified. Unique identifier for the target chat |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |

**Usage examples:**

1. Basic usage:

```typescript
const chatboostsourcegiveaway = new ChatBoostSourceGiveaway(rawData, bot);
await chatboostsourcegiveaway.getGameHighScores(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  // Auto-fills parameters from the chatboostsourcegiveaway instance
  await chatboostsourcegiveaway.getGameHighScores();
});
```

**See also:** [getGameHighScores API method](../methods/getGameHighScores.md)


## Event Handlers

You can listen for ChatBoostSourceGiveaway events using:

```typescript
// Type-specific handler
bot.onChatBoostSourceGiveaway(async (chatboostsourcegiveaway: ChatBoostSourceGiveaway) => {
  console.log('Received:', chatboostsourcegiveaway);
  // Use fluent methods
  await chatboostsourcegiveaway.getUpdates(...);
});

// Generic handler
bot.on('chatboostsourcegiveaway', async (data: ChatBoostSourceGiveaway) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChatBoostSourceGiveaway).
