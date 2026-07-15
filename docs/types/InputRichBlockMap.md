# InputRichBlockMap

A block with a map, corresponding to the custom HTML tag &lt;tg-map&gt;. The map&#39;s width and height must not exceed 10000 in total. The width and height ratio must be at most 20.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “map” |
| location | `Location` | Yes | Location of the center of the map |
| zoom | `number` | Yes | Map zoom level; 0-24 |
| width | `number` | Yes | Map width; 0-10000 |
| height | `number` | Yes | Map height; 0-10000 |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for InputRichBlockMap events using:

```typescript
// Type-specific handler
bot.onInputRichBlockMap(async (inputrichblockmap: InputRichBlockMap) => {
  console.log('Received:', inputrichblockmap);
});

// Generic handler
bot.on('inputrichblockmap', async (data: InputRichBlockMap) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#InputRichBlockMap).
