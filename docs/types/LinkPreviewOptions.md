# LinkPreviewOptions

Describes the options used for link preview generation.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| isDisabled | `boolean` | No | Optional. True, if the link preview is disabled |
| url | `string` | No | Optional. URL to use for the link preview. If empty, then the first URL found in the message text will be used |
| preferSmallMedia | `boolean` | No | Optional. True, if the media in the link preview is supposed to be shrunk; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview |
| preferLargeMedia | `boolean` | No | Optional. True, if the media in the link preview is supposed to be enlarged; ignored if the URL isn't explicitly specified or media size change isn't supported for the preview |
| showAboveText | `boolean` | No | Optional. True, if the link preview must be shown above the message text; otherwise, the link preview will be shown below the message text |

## Fluent Methods

The `LinkPreviewOptions` class has the following fluent methods that automatically inject contextual parameters:

### getMe

A simple method for testing your bot&#39;s authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const linkpreviewoptions = new LinkPreviewOptions(rawData, bot);
await linkpreviewoptions.getMe({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onLinkPreviewOptions(async (linkpreviewoptions: LinkPreviewOptions) => {
  // Auto-fills parameters from the linkpreviewoptions instance
  await linkpreviewoptions.getMe({ chatId: "Response" });
});
```

**See also:** [getMe API method](../methods/getMe.md)

### logOut

Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const linkpreviewoptions = new LinkPreviewOptions(rawData, bot);
await linkpreviewoptions.logOut({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onLinkPreviewOptions(async (linkpreviewoptions: LinkPreviewOptions) => {
  // Auto-fills parameters from the linkpreviewoptions instance
  await linkpreviewoptions.logOut({ chatId: "Response" });
});
```

**See also:** [logOut API method](../methods/logOut.md)

### close

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn&#39;t launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const linkpreviewoptions = new LinkPreviewOptions(rawData, bot);
await linkpreviewoptions.close({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onLinkPreviewOptions(async (linkpreviewoptions: LinkPreviewOptions) => {
  // Auto-fills parameters from the linkpreviewoptions instance
  await linkpreviewoptions.close({ chatId: "Response" });
});
```

**See also:** [close API method](../methods/close.md)

### sendMessage

Use this method to send text messages. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `text` | `string` | Yes | Text of the message to be sent, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const linkpreviewoptions = new LinkPreviewOptions(rawData, bot);
await linkpreviewoptions.sendMessage({
  chatId: 123,
  text: "example text",
});
```

2. In an event handler:

```typescript
bot.onLinkPreviewOptions(async (linkpreviewoptions: LinkPreviewOptions) => {
  // Auto-fills parameters from the linkpreviewoptions instance
  await linkpreviewoptions.sendMessage({ chatId: "Response" });
});
```

**See also:** [sendMessage API method](../methods/sendMessage.md)

### editMessageText

Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned. Note that business messages that were not sent by the bot and do not contain an inline keyboard can only be edited within 48 hours from the time they were sent.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `text` | `string` | Yes | New text of the message, 1-4096 characters after entities parsing |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message to be edited was sent |
| `chatId` | `number` \| `string` | No | Required if inline\_message\_id is not specified. Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `messageId` | `number` | No | Required if inline\_message\_id is not specified. Identifier of the message to edit |
| `inlineMessageId` | `string` | No | Required if chat\_id and message\_id are not specified. Identifier of the inline message |
| `parseMode` | `string` | No | Mode for parsing entities in the message text. See formatting options for more details. |
| `entities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse\_mode |
| `linkPreviewOptions` | `LinkPreviewOptions` | No | Link preview generation options for the message |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. |

**Usage examples:**

1. Basic usage:

```typescript
const linkpreviewoptions = new LinkPreviewOptions(rawData, bot);
await linkpreviewoptions.editMessageText({
  text: "example text",
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onLinkPreviewOptions(async (linkpreviewoptions: LinkPreviewOptions) => {
  // Auto-fills parameters from the linkpreviewoptions instance
  await linkpreviewoptions.editMessageText({ text: "Response" });
});
```

**See also:** [editMessageText API method](../methods/editMessageText.md)


## Event Handlers

You can listen for LinkPreviewOptions events using:

```typescript
// Type-specific handler
bot.onLinkPreviewOptions(async (linkpreviewoptions: LinkPreviewOptions) => {
  console.log('Received:', linkpreviewoptions);
  // Use fluent methods
  await linkpreviewoptions.getMe(...);
});

// Generic handler
bot.on('linkpreviewoptions', async (data: LinkPreviewOptions) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#LinkPreviewOptions).
