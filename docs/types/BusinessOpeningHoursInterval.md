# BusinessOpeningHoursInterval

Describes an interval of time during which a business is open.

## Fields

| Name          | Type     | Required | Description                                                                                                                                             |
| :------------ | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| openingMinute | `number` |   Yes    | The minute's sequence number in a week, starting on Monday, marking the start of the time interval during which the business is open; 0 - 7 \* 24 \* 60 |
| closingMinute | `number` |   Yes    | The minute's sequence number in a week, starting on Monday, marking the end of the time interval during which the business is open; 0 - 8 \* 24 \* 60   |

## Event Handlers

You can listen for BusinessOpeningHoursInterval events using:

```typescript
// Type-specific handler
bot.onBusinessOpeningHoursInterval(
  async (businessopeninghoursinterval: BusinessOpeningHoursInterval) => {
    console.log('Received:', businessopeninghoursinterval);
  }
);

// Generic handler
bot.on('businessopeninghoursinterval', async (data: BusinessOpeningHoursInterval) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BusinessOpeningHoursInterval).
