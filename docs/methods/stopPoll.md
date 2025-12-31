# stopPoll

Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### Poll (2 methods)

**Available methods:** `sendPoll`, `stopPoll`

[View Poll documentation with fluent methods](../types/Poll.md)

### InlineKeyboardMarkup (30 methods)

**Available methods:** `getMe`, `logOut`, `close`, `sendMessage`, `copyMessage`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `sendPaidMedia`, `sendLocation`, `sendVenue`, `sendContact`, `sendPoll`, `sendChecklist`, `sendDice`, `editMessageText`, `editMessageCaption`, `editMessageMedia`, `editMessageLiveLocation`, `stopMessageLiveLocation`, `editMessageChecklist`, `editMessageReplyMarkup`, `stopPoll`, `sendSticker`, `sendInvoice`, `sendGame`

[View InlineKeyboardMarkup documentation with fluent methods](../types/InlineKeyboardMarkup.md)

## Parameters

| Parameter              | Type                   | Required | Description                                                                                                |
| :--------------------- | :--------------------- | :------: | :--------------------------------------------------------------------------------------------------------- |
| `chatId`               | `number` \| `string`   |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `messageId`            | `number`               |   Yes    | Identifier of the original message with the poll                                                           |
| `businessConnectionId` | `string`               |    No    | Unique identifier of the business connection on behalf of which the message to be edited was sent          |
| `replyMarkup`          | `InlineKeyboardMarkup` |    No    | A JSON-serialized object for a new message inline keyboard.                                                |

## Usage Example

```typescript
// When you already have a Poll instance
bot.onPoll(async (poll: Poll) => {
  await poll.stopPoll();
});

// With filtering
bot.onPoll(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#stopPoll).
