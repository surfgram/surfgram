# BusinessOpeningHours

Describes the opening hours of a business.

## Fields

| Name         | Type                             | Required | Description                                                          |
| :----------- | :------------------------------- | :------: | :------------------------------------------------------------------- |
| timeZoneName | `string`                         |   Yes    | Unique name of the time zone for which the opening hours are defined |
| openingHours | `BusinessOpeningHoursInterval[]` |   Yes    | List of time intervals describing business opening hours             |

## Event Handlers

You can listen for BusinessOpeningHours events using:

```typescript
// Type-specific handler
bot.onBusinessOpeningHours(async (businessopeninghours: BusinessOpeningHours) => {
  console.log('Received:', businessopeninghours);
});

// Generic handler
bot.on('businessopeninghours', async (data: BusinessOpeningHours) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BusinessOpeningHours).
