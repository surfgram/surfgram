# ReactionType

This object describes the type of a reaction. Currently, it can be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the reaction, always “emoji” |
| emoji | `string` | Yes | Reaction emoji. Currently, it can be one of "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "" |

## Fluent Methods

The `ReactionType` class has the following fluent methods that automatically inject contextual parameters:

### setMessageReaction

Use this method to change the chosen reactions on a message. Service messages of some types can&#39;t be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. Bots can&#39;t use paid reactions. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `messageId` | `number` | Yes | Identifier of the target message. If the message belongs to a media group, the reaction is set to the first non-deleted message in the group instead. |
| `reaction` | `ReactionType[]` | No | A JSON-serialized list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. Paid reactions can't be used by bots. |
| `isBig` | `boolean` | No | Pass True to set the reaction with a big animation |

**Usage examples:**

1. Basic usage:

```typescript
const reactiontype = new ReactionType(rawData, bot);
await reactiontype.setMessageReaction(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onReactionType(async (reactiontype: ReactionType) => {
  // Auto-fills parameters from the reactiontype instance
  await reactiontype.setMessageReaction();
});
```

**See also:** [setMessageReaction API method](../methods/setMessageReaction.md)


## Event Handlers

You can listen for ReactionType events using:

```typescript
// Type-specific handler
bot.onReactionType(async (reactiontype: ReactionType) => {
  console.log('Received:', reactiontype);
  // Use fluent methods
  await reactiontype.setMessageReaction(...);
});

// Generic handler
bot.on('reactiontype', async (data: ReactionType) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ReactionType).
