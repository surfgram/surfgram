# Dice

This object represents an animated emoji that displays a random value.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| emoji | `string` | Yes | Emoji on which the dice throw animation is based |
| value | `number` | Yes | Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji |

## Fluent Methods

The `Dice` class has the following fluent methods that automatically inject contextual parameters:

### sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the message will be sent |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `emoji` | `string` | No | Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “” |
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | No | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user |

**Usage examples:**

1. Basic usage:

```typescript
const dice = new Dice(rawData, bot);
await dice.sendDice({
  chatId: 123,
  businessConnectionId: "example text",
});
```

2. In an event handler:

```typescript
bot.onDice(async (dice: Dice) => {
  // Auto-fills parameters from the dice instance
  await dice.sendDice({ chatId: "Response" });
});
```

**See also:** [sendDice API method](../methods/sendDice.md)


## Event Handlers

You can listen for Dice events using:

```typescript
// Type-specific handler
bot.onDice(async (dice: Dice) => {
  console.log('Received:', dice);
  // Use fluent methods
  await dice.sendDice(...);
});

// Generic handler
bot.on('dice', async (data: Dice) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Dice).
