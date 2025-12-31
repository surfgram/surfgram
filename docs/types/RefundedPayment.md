# RefundedPayment

This object contains basic information about a refunded payment.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| currency | `string` | Yes | Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars. Currently, always “XTR” |
| totalAmount | `number` | Yes | Total refunded price in the smallest units of the currency \(integer, not float/double\). For example, for a price of US$ 1.45, total\_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency \(2 for the majority of currencies\). |
| invoicePayload | `string` | Yes | Bot-specified invoice payload |
| telegramPaymentChargeId | `string` | Yes | Telegram payment identifier |
| providerPaymentChargeId | `string` | No | Optional. Provider payment identifier |


## Event Handlers

You can listen for RefundedPayment events using:

```typescript
// Type-specific handler
bot.onRefundedPayment(async (refundedpayment: RefundedPayment) => {
  console.log('Received:', refundedpayment);
});

// Generic handler
bot.on('refundedpayment', async (data: RefundedPayment) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RefundedPayment).
