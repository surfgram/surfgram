# ShippingAddress

This object represents a shipping address.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| countryCode | `string` | Yes | Two-letter ISO 3166-1 alpha-2 country code |
| state | `string` | Yes | State, if applicable |
| city | `string` | Yes | City |
| streetLine1 | `string` | Yes | First line for the address |
| streetLine2 | `string` | Yes | Second line for the address |
| postCode | `string` | Yes | Address post code |


## Event Handlers

You can listen for ShippingAddress events using:

```typescript
// Type-specific handler
bot.onShippingAddress(async (shippingaddress: ShippingAddress) => {
  console.log('Received:', shippingaddress);
});

// Generic handler
bot.on('shippingaddress', async (data: ShippingAddress) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ShippingAddress).
