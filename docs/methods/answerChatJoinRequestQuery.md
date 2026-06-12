# answerChatJoinRequestQuery

Use this method to process a received chat join request query. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Chat (65 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendChatAction`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatAdministratorCustomTitle`, `setChatMemberTag`, `banChatSenderChat`, `unbanChatSenderChat`, `setChatPermissions`, `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `createChatSubscriptionInviteLink`, `editChatSubscriptionInviteLink`, `revokeChatInviteLink`, `approveChatJoinRequest`, `declineChatJoinRequest`, `answerChatJoinRequestQuery`, `sendChatJoinRequestWebApp`, `setChatPhoto`, `deleteChatPhoto`, `setChatTitle`, `setChatDescription`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `leaveChat`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `setChatMenuButton`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `verifyChat`, `removeChatVerification`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatJoinRequestQueryId

[View Chat documentation with fluent methods](../types/Chat.md)

### ChatJoinRequest (36 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `getUserProfilePhotos`, `getUserProfileAudios`, `getFile`, `approveChatJoinRequest`, `declineChatJoinRequest`, `answerChatJoinRequestQuery`, `sendChatJoinRequestWebApp`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getUserPersonalChatMessages`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getManagedBotToken`, `getManagedBotAccessSettings`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getUserGifts`, `getChatGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatJoinRequestQueryId

[View ChatJoinRequest documentation with fluent methods](../types/ChatJoinRequest.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatJoinRequestQueryId` | `string` | Yes | Unique identifier of the join request query |
| `result` | `string` | Yes | Result of the query. Must be either “approve” to allow the user to join the chat, “decline” to disallow the user to join the chat, or “queue” to leave the decision to other administrators. |


## Usage Example

```typescript
// When you already have a Chat instance
bot.onChat(async (chat: Chat) => {
  await chat.answerChatJoinRequestQuery();
});

// With filtering
bot.onChat((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerChatJoinRequestQuery).
