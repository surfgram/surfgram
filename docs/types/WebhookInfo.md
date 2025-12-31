# WebhookInfo

Describes the current status of a webhook.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| url | `string` | Yes | Webhook URL, may be empty if webhook is not set up |
| hasCustomCertificate | `boolean` | Yes | True, if a custom certificate was provided for webhook certificate checks |
| pendingUpdateCount | `number` | Yes | Number of updates awaiting delivery |
| ipAddress | `string` | No | Optional. Currently used webhook IP address |
| lastErrorDate | `number` | No | Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook |
| lastErrorMessage | `string` | No | Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| lastSynchronizationErrorDate | `number` | No | Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters |
| maxConnections | `number` | No | Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery |
| allowedUpdates | `string[]` | No | Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat\_member |

## Fluent Methods

The `WebhookInfo` class has the following fluent methods that automatically inject contextual parameters:

### getWebhookInfo

Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.


**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `url` | `string` | Yes | Webhook URL, may be empty if webhook is not set up |
| `hasCustomCertificate` | `boolean` | Yes | True, if a custom certificate was provided for webhook certificate checks |
| `pendingUpdateCount` | `number` | Yes | Number of updates awaiting delivery |
| `ipAddress` | `string` | No | Optional. Currently used webhook IP address |
| `lastErrorDate` | `number` | No | Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook |
| `lastErrorMessage` | `string` | No | Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook |
| `lastSynchronizationErrorDate` | `number` | No | Optional. Unix time of the most recent error that happened when trying to synchronize available updates with Telegram datacenters |
| `maxConnections` | `number` | No | Optional. The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery |
| `allowedUpdates` | `string[]` | No | Optional. A list of update types the bot is subscribed to. Defaults to all update types except chat\_member |

**Usage examples:**

1. Basic usage:

```typescript
const webhookinfo = new WebhookInfo(rawData, bot);
await webhookinfo.getWebhookInfo({
  url: "example text",
  hasCustomCertificate: true,
});
```

2. In an event handler:

```typescript
bot.onWebhookInfo(async (webhookinfo: WebhookInfo) => {
  // Auto-fills parameters from the webhookinfo instance
  await webhookinfo.getWebhookInfo({ url: "Response" });
});
```

**See also:** [getWebhookInfo API method](../methods/getWebhookInfo.md)


## Event Handlers

You can listen for WebhookInfo events using:

```typescript
// Type-specific handler
bot.onWebhookInfo(async (webhookinfo: WebhookInfo) => {
  console.log('Received:', webhookinfo);
  // Use fluent methods
  await webhookinfo.getWebhookInfo(...);
});

// Generic handler
bot.on('webhookinfo', async (data: WebhookInfo) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#WebhookInfo).
