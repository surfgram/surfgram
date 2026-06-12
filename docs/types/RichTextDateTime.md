# RichTextDateTime

Formatted date and time.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “date\_time” |
| text | `RichText` | Yes | The text |
| unixTime | `number` | Yes | The Unix time associated with the entity |
| dateTimeFormat | `string` | Yes | The string that defines the formatting of the date and time. See date-time entity formatting for more details. |


## Event Handlers

You can listen for RichTextDateTime events using:

```typescript
// Type-specific handler
bot.onRichTextDateTime(async (richtextdatetime: RichTextDateTime) => {
  console.log('Received:', richtextdatetime);
});

// Generic handler
bot.on('richtextdatetime', async (data: RichTextDateTime) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextDateTime).
