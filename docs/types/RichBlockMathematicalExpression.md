# RichBlockMathematicalExpression

A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag &lt;tg-math-block&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “mathematical\_expression” |
| expression | `string` | Yes | The mathematical expression in LaTeX format |


## Event Handlers

You can listen for RichBlockMathematicalExpression events using:

```typescript
// Type-specific handler
bot.onRichBlockMathematicalExpression(async (richblockmathematicalexpression: RichBlockMathematicalExpression) => {
  console.log('Received:', richblockmathematicalexpression);
});

// Generic handler
bot.on('richblockmathematicalexpression', async (data: RichBlockMathematicalExpression) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockMathematicalExpression).
