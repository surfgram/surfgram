# copyMessages

Use this method to copy messages of any kind. If some of the specified messages can&#39;t be found or copied, they are skipped. Service messages, paid media messages, giveaway messages, giveaway winners messages, and invoice messages can&#39;t be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don&#39;t have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### Message (49 methods)

**Available methods:** `sendMessage`, `forwardMessage`, `forwardMessages`, `copyMessage`, `copyMessages`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendMediaGroup`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `sendChatAction`, `setMessageReaction`, `editChatInviteLink`, `editChatSubscriptionInviteLink`, `pinChatMessage`, `unpinChatMessage`, `unpinAllChatMessages`, `editForumTopic`, `unpinAllForumTopicMessages`, `editGeneralForumTopic`, `unpinAllGeneralForumTopicMessages`, `sendGift`, `readBusinessMessage`, `deleteBusinessMessages`, `editStory`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `deleteMessage`, `deleteMessages`, `sendSticker`, `savePreparedInlineMessage`, `sendInvoice`, `editUserStarSubscription`, `sendGame`

**Auto-filled parameters:** chatId, messageThreadId, directMessagesTopicId, fromChatId

[View Message documentation with fluent methods](../types/Message.md)

## Parameters

| Parameter               | Type                 | Required | Description                                                                                                                                                 |
| :---------------------- | :------------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                | `number` \| `string` |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                  |
| `fromChatId`            | `number` \| `string` |   Yes    | Unique identifier for the chat where the original messages were sent \(or channel username in the format @channelusername\)                                 |
| `messageIds`            | `number[]`           |   Yes    | A JSON-serialized list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order. |
| `messageThreadId`       | `number`             |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                          |
| `directMessagesTopicId` | `number`             |    No    | Identifier of the direct messages topic to which the messages will be sent; required if the messages are sent to a direct messages chat                     |
| `disableNotification`   | `boolean`            |    No    | Sends the messages silently. Users will receive a notification with no sound.                                                                               |
| `protectContent`        | `boolean`            |    No    | Protects the contents of the sent messages from forwarding and saving                                                                                       |
| `removeCaption`         | `boolean`            |    No    | Pass True to copy the messages without their captions                                                                                                       |

## Usage Example

```typescript
// When you already have a Message instance
bot.onMessage(async (message: Message) => {
  await message.copyMessages({});
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

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#copyMessages).
