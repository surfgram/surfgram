# Fluent API Quick Start

## What is Fluent API?

The fluent API provides context-aware methods on Telegram object instances.
For example, a `Message` instance has methods like `sendMessage()`, `forwardMessage()`, etc.
that automatically fill parameters like `chatId` from the message's properties.

**Example:**

```typescript
bot.onMessage(async (msg: Message) => {
  await msg.sendMessage(...);
});
```
