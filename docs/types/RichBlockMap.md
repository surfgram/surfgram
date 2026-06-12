# RichBlockMap

A block with a map, corresponding to the custom HTML tag &lt;tg-map&gt;.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| type | `string` | Yes | Type of the block, always “map” |
| location | `Location` | Yes | Location of the center of the map |
| zoom | `number` | Yes | Map zoom level; 13-20 |
| width | `number` | Yes | Expected width of the map |
| height | `number` | Yes | Expected height of the map |
| caption | `RichBlockCaption` | No | Optional. Caption of the block |


## Event Handlers

You can listen for RichBlockMap events using:

```typescript
// Type-specific handler
bot.onRichBlockMap(async (richblockmap: RichBlockMap) => {
  console.log('Received:', richblockmap);
});

// Generic handler
bot.on('richblockmap', async (data: RichBlockMap) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#RichBlockMap).
