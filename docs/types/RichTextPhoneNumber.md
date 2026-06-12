# RichTextPhoneNumber

A text with a phone number.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “phone\_number” |
| text | `RichText` | Yes | The text |
| phoneNumber | `string` | Yes | The phone number |


## Event Handlers

You can listen for RichTextPhoneNumber events using:

```typescript
// Type-specific handler
bot.onRichTextPhoneNumber(async (richtextphonenumber: RichTextPhoneNumber) => {
  console.log('Received:', richtextphonenumber);
});

// Generic handler
bot.on('richtextphonenumber', async (data: RichTextPhoneNumber) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextPhoneNumber).
