# Update

This object represents an incoming update.At most one of the optional parameters can be present in any given update.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| updateId | `number` | Yes | The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This identifier becomes especially handy if you're using webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially. |
| message | `Message` | No | Optional. New incoming message of any kind - text, photo, sticker, etc. |
| editedMessage | `Message` | No | Optional. New version of a message that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. |
| channelPost | `Message` | No | Optional. New incoming channel post of any kind - text, photo, sticker, etc. |
| editedChannelPost | `Message` | No | Optional. New version of a channel post that is known to the bot and was edited. This update may at times be triggered by changes to message fields that are either unavailable or not actively used by your bot. |
| businessConnection | `BusinessConnection` | No | Optional. The bot was connected to or disconnected from a business account, or a user edited an existing connection with the bot |
| businessMessage | `Message` | No | Optional. New message from a connected business account |
| editedBusinessMessage | `Message` | No | Optional. New version of a message from a connected business account |
| deletedBusinessMessages | `BusinessMessagesDeleted` | No | Optional. Messages were deleted from a connected business account |
| messageReaction | `MessageReactionUpdated` | No | Optional. A reaction to a message was changed by a user. The bot must be an administrator in the chat and must explicitly specify "message\_reaction" in the list of allowed\_updates to receive these updates. The update isn't received for reactions set by bots. |
| messageReactionCount | `MessageReactionCountUpdated` | No | Optional. Reactions to a message with anonymous reactions were changed. The bot must be an administrator in the chat and must explicitly specify "message\_reaction\_count" in the list of allowed\_updates to receive these updates. The updates are grouped and can be sent with delay up to a few minutes. |
| inlineQuery | `InlineQuery` | No | Optional. New incoming inline query |
| chosenInlineResult | `ChosenInlineResult` | No | Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot. |
| callbackQuery | `CallbackQuery` | No | Optional. New incoming callback query |
| shippingQuery | `ShippingQuery` | No | Optional. New incoming shipping query. Only for invoices with flexible price |
| preCheckoutQuery | `PreCheckoutQuery` | No | Optional. New incoming pre-checkout query. Contains full information about checkout |
| purchasedPaidMedia | `PaidMediaPurchased` | No | Optional. A user purchased paid media with a non-empty payload sent by the bot in a non-channel chat |
| poll | `Poll` | No | Optional. New poll state. Bots receive only updates about manually stopped polls and polls, which are sent by the bot |
| pollAnswer | `PollAnswer` | No | Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself. |
| myChatMember | `ChatMemberUpdated` | No | Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user. |
| chatMember | `ChatMemberUpdated` | No | Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify "chat\_member" in the list of allowed\_updates to receive these updates. |
| chatJoinRequest | `ChatJoinRequest` | No | Optional. A request to join the chat has been sent. The bot must have the can\_invite\_users administrator right in the chat to receive these updates. |
| chatBoost | `ChatBoostUpdated` | No | Optional. A chat boost was added or changed. The bot must be an administrator in the chat to receive these updates. |
| removedChatBoost | `ChatBoostRemoved` | No | Optional. A boost was removed from a chat. The bot must be an administrator in the chat to receive these updates. |

## Fluent Methods

The `Update` class has the following fluent methods that automatically inject contextual parameters:

### getUpdates

Use this method to receive incoming updates using long polling \(wiki\). Returns an Array of Update objects.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `offset` | `number` | No | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update\_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. |
| `limit` | `number` | No | Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. |
| `timeout` | `number` | No | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. |
| `allowedUpdates` | `string[]` | No | A JSON-serialized list of the update types you want your bot to receive. For example, specify \["message", "edited\_channel\_post", "callback\_query"\] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat\_member, message\_reaction, and message\_reaction\_count \(default\). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to getUpdates, so unwanted updates may be received for a short period of time. |

**Usage examples:**

1. Basic usage:

```typescript
const update = new Update(rawData, bot);
await update.getUpdates({
  offset: 123,
  limit: 123,
});
```

2. In an event handler:

```typescript
bot.onUpdate(async (update: Update) => {
  // Auto-fills parameters from the update instance
  await update.getUpdates({});
});
```

**See also:** [getUpdates API method](../methods/getUpdates.md)


## Event Handlers

You can listen for Update events using:

```typescript
// Type-specific handler
bot.onUpdate(async (update: Update) => {
  console.log('Received:', update);
  // Use fluent methods
  await update.getUpdates(...);
});

// Generic handler
bot.on('update', async (data: Update) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Update).
