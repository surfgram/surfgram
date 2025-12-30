# BackgroundTypePattern

The background is a .PNG or .TGV \(gzipped subset of SVG with MIME type “application/x-tgwallpattern”\) pattern to be combined with the background fill chosen by the user.

## Fields

| Name       | Type             | Required | Description                                                                                                                                      |
| :--------- | :--------------- | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | `string`         |   Yes    | Type of the background, always “pattern”                                                                                                         |
| document   | `Document`       |   Yes    | Document with the pattern                                                                                                                        |
| fill       | `BackgroundFill` |   Yes    | The background fill that is combined with the pattern                                                                                            |
| intensity  | `number`         |   Yes    | Intensity of the pattern when it is shown above the filled background; 0-100                                                                     |
| isInverted | `boolean`        |    No    | Optional. True, if the background fill must be applied only to the pattern itself. All other pixels are black in this case. For dark themes only |
| isMoving   | `boolean`        |    No    | Optional. True, if the background moves slightly when the device is tilted                                                                       |

## Event Handlers

You can listen for BackgroundTypePattern events using:

```typescript
// Type-specific handler
bot.onBackgroundTypePattern(async (backgroundtypepattern: BackgroundTypePattern) => {
  console.log('Received:', backgroundtypepattern);
});

// Generic handler
bot.on('backgroundtypepattern', async (data: BackgroundTypePattern) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#BackgroundTypePattern).
