## Webhooks

### Setting Up Webhooks

#### Basic Webhook Server

```typescript
await bot.startWebhook({
  port: 3000,
  path: '/webhook',
});
```

#### With Secret Token (Recommended)

```typescript
await bot.startWebhook({
  port: 3000,
  path: '/webhook',
  secretToken: 'your-secret-token-here',
});
```

### Manual Webhook Management

```typescript
// Set webhook via API
await bot.setWebhook({
  url: 'https://your-domain.com/webhook',
  secretToken: 'your-secret',
  dropPendingUpdates: true,
});

// Delete webhook
await bot.deleteWebhook({
  dropPendingUpdates: true,
});

// Get webhook info
const info = await bot.getWebhookInfo();
```
