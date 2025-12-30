# SuccessfulPayment

This object contains basic information about a successful payment. Note that if the buyer initiates a chargeback with the relevant payment provider following this transaction, the funds may be debited from your balance. This is outside of Telegram&#39;s control.

## Fields

| Name                       | Type        | Required | Description                                                                                                                                                                                                                                                                                     |
| :------------------------- | :---------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currency                   | `string`    |   Yes    | Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars                                                                                                                                                                                                                    |
| totalAmount                | `number`    |   Yes    | Total price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). |
| invoicePayload             | `string`    |   Yes    | Bot-specified invoice payload                                                                                                                                                                                                                                                                   |
| subscriptionExpirationDate | `number`    |    No    | Optional. Expiration date of the subscription, in Unix time; for recurring payments only                                                                                                                                                                                                        |
| isRecurring                | `boolean`   |    No    | Optional. True, if the payment is a recurring payment for a subscription                                                                                                                                                                                                                        |
| isFirstRecurring           | `boolean`   |    No    | Optional. True, if the payment is the first payment for a subscription                                                                                                                                                                                                                          |
| shippingOptionId           | `string`    |    No    | Optional. Identifier of the shipping option chosen by the user                                                                                                                                                                                                                                  |
| orderInfo                  | `OrderInfo` |    No    | Optional. Order information provided by the user                                                                                                                                                                                                                                                |
| telegramPaymentChargeId    | `string`    |   Yes    | Telegram payment identifier                                                                                                                                                                                                                                                                     |
| providerPaymentChargeId    | `string`    |   Yes    | Provider payment identifier                                                                                                                                                                                                                                                                     |

## Event Handlers

You can listen for SuccessfulPayment events using:

```typescript
// Type-specific handler
bot.onSuccessfulPayment(async (successfulpayment: SuccessfulPayment) => {
  console.log('Received:', successfulpayment);
});

// Generic handler
bot.on('successfulpayment', async (data: SuccessfulPayment) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuccessfulPayment).
