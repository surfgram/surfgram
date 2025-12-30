# ShippingOption

This object represents one shipping option.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| id | `string` | Yes | Shipping option identifier |
| title | `string` | Yes | Option title |
| prices | `LabeledPrice[]` | Yes | List of price portions |

## Fluent Methods

The `ShippingOption` class has the following fluent methods that automatically inject contextual parameters:

### answerShippingQuery

If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the Bot API will send an Update with a shipping\_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `shippingQueryId` | `string` | Yes | Unique identifier for the query to be answered |
| `ok` | `boolean` | Yes | Pass True if delivery to the specified address is possible and False if there are any problems \(for example, if delivery to the specified address is not possible\) |
| `shippingOptions` | `ShippingOption[]` | No | Required if ok is True. A JSON-serialized array of available shipping options. |
| `errorMessage` | `string` | No | Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order \(e.g. “Sorry, delivery to your desired address is unavailable”\). Telegram will display this message to the user. |

**Usage examples:**

1. Basic usage:

```typescript
const shippingoption = new ShippingOption(rawData, bot);
await shippingoption.answerShippingQuery({
  shippingQueryId: "example text",
  ok: true,
});
```

2. In an event handler:

```typescript
bot.onShippingOption(async (shippingoption: ShippingOption) => {
  // Auto-fills parameters from the shippingoption instance
  await shippingoption.answerShippingQuery({ shippingQueryId: "Response" });
});
```

**See also:** [answerShippingQuery API method](../methods/answerShippingQuery.md)


## Event Handlers

You can listen for ShippingOption events using:

```typescript
// Type-specific handler
bot.onShippingOption(async (shippingoption: ShippingOption) => {
  console.log('Received:', shippingoption);
  // Use fluent methods
  await shippingoption.answerShippingQuery(...);
});

// Generic handler
bot.on('shippingoption', async (data: ShippingOption) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ShippingOption).
