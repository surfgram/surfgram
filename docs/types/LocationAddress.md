# LocationAddress

Describes the physical address of a location.

## Fields

| Name        | Type     | Required | Description                                                                                 |
| :---------- | :------- | :------: | :------------------------------------------------------------------------------------------ |
| countryCode | `string` |   Yes    | The two-letter ISO 3166-1 alpha-2 country code of the country where the location is located |
| state       | `string` |    No    | Optional. State of the location                                                             |
| city        | `string` |    No    | Optional. City of the location                                                              |
| street      | `string` |    No    | Optional. Street address of the location                                                    |

## Event Handlers

You can listen for LocationAddress events using:

```typescript
// Type-specific handler
bot.onLocationAddress(async (locationaddress: LocationAddress) => {
  console.log('Received:', locationaddress);
});

// Generic handler
bot.on('locationaddress', async (data: LocationAddress) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#LocationAddress).
