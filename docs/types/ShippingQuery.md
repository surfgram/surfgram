# ShippingQuery

This object contains information about an incoming shipping query.

## Fields

| Name            | Type              | Required | Description                     |
| :-------------- | :---------------- | :------: | :------------------------------ |
| id              | `string`          |   Yes    | Unique query identifier         |
| from            | `User`            |   Yes    | User who sent the query         |
| invoicePayload  | `string`          |   Yes    | Bot-specified invoice payload   |
| shippingAddress | `ShippingAddress` |   Yes    | User specified shipping address |

## Fluent Methods

The `ShippingQuery` class has the following fluent methods that automatically inject contextual parameters:

### answerShippingQuery

If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.

**Auto-filled parameters:**

| Parameter         | Source    | Description                                    |
| :---------------- | :-------- | :--------------------------------------------- |
| `shippingQueryId` | `this.id` | Unique identifier for the query to be answered |

**Required parameters:**

| Parameter         | Type               | Required | Description                                                                                                                                                                                                                               |
| :---------------- | :----------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ok`              | `boolean`          |   Yes    | Pass True if delivery to the specified address is possible and False if there are any problems \(for example, if delivery to the specified address is not possible\)                                                                      |
| `shippingOptions` | `ShippingOption[]` |    No    | Required if ok is True. A JSON-serialized array of available shipping options.                                                                                                                                                            |
| `errorMessage`    | `string`           |    No    | Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order \(e.g. “Sorry, delivery to your desired address is unavailable”\). Telegram will display this message to the user. |

**Usage examples:**

1. Basic usage:

```typescript
const shippingquery = new ShippingQuery(rawData, bot);
await shippingquery.answerShippingQuery(true, [{} as any]);
```

2. In an event handler:

```typescript
bot.onShippingQuery(async (shippingquery: ShippingQuery) => {
  // Auto-fills parameters from the shippingquery instance
  await shippingquery.answerShippingQuery();
});
```

**See also:** [answerShippingQuery API method](../methods/answerShippingQuery.md)

## Event Handlers

You can listen for ShippingQuery events using:

```typescript
// Type-specific handler
bot.onShippingQuery(async (shippingquery: ShippingQuery) => {
  console.log('Received:', shippingquery);
  // Use fluent methods
  await shippingquery.answerShippingQuery(...);
});

// Generic handler
bot.on('shippingquery', async (data: ShippingQuery) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ShippingQuery).
