# InlineQueryResultsButton

This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| text | `string` | Yes | Label text on the button |
| webApp | `WebAppInfo` | No | Optional. Description of the Web App that will be launched when the user presses the button. The Web App will be able to switch back to the inline mode using the method switchInlineQuery inside the Web App. |
| startParameter | `string` | No | Optional. Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters, only A-Z, a-z, 0-9, \_ and - are allowed.Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch\_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities. |

## Fluent Methods

The `InlineQueryResultsButton` class has the following fluent methods that automatically inject contextual parameters:

### answerInlineQuery

Use this method to send answers to an inline query. On success, True is returned.No more than 50 results per query are allowed.

**Auto-filled parameters:**

| Parameter | Source | Description |
| :--- | :--- | :--- |
| `inlineQueryId` | `this?.id` | Unique identifier for the answered query |

**Required parameters:**

| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `results` | `InlineQueryResult[]` | Yes | A JSON-serialized array of results for the inline query |
| `cacheTime` | `number` | No | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. |
| `isPersonal` | `boolean` | No | Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. |
| `nextOffset` | `string` | No | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. |
| `button` | `InlineQueryResultsButton` | No | A JSON-serialized object describing a button to be shown above inline query results |

**Usage examples:**

1. Basic usage:

```typescript
const inlinequeryresultsbutton = new InlineQueryResultsButton(rawData, bot);
await inlinequeryresultsbutton.answerInlineQuery({
  results: [{} as any],
  cacheTime: 123,
});
```

2. In an event handler:

```typescript
bot.onInlineQueryResultsButton(async (inlinequeryresultsbutton: InlineQueryResultsButton) => {
  // Auto-fills parameters from the inlinequeryresultsbutton instance
  await inlinequeryresultsbutton.answerInlineQuery({ nextOffset: "Response" });
});
```

**See also:** [answerInlineQuery API method](../methods/answerInlineQuery.md)


## Event Handlers

You can listen for InlineQueryResultsButton events using:

```typescript
// Type-specific handler
bot.onInlineQueryResultsButton(async (inlinequeryresultsbutton: InlineQueryResultsButton) => {
  console.log('Received:', inlinequeryresultsbutton);
  // Use fluent methods
  await inlinequeryresultsbutton.answerInlineQuery(...);
});

// Generic handler
bot.on('inlinequeryresultsbutton', async (data: InlineQueryResultsButton) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InlineQueryResultsButton).
