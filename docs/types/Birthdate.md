# Birthdate

Describes the birthdate of a user.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| day | `number` | Yes | Day of the user's birth; 1-31 |
| month | `number` | Yes | Month of the user's birth; 1-12 |
| year | `number` | No | Optional. Year of the user's birth |


## Event Handlers

You can listen for Birthdate events using:

```typescript
// Type-specific handler
bot.onBirthdate(async (birthdate: Birthdate) => {
  console.log('Received:', birthdate);
});

// Generic handler
bot.on('birthdate', async (data: Birthdate) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Birthdate).
