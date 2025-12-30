# deleteBusinessMessages

Delete messages on behalf of a business account. Requires the can_delete_sent_messages business bot right to delete messages sent by the bot itself, or the can_delete_all_messages business bot right to delete any message. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (49 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** businessConnectionId

[View Message documentation with fluent methods](../types/Message.md)

## Parameters

| Parameter              | Type       | Required | Description                                                                                                                                                                    |
| :--------------------- | :--------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `businessConnectionId` | `string`   |   Yes    | Unique identifier of the business connection on behalf of which to delete the messages                                                                                         |
| `messageIds`           | `number[]` |   Yes    | A JSON-serialized list of 1-100 identifiers of messages to delete. All messages must be from the same chat. See deleteMessage for limitations on which messages can be deleted |

## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.deleteBusinessMessages();
});

// With filtering
bot.onMessage(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#deleteBusinessMessages).
