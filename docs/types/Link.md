# Link

Represents an HTTP link.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| url | `string` | Yes | URL of the link |

## Fluent Methods

The `Link` class has the following fluent methods that automatically inject contextual parameters:

### exportChatInviteLink

Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel in the format @username |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.exportChatInviteLink(
  123,
);
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.exportChatInviteLink();
});
```

**See also:** [exportChatInviteLink API method](../methods/exportChatInviteLink.md)

### createChatInviteLink

Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel in the format @username |
| `name` | `string` | No | Invite link name; 0-32 characters |
| `expireDate` | `number` | No | Point in time \(Unix timestamp\) when the link will expire |
| `memberLimit` | `number` | No | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 |
| `createsJoinRequest` | `boolean` | No | True, if users joining the chat via the link need to be approved by chat administrators. If True, member\_limit can't be specified. |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.createChatInviteLink({
  chatId: 123,
  name: "example text",
});
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.createChatInviteLink({ chatId: "Response" });
});
```

**See also:** [createChatInviteLink API method](../methods/createChatInviteLink.md)

### editChatInviteLink

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel in the format @username |
| `inviteLink` | `string` | Yes | The invite link to edit |
| `name` | `string` | No | Invite link name; 0-32 characters |
| `expireDate` | `number` | No | Point in time \(Unix timestamp\) when the link will expire |
| `memberLimit` | `number` | No | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 |
| `createsJoinRequest` | `boolean` | No | True, if users joining the chat via the link need to be approved by chat administrators. If True, member\_limit can't be specified. |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.editChatInviteLink({
  chatId: 123,
  inviteLink: "example text",
});
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.editChatInviteLink({ chatId: "Response" });
});
```

**See also:** [editChatInviteLink API method](../methods/editChatInviteLink.md)

### createChatSubscriptionInviteLink

Use this method to create a subscription invite link for a channel chat. The bot must have the can\_invite\_users administrator rights. The link can be edited using the method editChatSubscriptionInviteLink or revoked using the method revokeChatInviteLink. Returns the new invite link as a ChatInviteLink object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target channel chat or username of the target channel in the format @username |
| `subscriptionPeriod` | `number` | Yes | The number of seconds the subscription will be active for before the next payment. Currently, it must always be 2592000 \(30 days\). |
| `subscriptionPrice` | `number` | Yes | The amount of Telegram Stars a user must pay initially and after each subsequent subscription period to be a member of the chat; 1-10000 |
| `name` | `string` | No | Invite link name; 0-32 characters |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.createChatSubscriptionInviteLink(
  123,
  123,
);
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.createChatSubscriptionInviteLink();
});
```

**See also:** [createChatSubscriptionInviteLink API method](../methods/createChatSubscriptionInviteLink.md)

### editChatSubscriptionInviteLink

Use this method to edit a subscription invite link created by the bot. The bot must have the can\_invite\_users administrator rights. Returns the edited invite link as a ChatInviteLink object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel in the format @username |
| `inviteLink` | `string` | Yes | The invite link to edit |
| `name` | `string` | No | Invite link name; 0-32 characters |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.editChatSubscriptionInviteLink(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.editChatSubscriptionInviteLink();
});
```

**See also:** [editChatSubscriptionInviteLink API method](../methods/editChatSubscriptionInviteLink.md)

### revokeChatInviteLink

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier of the target chat or username of the target channel in the format @username |
| `inviteLink` | `string` | Yes | The invite link to revoke |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.revokeChatInviteLink(
  123,
  "example text",
);
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.revokeChatInviteLink();
});
```

**See also:** [revokeChatInviteLink API method](../methods/revokeChatInviteLink.md)

### createInvoiceLink

Use this method to create a link for an invoice. Returns the created invoice link as String on success.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `title` | `string` | Yes | Product name, 1-32 characters |
| `description` | `string` | Yes | Product description, 1-255 characters |
| `payload` | `string` | Yes | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `currency` | `string` | Yes | Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. |
| `prices` | `LabeledPrice[]` | Yes | Price breakdown, a JSON-serialized list of components \(e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.\). Must contain exactly one item for payments in Telegram Stars. |
| `businessConnectionId` | `string` | No | Unique identifier of the business connection on behalf of which the link will be created. For payments in Telegram Stars only. |
| `providerToken` | `string` | No | Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. |
| `subscriptionPeriod` | `number` | No | The number of seconds the subscription will be active for before the next payment. The currency must be set to “XTR” \(Telegram Stars\) if the parameter is used. Currently, it must always be 2592000 \(30 days\) if specified. Any number of subscriptions can be active for a given bot at the same time, including multiple concurrent subscriptions from the same user. Subscription price must no exceed 10000 Telegram Stars. |
| `maxTipAmount` | `number` | No | The maximum accepted amount for tips in the smallest units of the currency \(integer, not float/double\). For example, for a maximum tip of US$ 1.45 pass max\_tip\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). Defaults to 0. Not supported for payments in Telegram Stars. |
| `suggestedTipAmounts` | `number[]` | No | A JSON-serialized Array of suggested amounts of tips in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount. |
| `providerData` | `string` | No | JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| `photoUrl` | `string` | No | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. |
| `photoSize` | `number` | No | Photo size in bytes |
| `photoWidth` | `number` | No | Photo width |
| `photoHeight` | `number` | No | Photo height |
| `needName` | `boolean` | No | Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars. |
| `needPhoneNumber` | `boolean` | No | Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars. |
| `needEmail` | `boolean` | No | Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars. |
| `needShippingAddress` | `boolean` | No | Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars. |
| `sendPhoneNumberToProvider` | `boolean` | No | Pass True if the user's phone number should be sent to the provider. Ignored for payments in Telegram Stars. |
| `sendEmailToProvider` | `boolean` | No | Pass True if the user's email address should be sent to the provider. Ignored for payments in Telegram Stars. |
| `isFlexible` | `boolean` | No | Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars. |

**Usage examples:**

1. Basic usage:

```typescript
const link = new Link(rawData, bot);
await link.createInvoiceLink({
  title: "example text",
  description: "example text",
});
```

2. In an event handler:

```typescript
bot.onLink(async (link: Link) => {
  // Auto-fills parameters from the link instance
  await link.createInvoiceLink({ title: "Response" });
});
```

**See also:** [createInvoiceLink API method](../methods/createInvoiceLink.md)


## Event Handlers

You can listen for Link events using:

```typescript
// Type-specific handler
bot.onLink(async (link: Link) => {
  console.log('Received:', link);
  // Use fluent methods
  await link.exportChatInviteLink(...);
});

// Generic handler
bot.on('link', async (data: Link) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Link).
