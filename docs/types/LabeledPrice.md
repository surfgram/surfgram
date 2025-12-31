# LabeledPrice

This object represents a portion of the price for goods or services.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| label | `string` | Yes | Portion label |
| amount | `number` | Yes | Price of the product in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). |

## Fluent Methods

The `LabeledPrice` class has the following fluent methods that automatically inject contextual parameters:

### sendInvoice

Use this method to send invoices. On success, the sent Message is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `chatId` | `number` \| `string` | Yes | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\) |
| `title` | `string` | Yes | Product name, 1-32 characters |
| `description` | `string` | Yes | Product description, 1-255 characters |
| `payload` | `string` | Yes | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use it for your internal processes. |
| `currency` | `string` | Yes | Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars. |
| `prices` | `LabeledPrice[]` | Yes | Price breakdown, a JSON-serialized list of components \(e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.\). Must contain exactly one item for payments in Telegram Stars. |
| `messageThreadId` | `number` | No | Unique identifier for the target message thread \(topic\) of a forum; for forum supergroups and private chats of bots with forum topic mode enabled only |
| `directMessagesTopicId` | `number` | No | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat |
| `providerToken` | `string` | No | Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars. |
| `maxTipAmount` | `number` | No | The maximum accepted amount for tips in the smallest units of the currency \(integer, not float/double\). For example, for a maximum tip of US$ 1.45 pass max\_tip\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). Defaults to 0. Not supported for payments in Telegram Stars. |
| `suggestedTipAmounts` | `number[]` | No | A JSON-serialized array of suggested amounts of tips in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount. |
| `startParameter` | `string` | No | Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot \(instead of a Pay button\), with the value used as the start parameter |
| `providerData` | `string` | No | JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| `photoUrl` | `string` | No | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
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
| `disableNotification` | `boolean` | No | Sends the message silently. Users will receive a notification with no sound. |
| `protectContent` | `boolean` | No | Protects the contents of the sent message from forwarding and saving |
| `allowPaidBroadcast` | `boolean` | No | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance |
| `messageEffectId` | `string` | No | Unique identifier of the message effect to be added to the message; for private chats only |
| `suggestedPostParameters` | `SuggestedPostParameters` | No | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters` | `ReplyParameters` | No | Description of the message to reply to |
| `replyMarkup` | `InlineKeyboardMarkup` | No | A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. |

**Usage examples:**

1. Basic usage:

```typescript
const labeledprice = new LabeledPrice(rawData, bot);
await labeledprice.sendInvoice({
  chatId: 123,
  title: "example text",
});
```

2. In an event handler:

```typescript
bot.onLabeledPrice(async (labeledprice: LabeledPrice) => {
  // Auto-fills parameters from the labeledprice instance
  await labeledprice.sendInvoice({ chatId: "Response" });
});
```

**See also:** [sendInvoice API method](../methods/sendInvoice.md)

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
| `suggestedTipAmounts` | `number[]` | No | A JSON-serialized array of suggested amounts of tips in the smallest units of the currency \(integer, not float/double\). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max\_tip\_amount. |
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
const labeledprice = new LabeledPrice(rawData, bot);
await labeledprice.createInvoiceLink({
  title: "example text",
  description: "example text",
});
```

2. In an event handler:

```typescript
bot.onLabeledPrice(async (labeledprice: LabeledPrice) => {
  // Auto-fills parameters from the labeledprice instance
  await labeledprice.createInvoiceLink({ title: "Response" });
});
```

**See also:** [createInvoiceLink API method](../methods/createInvoiceLink.md)


## Event Handlers

You can listen for LabeledPrice events using:

```typescript
// Type-specific handler
bot.onLabeledPrice(async (labeledprice: LabeledPrice) => {
  console.log('Received:', labeledprice);
  // Use fluent methods
  await labeledprice.sendInvoice(...);
});

// Generic handler
bot.on('labeledprice', async (data: LabeledPrice) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#LabeledPrice).
