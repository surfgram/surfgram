# PreCheckoutQuery

This object contains information about an incoming pre-checkout query.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Unique query identifier |
| from | `User` | Yes | User who sent the query |
| currency | `string` | Yes | Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars |
| totalAmount | `number` | Yes | Total price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). |
| invoicePayload | `string` | Yes | Bot-specified invoice payload |
| shippingOptionId | `string` | No | Optional. Identifier of the shipping option chosen by the user |
| orderInfo | `OrderInfo` | No | Optional. Order information provided by the user |

## Fluent Methods

The `PreCheckoutQuery` class has the following fluent methods that automatically inject contextual parameters:

### answerPreCheckoutQuery

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `preCheckoutQueryId` | `this.id` | Unique identifier for the query to be answered |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `ok` | `boolean` | Yes | Specify True if everything is alright \(goods are available, etc.\) and the bot is ready to proceed with the order. Use False if there are any problems. |
| `errorMessage` | `string` | No | Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout \(e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"\). Telegram will display this message to the user. |

**Usage examples:**

1. Basic usage:

```typescript
const precheckoutquery = new PreCheckoutQuery(rawData, bot);
await precheckoutquery.answerPreCheckoutQuery({
  ok: true,
  errorMessage: "example text",
});
```

2. In an event handler:

```typescript
bot.onPreCheckoutQuery(async (precheckoutquery: PreCheckoutQuery) => {
  // Auto-fills parameters from the precheckoutquery instance
  await precheckoutquery.answerPreCheckoutQuery({ errorMessage: "Response" });
});
```

**See also:** [answerPreCheckoutQuery API method](../methods/answerPreCheckoutQuery.md)


## Event Handlers

You can listen for PreCheckoutQuery events using:

```typescript
// Type-specific handler
bot.onPreCheckoutQuery(async (precheckoutquery: PreCheckoutQuery) => {
  console.log('Received:', precheckoutquery);
  // Use fluent methods
  await precheckoutquery.answerPreCheckoutQuery(...);
});

// Generic handler
bot.on('precheckoutquery', async (data: PreCheckoutQuery) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PreCheckoutQuery).
