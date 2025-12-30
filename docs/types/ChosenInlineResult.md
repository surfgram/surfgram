# ChosenInlineResult

Represents a result of an inline query that was chosen by the user and sent to their chat partner.

## Fields

| Name            | Type       | Required | Description                                                                                                                                                                                            |
| :-------------- | :--------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resultId        | `string`   |   Yes    | The unique identifier for the result that was chosen                                                                                                                                                   |
| from            | `User`     |   Yes    | The user that chose the result                                                                                                                                                                         |
| location        | `Location` |    No    | Optional. Sender location, only for bots that require user location                                                                                                                                    |
| inlineMessageId | `string`   |    No    | Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message. |
| query           | `string`   |   Yes    | The query that was used to obtain the result                                                                                                                                                           |

## Event Handlers

You can listen for ChosenInlineResult events using:

```typescript
// Type-specific handler
bot.onChosenInlineResult(async (choseninlineresult: ChosenInlineResult) => {
  console.log('Received:', choseninlineresult);
});

// Generic handler
bot.on('choseninlineresult', async (data: ChosenInlineResult) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#ChosenInlineResult).
