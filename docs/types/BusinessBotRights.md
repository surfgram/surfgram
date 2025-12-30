# BusinessBotRights

Represents the rights of a business bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| canReply | `boolean` | No | Optional. True, if the bot can send and edit messages in the private chats that had incoming messages in the last 24 hours |
| canReadMessages | `boolean` | No | Optional. True, if the bot can mark incoming private messages as read |
| canDeleteSentMessages | `boolean` | No | Optional. True, if the bot can delete messages sent by the bot |
| canDeleteAllMessages | `boolean` | No | Optional. True, if the bot can delete all private messages in managed chats |
| canEditName | `boolean` | No | Optional. True, if the bot can edit the first and last name of the business account |
| canEditBio | `boolean` | No | Optional. True, if the bot can edit the bio of the business account |
| canEditProfilePhoto | `boolean` | No | Optional. True, if the bot can edit the profile photo of the business account |
| canEditUsername | `boolean` | No | Optional. True, if the bot can edit the username of the business account |
| canChangeGiftSettings | `boolean` | No | Optional. True, if the bot can change the privacy settings pertaining to gifts for the business account |
| canViewGiftsAndStars | `boolean` | No | Optional. True, if the bot can view gifts and the amount of Telegram Stars owned by the business account |
| canConvertGiftsToStars | `boolean` | No | Optional. True, if the bot can convert regular gifts owned by the business account to Telegram Stars |
| canTransferAndUpgradeGifts | `boolean` | No | Optional. True, if the bot can transfer and upgrade gifts owned by the business account |
| canTransferStars | `boolean` | No | Optional. True, if the bot can transfer Telegram Stars received by the business account to its own account, or use them to upgrade and transfer gifts |
| canManageStories | `boolean` | No | Optional. True, if the bot can post, edit and delete stories on behalf of the business account |


## Event Handlers

You can listen for BusinessBotRights events using:

```typescript
// Type-specific handler
bot.onBusinessBotRights(async (businessbotrights: BusinessBotRights) => {
  console.log('Received:', businessbotrights);
});

// Generic handler
bot.on('businessbotrights', async (data: BusinessBotRights) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BusinessBotRights).
