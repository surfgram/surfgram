# setBusinessAccountName

Changes the first and last name of a managed business account. Requires the can_change_name business bot right. Returns True on success.

## Parameters

| Parameter              | Type     | Required | Description                                                               |
| :--------------------- | :------- | :------: | :------------------------------------------------------------------------ |
| `businessConnectionId` | `string` |   Yes    | Unique identifier of the business connection                              |
| `firstName`            | `string` |   Yes    | The new value of the first name for the business account; 1-64 characters |
| `lastName`             | `string` |    No    | The new value of the last name for the business account; 0-64 characters  |

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setBusinessAccountName).
