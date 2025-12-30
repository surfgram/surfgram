# giftPremiumSubscription

Gifts a Telegram Premium subscription to the given user. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### MessageEntity (42 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `editForumTopic`, `editGeneralForumTopic`, `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `postStory`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `sendSticker`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** userId

[View MessageEntity documentation with fluent methods](../types/MessageEntity.md)

### Gift (8 methods)

**Available methods:** `getAvailableGifts`, `sendGift`, `giftPremiumSubscription`, `setBusinessAccountGiftSettings`, `getBusinessAccountGifts`, `convertGiftToStars`, `upgradeGift`, `transferGift`

[View Gift documentation with fluent methods](../types/Gift.md)

## Parameters

| Parameter       | Type              | Required | Description                                                                                                                                                                                                                             |
| :-------------- | :---------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userId`        | `number`          |   Yes    | Unique identifier of the target user who will receive a Telegram Premium subscription                                                                                                                                                   |
| `monthCount`    | `number`          |   Yes    | Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12                                                                                                                              |
| `starCount`     | `number`          |   Yes    | Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months                                                                                             |
| `text`          | `string`          |    No    | Text that will be shown along with the service message about the subscription; 0-128 characters                                                                                                                                         |
| `textParseMode` | `string`          |    No    | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored.                                          |
| `textEntities`  | `MessageEntity[]` |    No    | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text_parse_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom_emoji” are ignored. |

## Usage Example

```typescript
// When you already have a MessageEntity instance
bot.onMessageEntity(async (messageentity: MessageEntity) => {
  await messageentity.giftPremiumSubscription({});
});

// With filtering
bot.onMessageEntity(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#giftPremiumSubscription).
