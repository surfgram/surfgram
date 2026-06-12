# RichBlockPreformatted

A preformatted text block, corresponding to the nested HTML tags &lt;pre&gt; and &lt;code&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “pre” |
| text | `RichText` | Yes | Text of the block |
| language | `string` | No | Optional. The programming language of the text |


## Event Handlers

You can listen for RichBlockPreformatted events using:

```typescript
// Type-specific handler
bot.onRichBlockPreformatted(async (richblockpreformatted: RichBlockPreformatted) => {
  console.log('Received:', richblockpreformatted);
});

// Generic handler
bot.on('richblockpreformatted', async (data: RichBlockPreformatted) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockPreformatted).
