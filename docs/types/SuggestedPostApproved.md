# SuggestedPostApproved

Describes a service message about the approval of a suggested post.

## Fields

| Name                 | Type                 | Required | Description                                                                                                                                                           |
| :------------------- | :------------------- | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| suggestedPostMessage | `Message`            |    No    | Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply_to_message field even if it itself is a reply. |
| price                | `SuggestedPostPrice` |    No    | Optional. Amount paid for the post                                                                                                                                    |
| sendDate             | `number`             |   Yes    | Date when the post will be published                                                                                                                                  |

## Event Handlers

You can listen for SuggestedPostApproved events using:

```typescript
// Type-specific handler
bot.onSuggestedPostApproved(async (suggestedpostapproved: SuggestedPostApproved) => {
  console.log('Received:', suggestedpostapproved);
});

// Generic handler
bot.on('suggestedpostapproved', async (data: SuggestedPostApproved) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuggestedPostApproved).
