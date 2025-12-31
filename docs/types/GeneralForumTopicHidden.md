# GeneralForumTopicHidden

This object represents a service message about General forum topic hidden in the chat. Currently holds no information.

## Fields

| Name      | Type          | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :-------- | :------------ | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userId    | `number`      |   Yes    | Identifier of the shared user. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so 64-bit integers or double-precision float types are safe for storing these identifiers. The bot may not have access to the user and could be unable to use this identifier, unless the user is already known to the bot by some other means. |
| firstName | `string`      |    No    | Optional. First name of the user, if the name was requested by the bot                                                                                                                                                                                                                                                                                                                                                                                          |
| lastName  | `string`      |    No    | Optional. Last name of the user, if the name was requested by the bot                                                                                                                                                                                                                                                                                                                                                                                           |
| username  | `string`      |    No    | Optional. Username of the user, if the username was requested by the bot                                                                                                                                                                                                                                                                                                                                                                                        |
| photo     | `PhotoSize[]` |    No    | Optional. Available sizes of the chat photo, if the photo was requested by the bot                                                                                                                                                                                                                                                                                                                                                                              |

## Event Handlers

You can listen for GeneralForumTopicHidden events using:

```typescript
// Type-specific handler
bot.onGeneralForumTopicHidden(async (generalforumtopichidden: GeneralForumTopicHidden) => {
  console.log('Received:', generalforumtopichidden);
});

// Generic handler
bot.on('generalforumtopichidden', async (data: GeneralForumTopicHidden) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#GeneralForumTopicHidden).
