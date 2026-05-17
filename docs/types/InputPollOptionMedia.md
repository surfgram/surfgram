# InputPollOptionMedia

This object represents the content of a poll option to be sent. It should be one of

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| persistentId | `string` | Yes | Unique identifier of the option, persistent on option addition and deletion |
| text | `string` | Yes | Option text, 1-100 characters |
| textEntities | `MessageEntity[]` | No | Optional. Special entities that appear in the option text. Currently, only custom emoji entities are allowed in poll option texts |
| media | `PollMedia` | No | Optional. Media added to the poll option |
| voterCount | `number` | Yes | Number of users who voted for this option; may be 0 if unknown |
| addedByUser | `User` | No | Optional. User who added the option; omitted if the option wasn't added by a user after poll creation |
| addedByChat | `Chat` | No | Optional. Chat that added the option; omitted if the option wasn't added by a chat after poll creation |
| additionDate | `number` | No | Optional. Point in time \(Unix timestamp\) when the option was added; omitted if the option existed in the original poll |


## Event Handlers

You can listen for InputPollOptionMedia events using:

```typescript
// Type-specific handler
bot.onInputPollOptionMedia(async (inputpolloptionmedia: InputPollOptionMedia) => {
  console.log('Received:', inputpolloptionmedia);
});

// Generic handler
bot.on('inputpolloptionmedia', async (data: InputPollOptionMedia) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputPollOptionMedia).
