# restrictChatMember

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Chat (56 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `sendChatAction`, `getUserProfilePhotos`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `setChatAdministratorCustomTitle`, `banChatSenderChat`, `unbanChatSenderChat`, `setChatPermissions`, `exportChatInviteLink`, `createChatInviteLink`, `editChatInviteLink`, `createChatSubscriptionInviteLink`, `editChatSubscriptionInviteLink`, `revokeChatInviteLink`, `approveChatJoinRequest`, `declineChatJoinRequest`, `setChatPhoto`, `deleteChatPhoto`, `setChatTitle`, `setChatDescription`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `leaveChat`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `setChatStickerSet`, `deleteChatStickerSet`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `setChatMenuButton`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `verifyChat`, `removeChatVerification`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** chatId, userId

[View Chat documentation with fluent methods](../types/Chat.md)

### ChatMember (30 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `getUserProfilePhotos`, `getFile`, `banChatMember`, `unbanChatMember`, `restrictChatMember`, `promoteChatMember`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** userId, chatId

[View ChatMember documentation with fluent methods](../types/ChatMember.md)

### ChatPermissions (28 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `getUserProfilePhotos`, `getFile`, `restrictChatMember`, `setChatPermissions`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

**Auto-filled parameters:** userId, chatId

[View ChatPermissions documentation with fluent methods](../types/ChatPermissions.md)

## Parameters

| Parameter                       | Type                 | Required | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :------------------------------ | :------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `chatId`                        | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target supergroup \(in the format @supergroupusername\)                                                                                                                                                                                                                                                                      |
| `userId`                        | `number`             |   Yes    | Unique identifier of the target user                                                                                                                                                                                                                                                                                                                                                  |
| `permissions`                   | `ChatPermissions`    |   Yes    | A JSON-serialized object for new user permissions                                                                                                                                                                                                                                                                                                                                     |
| `useIndependentChatPermissions` | `boolean`            |    No    | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. |
| `untilDate`                     | `number`             |    No    | Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever                                                                                                                                                                               |

## Usage Example

```typescript
// When you already have a Chat instance
bot.onChat(async (chat: Chat) => {
  await chat.restrictChatMember({});
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

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#restrictChatMember).
