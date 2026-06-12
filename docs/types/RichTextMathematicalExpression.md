# RichTextMathematicalExpression

A mathematical expression.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the rich text, always “mathematical\_expression” |
| expression | `string` | Yes | The expression in LaTeX format |


## Event Handlers

You can listen for RichTextMathematicalExpression events using:

```typescript
// Type-specific handler
bot.onRichTextMathematicalExpression(async (richtextmathematicalexpression: RichTextMathematicalExpression) => {
  console.log('Received:', richtextmathematicalexpression);
});

// Generic handler
bot.on('richtextmathematicalexpression', async (data: RichTextMathematicalExpression) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichTextMathematicalExpression).
