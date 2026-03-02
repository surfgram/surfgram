# setChatMemberTag

Use this method to set a tag for a regular member in a group or a supergroup. The bot must be an administrator in the chat for this to work and must have the can\_manage\_tags administrator right. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Chat (60 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatAdministratorCustomTitle`, `setChatMemberTag`, `banChatSenderChat`, `unbanChatSenderChat`, `setChatPermissions`, `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `createChatSubscriptionInviteLink`, `editChatSubscriptionInviteLink`, `revokeChatInviteLink`, `approveChatJoinRequest`, `declineChatJoinRequest`, `setChatPhoto`, `deleteChatPhoto`, `setChatTitle`, `setChatDescription`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `leaveChat`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `setChatMenuButton`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `verifyChat`, `removeChatVerification`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatId, userId

[View Chat documentation with fluent methods](../types/Chat.md)

### ChatMember (34 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatMemberTag`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** userId, chatId

[View ChatMember documentation with fluent methods](../types/ChatMember.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\) |
| `userId` | `number` | Yes | Unique identifier of the target user |
| `tag` | `string` | No | New tag for the member; 0-16 characters, emoji are not allowed |


## Usage Example

```typescript
// When you already have a Chat instance
bot.onChat(async (chat: Chat) => {
  await chat.setChatMemberTag();
});

// With filtering
bot.onChat((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setChatMemberTag).
