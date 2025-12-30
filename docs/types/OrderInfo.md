# OrderInfo

This object represents information about an order.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| name | `string` | No | Optional. User name |
| phoneNumber | `string` | No | Optional. User's phone number |
| email | `string` | No | Optional. User email |
| shippingAddress | `ShippingAddress` | No | Optional. User shipping address |


## Event Handlers

You can listen for OrderInfo events using:

```typescript
// Type-specific handler
bot.onOrderInfo(async (orderinfo: OrderInfo) => {
  console.log('Received:', orderinfo);
});

// Generic handler
bot.on('orderinfo', async (data: OrderInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#OrderInfo).
