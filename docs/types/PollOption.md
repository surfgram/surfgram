# PollOption

This object contains information about one answer option in a poll.

## Fields

| Name         | Type              | Required | Description                                                                                                                       |
| :----------- | :---------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------- |
| text         | `string`          |   Yes    | Option text, 1-100 characters                                                                                                     |
| textEntities | `MessageEntity[]` |    No    | Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts |
| voterCount   | `number`          |   Yes    | Number of users that voted for this option                                                                                        |

## Event Handlers

You can listen for PollOption events using:

```typescript
// Type-specific handler
bot.onPollOption(async (polloption: PollOption) => {
  console.log('Received:', polloption);
});

// Generic handler
bot.on('polloption', async (data: PollOption) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PollOption).
