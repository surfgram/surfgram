# ForumTopicClosed

This object represents a service message about a forum topic closed in the chat. Currently holds no information.

## Fields

| Name              | Type     | Required | Description                                                                                                                     |
| :---------------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------ |
| name              | `string` |    No    | Optional. New name of the topic, if it was edited                                                                               |
| iconCustomEmojiId | `string` |    No    | Optional. New identifier of the custom emoji shown as the topic icon, if it was edited; an empty string if the icon was removed |

## Fluent Methods

The `ForumTopicClosed` class has the following fluent methods that automatically inject contextual parameters:

### close

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.

**Required parameters:**

| Parameter                 | Type                                                                                     | Required | Description                                                                                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                  | `number` \| `string`                                                                     |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                                                                                         |
| `text`                    | `string`                                                                                 |   Yes    | Text of the message to be sent, 1-4096 characters after entities parsing                                                                                                                                                           |
| `businessConnectionId`    | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                                                           |
| `messageThreadId`         | `number`                                                                                 |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                                                                                                 |
| `directMessagesTopicId`   | `number`                                                                                 |    No    | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat                                                                                               |
| `parseMode`               | `string`                                                                                 |    No    | Mode for parsing entities in the message text. See formatting options for more details.                                                                                                                                            |
| `entities`                | `MessageEntity[]`                                                                        |    No    | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode                                                                                                               |
| `linkPreviewOptions`      | `LinkPreviewOptions`                                                                     |    No    | Link preview generation options for the message                                                                                                                                                                                    |
| `disableNotification`     | `boolean`                                                                                |    No    | Sends the message silently. Users will receive a notification with no sound.                                                                                                                                                       |
| `protectContent`          | `boolean`                                                                                |    No    | Protects the contents of the sent message from forwarding and saving                                                                                                                                                               |
| `allowPaidBroadcast`      | `boolean`                                                                                |    No    | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance                                           |
| `messageEffectId`         | `string`                                                                                 |    No    | Unique identifier of the message effect to be added to the message; for private chats only                                                                                                                                         |
| `suggestedPostParameters` | `SuggestedPostParameters`                                                                |    No    | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters`         | `ReplyParameters`                                                                        |    No    | Description of the message to reply to                                                                                                                                                                                             |
| `replyMarkup`             | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` |    No    | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user                                                    |

**Usage examples:**

1. Basic usage:

```typescript
const forumtopicclosed = new ForumTopicClosed(rawData, bot);
await forumtopicclosed.close({
  chatId: 123,
  text: 'example text',
});
```

2. In an event handler:

```typescript
bot.onForumTopicClosed(async (forumtopicclosed: ForumTopicClosed) => {
  // Auto-fills parameters from the forumtopicclosed instance
  await forumtopicclosed.close({ chatId: 'Response' });
});
```

**See also:** [close API method](../methods/close.md)

## Event Handlers

You can listen for ForumTopicClosed events using:

```typescript
// Type-specific handler
bot.onForumTopicClosed(async (forumtopicclosed: ForumTopicClosed) => {
  console.log('Received:', forumtopicclosed);
  // Use fluent methods
  await forumtopicclosed.close(...);
});

// Generic handler
bot.on('forumtopicclosed', async (data: ForumTopicClosed) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ForumTopicClosed).
