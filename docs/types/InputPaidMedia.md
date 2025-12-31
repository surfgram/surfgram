# InputPaidMedia

This object describes the paid media to be sent. Currently, it can be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the media, must be photo |
| media | `string` | Yes | File to send. Pass a file\_id to send a file that exists on the Telegram servers \(recommended\), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://&lt;file\_attach\_name&gt;” to upload a new one using multipart/form-data under &lt;file\_attach\_name&gt; name. More information on Sending Files » |

## Fluent Methods

The `InputPaidMedia` class has the following fluent methods that automatically inject contextual parameters:

### sendPaidMedia

Use this method to send paid media. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\). If the chat is a channel, all Telegram Star proceeds from this media will be credited to the chat's balance. Otherwise, they will be credited to the bot's balance. |
| `starCount` | `number` | Yes | The number of Telegram Stars that must be paid to buy access to the media; 1-25000 |
| `media` | `InputPaidMedia[]` | Yes | A JSON-serialized array describing the media to be sent; up to 10 items |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `payload` | `string` | No | Bot-defined paid media payload, 0-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `caption` | `string` | No | Media caption, 0-1024 characters after entities parsing |
| `parseMode` | `string` | No | Mode for parsing entities in the media caption. See formatting options for more details. |
| `captionEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse\_mode |
| `showCaptionAboveMedia` | `boolean` | No | Pass True, if the caption must be shown above the message media |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const inputpaidmedia = new InputPaidMedia(rawData, bot);
await inputpaidmedia.sendPaidMedia({
  chatId: 123,
  starCount: 123,
});
```

2. In an event handler:

```typescript
bot.onInputPaidMedia(async (inputpaidmedia: InputPaidMedia) => {
  // Auto-fills parameters from the inputpaidmedia instance
  await inputpaidmedia.sendPaidMedia({ chatId: "Response" });
});
```

**See also:** [sendPaidMedia API method](../methods/sendPaidMedia.md)


## Event Handlers

You can listen for InputPaidMedia events using:

```typescript
// Type-specific handler
bot.onInputPaidMedia(async (inputpaidmedia: InputPaidMedia) => {
  console.log('Received:', inputpaidmedia);
  // Use fluent methods
  await inputpaidmedia.sendPaidMedia(...);
});

// Generic handler
bot.on('inputpaidmedia', async (data: InputPaidMedia) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputPaidMedia).
