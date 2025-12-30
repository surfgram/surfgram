# SuggestedPostApprovalFailed

Describes a service message about the failed approval of a suggested post. Currently, only caused by insufficient user funds at the time of approval.

## Fields

| Name                 | Type                 | Required | Description                                                                                                                                                                                     |
| :------------------- | :------------------- | :------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suggestedPostMessage | `Message`            |    No    | Optional. Message containing the suggested post whose approval has failed. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. |
| price                | `SuggestedPostPrice` |   Yes    | Expected price of the post                                                                                                                                                                      |

## Event Handlers

You can listen for SuggestedPostApprovalFailed events using:

```typescript
// Type-specific handler
bot.onSuggestedPostApprovalFailed(
  async (suggestedpostapprovalfailed: SuggestedPostApprovalFailed) => {
    console.log('Received:', suggestedpostapprovalfailed);
  }
);

// Generic handler
bot.on('suggestedpostapprovalfailed', async (data: SuggestedPostApprovalFailed) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuggestedPostApprovalFailed).
