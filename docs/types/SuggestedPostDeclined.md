# SuggestedPostDeclined

Describes a service message about the rejection of a suggested post.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| suggestedPostMessage | `Message` | No | Optional. Message containing the suggested post. Note that the Message object in this field will not contain the reply\_to\_message field even if it itself is a reply. |
| comment | `string` | No | Optional. Comment with which the post was declined |


## Event Handlers

You can listen for SuggestedPostDeclined events using:

```typescript
// Type-specific handler
bot.onSuggestedPostDeclined(async (suggestedpostdeclined: SuggestedPostDeclined) => {
  console.log('Received:', suggestedpostdeclined);
});

// Generic handler
bot.on('suggestedpostdeclined', async (data: SuggestedPostDeclined) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuggestedPostDeclined).
