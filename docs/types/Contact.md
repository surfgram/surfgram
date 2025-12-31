# Contact

This object represents a phone contact.

## Fields

| Name        | Type     | Required | Description                                                                                                                                                                                                                                                                                                                |
| :---------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| phoneNumber | `string` |   Yes    | Contact's phone number                                                                                                                                                                                                                                                                                                     |
| firstName   | `string` |   Yes    | Contact's first name                                                                                                                                                                                                                                                                                                       |
| lastName    | `string` |    No    | Optional. Contact's last name                                                                                                                                                                                                                                                                                              |
| userId      | `number` |    No    | Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier. |
| vcard       | `string` |    No    | Optional. Additional data about the contact in the form of a vCard                                                                                                                                                                                                                                                         |

## Fluent Methods

The `Contact` class has the following fluent methods that automatically inject contextual parameters:

### sendContact

Use this method to send phone contacts. On success, the sent Message is returned.

**Required parameters:**

| Parameter                 | Type                                                                                     | Required | Description                                                                                                                                                                                                                        |
| :------------------------ | :--------------------------------------------------------------------------------------- | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`                  | `number` \| `string`                                                                     |   Yes    | Unique identifier for the target chat or username of the target channel \(in the format @channelusername\)                                                                                                                         |
| `phoneNumber`             | `string`                                                                                 |   Yes    | Contact's phone number                                                                                                                                                                                                             |
| `firstName`               | `string`                                                                                 |   Yes    | Contact's first name                                                                                                                                                                                                               |
| `businessConnectionId`    | `string`                                                                                 |    No    | Unique identifier of the business connection on behalf of which the message will be sent                                                                                                                                           |
| `messageThreadId`         | `number`                                                                                 |    No    | Unique identifier for the target message thread \(topic\) of the forum; for forum supergroups only                                                                                                                                 |
| `directMessagesTopicId`   | `number`                                                                                 |    No    | Identifier of the direct messages topic to which the message will be sent; required if the message is sent to a direct messages chat                                                                                               |
| `lastName`                | `string`                                                                                 |    No    | Contact's last name                                                                                                                                                                                                                |
| `vcard`                   | `string`                                                                                 |    No    | Additional data about the contact in the form of a vCard, 0-2048 bytes                                                                                                                                                             |
| `disableNotification`     | `boolean`                                                                                |    No    | Sends the message silently. Users will receive a notification with no sound.                                                                                                                                                       |
| `protectContent`          | `boolean`                                                                                |    No    | Protects the contents of the sent message from forwarding and saving                                                                                                                                                               |
| `allowPaidBroadcast`      | `boolean`                                                                                |    No    | Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee of 0.1 Telegram Stars per message. The relevant Stars will be withdrawn from the bot's balance                                           |
| `messageEffectId`         | `string`                                                                                 |    No    | Unique identifier of the message effect to be added to the message; for private chats only                                                                                                                                         |
| `suggestedPostParameters` | `SuggestedPostParameters`                                                                |    No    | A JSON-serialized object containing the parameters of the suggested post to send; for direct messages chats only. If the message is sent as a reply to another suggested post, then that suggested post is automatically declined. |
| `replyParameters`         | `ReplyParameters`                                                                        |    No    | Description of the message to reply to                                                                                                                                                                                             |
| `replyMarkup`             | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` |    No    | Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user                                                    |

**Usage examples:**

1. Basic usage:

```typescript
const contact = new Contact(rawData, bot);
await contact.sendContact({
  chatId: 123,
  phoneNumber: 'example text',
});
```

2. In an event handler:

```typescript
bot.onContact(async (contact: Contact) => {
  // Auto-fills parameters from the contact instance
  await contact.sendContact({ chatId: 'Response' });
});
```

**See also:** [sendContact API method](../methods/sendContact.md)

## Event Handlers

You can listen for Contact events using:

```typescript
// Type-specific handler
bot.onContact(async (contact: Contact) => {
  console.log('Received:', contact);
  // Use fluent methods
  await contact.sendContact(...);
});

// Generic handler
bot.on('contact', async (data: Contact) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#Contact).
