# removeChatVerification

Removes verification from a chat that is currently verified on behalf of the organization represented by the bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Chat (56 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatAdministratorCustomTitle`, `banChatSenderChat`, `unbanChatSenderChat`, `setChatPermissions`, `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `createChatSubscriptionInviteLink`, `editChatSubscriptionInviteLink`, `revokeChatInviteLink`, `approveChatJoinRequest`, `declineChatJoinRequest`, `setChatPhoto`, `deleteChatPhoto`, `setChatTitle`, `setChatDescription`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `leaveChat`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `setChatMenuButton`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `verifyChat`, `removeChatVerification`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatId

[View Chat documentation with fluent methods](../types/Chat.md)

## Parameters

| Parameter | Type                 | Required | Description                                                                                                |
| :-------- | :------------------- | :------: | :--------------------------------------------------------------------------------------------------------- |
| `chatId`  | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |

## Usage Example

```typescript
// When you already have a Chat instance
bot.onChat(async (chat: Chat) => {
  await chat.removeChatVerification();
});

// With filtering
bot.onChat(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#removeChatVerification).
