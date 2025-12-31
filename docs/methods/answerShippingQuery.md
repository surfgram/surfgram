# answerShippingQuery

If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.

## Fluent Usage

This method is available as a fluent method on the following types:

### ShippingOption (1 methods)

**Available methods:** `answerShippingQuery`

[View ShippingOption documentation with fluent methods](../types/ShippingOption.md)

### ShippingQuery (1 methods)

**Available methods:** `answerShippingQuery`

**Auto-filled parameters:** shippingQueryId

[View ShippingQuery documentation with fluent methods](../types/ShippingQuery.md)

## Parameters

| Parameter         | Type               | Required | Description                                                                                                                                                                                                                               |
| :---------------- | :----------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shippingQueryId` | `string`           |   Yes    | Unique identifier for the query to be answered                                                                                                                                                                                            |
| `ok`              | `boolean`          |   Yes    | Pass True if delivery to the specified address is possible and False if there are any problems \(for example, if delivery to the specified address is not possible\)                                                                      |
| `shippingOptions` | `ShippingOption[]` |    No    | Required if ok is True. A JSON-serialized array of available shipping options.                                                                                                                                                            |
| `errorMessage`    | `string`           |    No    | Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order \(e.g. “Sorry, delivery to your desired address is unavailable”\). Telegram will display this message to the user. |

## Usage Example

```typescript
// When you already have a ShippingOption instance
bot.onShippingOption(async (shippingoption: ShippingOption) => {
  await shippingoption.answerShippingQuery();
});

// With filtering
bot.onShippingOption(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerShippingQuery).
