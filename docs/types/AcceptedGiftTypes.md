# AcceptedGiftTypes

This object describes the types of gifts that can be gifted to a user or a chat.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| unlimitedGifts | `boolean` | Yes | True, if unlimited regular gifts are accepted |
| limitedGifts | `boolean` | Yes | True, if limited regular gifts are accepted |
| uniqueGifts | `boolean` | Yes | True, if unique gifts or gifts that can be upgraded to unique for free are accepted |
| premiumSubscription | `boolean` | Yes | True, if a Telegram Premium subscription is accepted |
| giftsFromChannels | `boolean` | Yes | True, if transfers of unique gifts from channels are accepted |

## Fluent Methods

The `AcceptedGiftTypes` class has the following fluent methods that automatically inject contextual parameters:

### setBusinessAccountGiftSettings

Changes the privacy settings pertaining to incoming gifts in a managed business account. Requires the can\_change\_gift\_settings business bot right. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `showGiftButton` | `boolean` | Yes | Pass True, if a button for sending a gift to the user or by the business account must always be shown in the input field |
| `acceptedGiftTypes` | `AcceptedGiftTypes` | Yes | Types of gifts accepted by the business account |

**Usage examples:**

1. Basic usage:

```typescript
const acceptedgifttypes = new AcceptedGiftTypes(rawData, bot);
await acceptedgifttypes.setBusinessAccountGiftSettings(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onAcceptedGiftTypes(async (acceptedgifttypes: AcceptedGiftTypes) => {
  // Auto-fills parameters from the acceptedgifttypes instance
  await acceptedgifttypes.setBusinessAccountGiftSettings();
});
```

**See also:** [setBusinessAccountGiftSettings API method](../methods/setBusinessAccountGiftSettings.md)


## Event Handlers

You can listen for AcceptedGiftTypes events using:

```typescript
// Type-specific handler
bot.onAcceptedGiftTypes(async (acceptedgifttypes: AcceptedGiftTypes) => {
  console.log('Received:', acceptedgifttypes);
  // Use fluent methods
  await acceptedgifttypes.setBusinessAccountGiftSettings(...);
});

// Generic handler
bot.on('acceptedgifttypes', async (data: AcceptedGiftTypes) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#AcceptedGiftTypes).
