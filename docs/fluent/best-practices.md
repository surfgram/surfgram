# Best Practices

## 1. Use Fluent Methods When Possible

**Instead of:**
```typescript
await bot.sendMessage({
  chat_id: message.chat.id,
  text: 'Hello'
});
```

**Use:**
```typescript
await message.sendMessage({ text: 'Hello' });
// chatId is auto-filled!
```

## 2. Chain Event Handlers

```typescript
bot
  .onMessage(async (message) => {
    // Handle all messages
  })
  .onText(/\/start/, async (message) => {
    // Handle /start command
  })
  .onCommand('help', async (message) => {
    // Handle /help command
  });
```

## 3. Type Safety

Always use TypeScript for full type checking:

```typescript
// This will show TypeScript error if parameters are wrong
await message.sendMessage({
  texxt: 'Hello' // ERROR: typo in 'text'
});
```
