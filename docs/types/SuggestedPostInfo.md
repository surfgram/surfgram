# SuggestedPostInfo

Contains information about a suggested post.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| state | `string` | Yes | State of the suggested post. Currently, it can be one of “pending”, “approved”, “declined”. |
| price | `SuggestedPostPrice` | No | Optional. Proposed price of the post. If the field is omitted, then the post is unpaid. |
| sendDate | `number` | No | Optional. Proposed send date of the post. If the field is omitted, then the post can be published at any time within 30 days at the sole discretion of the user or administrator who approves it. |


## Event Handlers

You can listen for SuggestedPostInfo events using:

```typescript
// Type-specific handler
bot.onSuggestedPostInfo(async (suggestedpostinfo: SuggestedPostInfo) => {
  console.log('Received:', suggestedpostinfo);
});

// Generic handler
bot.on('suggestedpostinfo', async (data: SuggestedPostInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#SuggestedPostInfo).
