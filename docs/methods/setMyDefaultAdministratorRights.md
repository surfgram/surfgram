# setMyDefaultAdministratorRights

Use this method to change the default administrator rights requested by the bot when it&#39;s added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### ChatAdministratorRights (27 methods)

**Available methods:** `getUpdates`, `getWebhookInfo`, `getMe`, `getUserProfilePhotos`, `getFile`, `getChat`, `getChatAdministrators`, `getChatMemberCount`, `getChatMember`, `getForumTopicIconStickers`, `getUserChatBoosts`, `getBusinessConnection`, `getMyCommands`, `getMyName`, `getMyDescription`, `getMyShortDescription`, `getChatMenuButton`, `setMyDefaultAdministratorRights`, `getMyDefaultAdministratorRights`, `getAvailableGifts`, `getBusinessAccountStarBalance`, `getBusinessAccountGifts`, `getStickerSet`, `getCustomEmojiStickers`, `getMyStarBalance`, `getStarTransactions`, `getGameHighScores`

[View ChatAdministratorRights documentation with fluent methods](../types/ChatAdministratorRights.md)

## Parameters

| Parameter     | Type                      | Required | Description                                                                                                                                                                     |
| :------------ | :------------------------ | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rights`      | `ChatAdministratorRights` |    No    | A JSON-serialized object describing new default administrator rights. If not specified, the default administrator rights will be cleared.                                       |
| `forChannels` | `boolean`                 |    No    | Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed. |

## Usage Example

```typescript
// When you already have a ChatAdministratorRights instance
bot.onChatAdministratorRights(async (chatadministratorrights: ChatAdministratorRights) => {
  await chatadministratorrights.setMyDefaultAdministratorRights();
});

// With filtering
bot.onChatAdministratorRights(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setMyDefaultAdministratorRights).
