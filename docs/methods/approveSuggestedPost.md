# approveSuggestedPost

Use this method to approve a suggested post in a direct messages chat. The bot must have the &#39;can_post_messages&#39; administrator right in the corresponding channel chat. Returns True on success.

## Parameters

| Parameter   | Type     | Required | Description                                                                                                                                                                                                                                              |
| :---------- | :------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`    | `number` |   Yes    | Unique identifier for the target direct messages chat                                                                                                                                                                                                    |
| `messageId` | `number` |   Yes    | Identifier of a suggested post message to approve                                                                                                                                                                                                        |
| `sendDate`  | `number` |    No    | Point in time \(Unix timestamp\) when the post is expected to be published; omit if the date has already been specified when the suggested post was created. If specified, then the date must be not more than 2678400 seconds \(30 days\) in the future |

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#approveSuggestedPost).
