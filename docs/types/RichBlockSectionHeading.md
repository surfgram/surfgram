# RichBlockSectionHeading

A section heading, corresponding to the HTML tags &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, or &lt;h6&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “heading” |
| text | `RichText` | Yes | Text of the block |
| size | `number` | Yes | Relative size of the text font; 1-6, 1 is the largest, 6 is the smallest |


## Event Handlers

You can listen for RichBlockSectionHeading events using:

```typescript
// Type-specific handler
bot.onRichBlockSectionHeading(async (richblocksectionheading: RichBlockSectionHeading) => {
  console.log('Received:', richblocksectionheading);
});

// Generic handler
bot.on('richblocksectionheading', async (data: RichBlockSectionHeading) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockSectionHeading).
