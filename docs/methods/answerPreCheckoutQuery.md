# answerPreCheckoutQuery

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre\_checkout\_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

## Fluent Usage

This method is available as a fluent method on the following types:

### PreCheckoutQuery (1 methods)

**Available methods:** `answerPreCheckoutQuery`

**Auto-filled parameters:** preCheckoutQueryId

[View PreCheckoutQuery documentation with fluent methods](../types/PreCheckoutQuery.md)


## Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `preCheckoutQueryId` | `string` | Yes | Unique identifier for the query to be answered |
| `ok` | `boolean` | Yes | Specify True if everything is alright \(goods are available, etc.\) and the bot is ready to proceed with the order. Use False if there are any problems. |
| `errorMessage` | `string` | No | Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout \(e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"\). Telegram will display this message to the user. |


## Usage Example

```typescript
// When you already have a PreCheckoutQuery instance
bot.onPreCheckoutQuery(async (precheckoutquery: PreCheckoutQuery) => {
  await precheckoutquery.answerPreCheckoutQuery({});
});

// With filtering
bot.onPreCheckoutQuery((data) => data.someProperty === "value", async (data) => {
  // Filtered handler
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#answerPreCheckoutQuery).
