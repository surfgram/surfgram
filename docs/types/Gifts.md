# Gifts

This object represent a list of gifts.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| gifts | `Gift[]` | Yes | The list of gifts |

## Fluent Methods

The `Gifts` class has the following fluent methods that automatically inject contextual parameters:

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `giftId` | `this.gifts?.id` | Identifier of the gift |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | No | Required if chat\_id is not specified. Unique identifier of the target user who will receive the gift. |
| `chatId` | `number` \| `string` | No | Required if user\_id is not specified. Unique identifier for the chat or username of the channel \(in the format @channelusername\) that will receive the gift. |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const gifts = new Gifts(rawData, bot);
await gifts.getAvailableGifts({
  userId: 123,
  chatId: 123,
});
```

2. In an event handler:

```typescript
bot.onGifts(async (gifts: Gifts) => {
  // Auto-fills parameters from the gifts instance
  await gifts.getAvailableGifts({ chatId: "Response" });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

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
const gifts = new Gifts(rawData, bot);
await gifts.setBusinessAccountGiftSettings(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onGifts(async (gifts: Gifts) => {
  // Auto-fills parameters from the gifts instance
  await gifts.setBusinessAccountGiftSettings();
});
```

**See also:** [setBusinessAccountGiftSettings API method](../methods/setBusinessAccountGiftSettings.md)

### getBusinessAccountGifts

Returns the gifts received and owned by a managed business account. Requires the can\_view\_gifts\_and\_stars business bot right. Returns OwnedGifts on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `excludeUnsaved` | `boolean` | No | Pass True to exclude gifts that aren't saved to the account's profile page |
| `excludeSaved` | `boolean` | No | Pass True to exclude gifts that are saved to the account's profile page |
| `excludeUnlimited` | `boolean` | No | Pass True to exclude gifts that can be purchased an unlimited number of times |
| `excludeLimited` | `boolean` | No | Pass True to exclude gifts that can be purchased a limited number of times |
| `excludeUnique` | `boolean` | No | Pass True to exclude unique gifts |
| `sortByPrice` | `boolean` | No | Pass True to sort results by gift price instead of send date. Sorting is applied before pagination. |
| `offset` | `string` | No | Offset of the first entry to return as received from the previous request; use empty string to get the first chunk of results |
| `limit` | `number` | No | The maximum number of gifts to be returned; 1-100. Defaults to 100 |

**Usage examples:**

1. Basic usage:

```typescript
const gifts = new Gifts(rawData, bot);
await gifts.getBusinessAccountGifts({
  businessConnectionId: "example text",
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onGifts(async (gifts: Gifts) => {
  // Auto-fills parameters from the gifts instance
  await gifts.getBusinessAccountGifts({ businessConnectionId: "Response" });
});
```

**See also:** [getBusinessAccountGifts API method](../methods/getBusinessAccountGifts.md)


## Event Handlers

You can listen for Gifts events using:

```typescript
// Type-specific handler
bot.onGifts(async (gifts: Gifts) => {
  console.log('Received:', gifts);
  // Use fluent methods
  await gifts.getAvailableGifts(...);
});

// Generic handler
bot.on('gifts', async (data: Gifts) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Gifts).
