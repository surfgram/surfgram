# promoteChatMember

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Chat (59 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatAdministratorCustomTitle`, `banChatSenderChat`, `unbanChatSenderChat`, `setChatPermissions`, `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `createChatSubscriptionInviteLink`, `editChatSubscriptionInviteLink`, `revokeChatInviteLink`, `approveChatJoinRequest`, `declineChatJoinRequest`, `setChatPhoto`, `deleteChatPhoto`, `setChatTitle`, `setChatDescription`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `leaveChat`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `setChatMenuButton`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `verifyChat`, `removeChatVerification`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatId, userId

[View Chat documentation with fluent methods](../types/Chat.md)

### ChatMember (33 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** userId, chatId

[View ChatMember documentation with fluent methods](../types/ChatMember.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `userId` | `number` | Yes | Unique identifier of the target user |
| `isAnonymous` | `boolean` | No | Pass True if the administrator's presence in the chat is hidden |
| `canManageChat` | `boolean` | No | Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages, ignore slow mode, and send messages to the chat without paying Telegram Stars. Implied by any other administrator privilege. |
| `canDeleteMessages` | `boolean` | No | Pass True if the administrator can delete messages of other users |
| `canManageVideoChats` | `boolean` | No | Pass True if the administrator can manage video chats |
| `canRestrictMembers` | `boolean` | No | Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics. For backward compatibility, defaults to True for promotions of channel administrators |
| `canPromoteMembers` | `boolean` | No | Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly \(promoted by administrators that were appointed by him\) |
| `canChangeInfo` | `boolean` | No | Pass True if the administrator can change chat title, photo and other settings |
| `canInviteUsers` | `boolean` | No | Pass True if the administrator can invite new users to the chat |
| `canPostStories` | `boolean` | No | Pass True if the administrator can post stories to the chat |
| `canEditStories` | `boolean` | No | Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive |
| `canDeleteStories` | `boolean` | No | Pass True if the administrator can delete stories posted by other users |
| `canPostMessages` | `boolean` | No | Pass True if the administrator can post messages in the channel, approve suggested posts, or access channel statistics; for channels only |
| `canEditMessages` | `boolean` | No | Pass True if the administrator can edit messages of other users and can pin messages; for channels only |
| `canPinMessages` | `boolean` | No | Pass True if the administrator can pin messages; for supergroups only |
| `canManageTopics` | `boolean` | No | Pass True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only |
| `canManageDirectMessages` | `boolean` | No | Pass True if the administrator can manage direct messages within the channel and decline suggested posts; for channels only |


## Usage Example

```typescript
// When you already have a Chat instance
bot.onChat(async (chat: Chat) => {
  await chat.promoteChatMember({});
});

// With filtering
bot.onChat((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#promoteChatMember).
