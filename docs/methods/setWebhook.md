# setWebhook

Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request \(a request with response HTTP status code different from 2XY\), we will repeat the request and give up after a reasonable amount of attempts. Returns True on success.

## Fluent Usage

This method is available as a fluent method on the following types:

### InputFile (12 methods)

**Available methods:** `setWebhook`, `sendPhoto`, `sendAudio`, `sendDocument`, `sendVideo`, `sendAnimation`, `sendVoice`, `sendVideoNote`, `setChatPhoto`, `sendSticker`, `uploadStickerFile`, `setStickerSetThumbnail`

[View InputFile documentation with fluent methods](../types/InputFile.md)

## Parameters

| Parameter            | Type        | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------- | :---------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`                | `string`    |   Yes    | HTTPS URL to send updates to. Use an empty string to remove webhook integration                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `certificate`        | `InputFile` |    No    | Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `ipAddress`          | `string`    |    No    | The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `maxConnections`     | `number`    |    No    | The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.                                                                                                                                                                                                                                                                                                                                                                        |
| `allowedUpdates`     | `string[]`  |    No    | A JSON-serialized list of the update types you want your bot to receive. For example, specify \["message", "edited_channel_post", "callback_query"\] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count \(default\). If not specified, the previous setting will be used.Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. |
| `dropPendingUpdates` | `boolean`   |    No    | Pass True to drop all pending updates                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `secretToken`        | `string`    |    No    | A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, \_ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.                                                                                                                                                                                                                                                                                                                                                    |

## Usage Example

```typescript
// When you already have a InputFile instance
bot.onInputFile(async (inputfile: InputFile) => {
  await inputfile.setWebhook({});
});

// With filtering
bot.onInputFile(
  (data) => data.someProperty === 'value',
  async (data) => {
    // Filtered handler
  }
);
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#setWebhook).
