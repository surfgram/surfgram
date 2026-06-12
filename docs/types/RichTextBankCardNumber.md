# RichTextBankCardNumber

A text with a bank card number.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “bank\_card\_number” |
| text | `RichText` | Yes | The text |
| bankCardNumber | `string` | Yes | The bank card number |


## Event Handlers

You can listen for RichTextBankCardNumber events using:

```typescript
// Type-specific handler
bot.onRichTextBankCardNumber(async (richtextbankcardnumber: RichTextBankCardNumber) => {
  console.log('Received:', richtextbankcardnumber);
});

// Generic handler
bot.on('richtextbankcardnumber', async (data: RichTextBankCardNumber) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextBankCardNumber).
