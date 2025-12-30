# InlineQueryResultContact

Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input\_message\_content to send a message with the specified content instead of the contact.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the result, must be contact |
| id | `string` | Yes | Unique identifier for this result, 1-64 Bytes |
| phoneNumber | `string` | Yes | Contact's phone number |
| firstName | `string` | Yes | Contact's first name |
| lastName | `string` | No | Optional. Contact's last name |
| vcard | `string` | No | Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes |
| replyMarkup | `InlineKeyboardMarkup` | No | Optional. Inline keyboard attached to the message |
| inputMessageContent | `InputMessageContent` | No | Optional. Content of the message to be sent instead of the contact |
| thumbnailUrl | `string` | No | Optional. Url of the thumbnail for the result |
| thumbnailWidth | `number` | No | Optional. Thumbnail width |
| thumbnailHeight | `number` | No | Optional. Thumbnail height |


## Event Handlers

You can listen for InlineQueryResultContact events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultContact(async (inlinequeryresultcontact: InlineQueryResultContact) => {
  console.log('Received:', inlinequeryresultcontact);
});

// Generic handler
bot.on('inlinequeryresultcontact', async (data: InlineQueryResultContact) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultContact).
