# Gift

This object represents a gift that can be sent by the bot.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Unique identifier of the gift |
| sticker | `Sticker` | Yes | The sticker that represents the gift |
| starCount | `number` | Yes | The number of Telegram Stars that must be paid to send the sticker |
| upgradeStarCount | `number` | No | Optional. The number of Telegram Stars that must be paid to upgrade the gift to a unique one |
| totalCount | `number` | No | Optional. The total number of the gifts of this type that can be sent; for limited gifts only |
| remainingCount | `number` | No | Optional. The number of remaining gifts of this type that can be sent; for limited gifts only |
| publisherChat | `Chat` | No | Optional. Information about the chat that published the gift |

## Fluent Methods

The `Gift` class has the following fluent methods that automatically inject contextual parameters:

### getAvailableGifts

Returns the list of gifts that can be sent by the bot to users and channel chats. Requires no parameters. Returns a Gifts object.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `giftId` | `this.id` | Identifier of the gift |
| `chatId` | `this.publisherChat?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | No | Required if chat\_id is not specified. Unique identifier of the target user who will receive the gift. |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const gift = new Gift(rawData, bot);
await gift.getAvailableGifts({
  userId: 123,
  payForUpgrade: true,
});
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.getAvailableGifts({ text: "Response" });
});
```

**See also:** [getAvailableGifts API method](../methods/getAvailableGifts.md)

### sendGift

Sends a gift to the given user or channel chat. The gift can&#39;t be converted to Telegram Stars by the receiver. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `giftId` | `this.id` | Identifier of the gift |
| `chatId` | `this.publisherChat?.id` | Required if user_id is not specified. Unique identifier for the chat or username of the channel (in the format @channelusername) that will receive the gift. |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | No | Required if chat\_id is not specified. Unique identifier of the target user who will receive the gift. |
| `payForUpgrade` | `boolean` | No | Pass True to pay for the gift upgrade from the bot's balance, thereby making the upgrade free for the receiver |
| `text` | `string` | No | Text that will be shown along with the gift; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const gift = new Gift(rawData, bot);
await gift.sendGift({
  userId: 123,
  payForUpgrade: true,
});
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.sendGift({ text: "Response" });
});
```

**See also:** [sendGift API method](../methods/sendGift.md)

### giftPremiumSubscription

Gifts a Telegram Premium subscription to the given user. Returns True on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `userId` | `number` | Yes | Unique identifier of the target user who will receive a Telegram Premium subscription |
| `monthCount` | `number` | Yes | Number of months the Telegram Premium subscription will be active for the user; must be one of 3, 6, or 12 |
| `starCount` | `number` | Yes | Number of Telegram Stars to pay for the Telegram Premium subscription; must be 1000 for 3 months, 1500 for 6 months, and 2500 for 12 months |
| `text` | `string` | No | Text that will be shown along with the service message about the subscription; 0-128 characters |
| `textParseMode` | `string` | No | Mode for parsing entities in the text. See formatting options for more details. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |
| `textEntities` | `MessageEntity[]` | No | A JSON-serialized list of special entities that appear in the gift text. It can be specified instead of text\_parse\_mode. Entities other than “bold”, “italic”, “underline”, “strikethrough”, “spoiler”, and “custom\_emoji” are ignored. |

**Usage examples:**

1. Basic usage:

```typescript
const gift = new Gift(rawData, bot);
await gift.giftPremiumSubscription({
  userId: 123,
  monthCount: 123,
});
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.giftPremiumSubscription({ text: "Response" });
});
```

**See also:** [giftPremiumSubscription API method](../methods/giftPremiumSubscription.md)

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
const gift = new Gift(rawData, bot);
await gift.setBusinessAccountGiftSettings(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.setBusinessAccountGiftSettings();
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
const gift = new Gift(rawData, bot);
await gift.getBusinessAccountGifts({
  businessConnectionId: "example text",
  excludeUnsaved: true,
});
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.getBusinessAccountGifts({ businessConnectionId: "Response" });
});
```

**See also:** [getBusinessAccountGifts API method](../methods/getBusinessAccountGifts.md)

### convertGiftToStars

Converts a given regular gift to Telegram Stars. Requires the can\_convert\_gifts\_to\_stars business bot right. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `ownedGiftId` | `this?.id` | Unique identifier of the regular gift that should be converted to Telegram Stars |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |

**Usage examples:**

1. Basic usage:

```typescript
const gift = new Gift(rawData, bot);
await gift.convertGiftToStars(
  "example text",
);
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.convertGiftToStars();
});
```

**See also:** [convertGiftToStars API method](../methods/convertGiftToStars.md)

### upgradeGift

Upgrades a given regular gift to a unique gift. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Additionally requires the can\_transfer\_stars business bot right if the upgrade is paid. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `ownedGiftId` | `this?.id` | Unique identifier of the regular gift that should be upgraded to a unique one |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `keepOriginalDetails` | `boolean` | No | Pass True to keep the original gift text, sender and receiver in the upgraded gift |
| `starCount` | `number` | No | The amount of Telegram Stars that will be paid for the upgrade from the business account balance. If gift.prepaid\_upgrade\_star\_count &gt; 0, then pass 0, otherwise, the can\_transfer\_stars business bot right is required and gift.upgrade\_star\_count must be passed. |

**Usage examples:**

1. Basic usage:

```typescript
const gift = new Gift(rawData, bot);
await gift.upgradeGift(
  "example text",
  true,
);
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.upgradeGift();
});
```

**See also:** [upgradeGift API method](../methods/upgradeGift.md)

### transferGift

Transfers an owned unique gift to another user. Requires the can\_transfer\_and\_upgrade\_gifts business bot right. Requires can\_transfer\_stars business bot right if the transfer is paid. Returns True on success.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `newOwnerChatId` | `this.publisherChat?.id` | Unique identifier of the chat which will own the gift. The chat must be active in the last 24 hours. |
| `ownedGiftId` | `this?.id` | Unique identifier of the regular gift that should be transferred |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `businessConnectionId` | `string` | Yes | Unique identifier of the business connection |
| `starCount` | `number` | No | The amount of Telegram Stars that will be paid for the transfer from the business account balance. If positive, then the can\_transfer\_stars business bot right is required. |

**Usage examples:**

1. Basic usage:

```typescript
const gift = new Gift(rawData, bot);
await gift.transferGift(
  "example text",
  123,
);
```

2. In an event handler:

```typescript
bot.onGift(async (gift: Gift) => {
  // Auto-fills parameters from the gift instance
  await gift.transferGift();
});
```

**See also:** [transferGift API method](../methods/transferGift.md)


## Event Handlers

You can listen for Gift events using:

```typescript
// Type-specific handler
bot.onGift(async (gift: Gift) => {
  console.log('Received:', gift);
  // Use fluent methods
  await gift.getAvailableGifts(...);
});

// Generic handler
bot.on('gift', async (data: Gift) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Gift).
