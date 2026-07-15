# InputRichBlockMathematicalExpression

A block with a mathematical expression in LaTeX format, corresponding to the custom HTML tag &lt;tg-math-block&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “mathematical\_expression” |
| expression | `string` | Yes | The mathematical expression in LaTeX format |


## Event Handlers

You can listen for InputRichBlockMathematicalExpression events using:

```typescript
// Type-specific handler
bot.onInputRichBlockMathematicalExpression(async (inputrichblockmathematicalexpression: InputRichBlockMathematicalExpression) => {
  console.log('Received:', inputrichblockmathematicalexpression);
});

// Generic handler
bot.on('inputrichblockmathematicalexpression', async (data: InputRichBlockMathematicalExpression) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockMathematicalExpression).
