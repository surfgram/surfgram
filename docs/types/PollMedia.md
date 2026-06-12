# PollMedia

At most one of the optional fields can be present in any given object.

## Fields

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| animation | `Animation` | No | Optional. Media is an animation, information about the animation |
| audio | `Audio` | No | Optional. Media is an audio file, information about the file; currently, can't be received in a poll option |
| document | `Document` | No | Optional. Media is a general file, information about the file; currently, can't be received in a poll option |
| link | `Link` | No | Optional. The HTTP link attached to the poll option |
| livePhoto | `LivePhoto` | No | Optional. Media is a live photo, information about the live photo |
| location | `Location` | No | Optional. Media is a shared location, information about the location |
| photo | `PhotoSize[]` | No | Optional. Media is a photo, available sizes of the photo |
| sticker | `Sticker` | No | Optional. Media is a sticker, information about the sticker; currently, for poll options only |
| venue | `Venue` | No | Optional. Media is a venue, information about the venue |
| video | `Video` | No | Optional. Media is a video, information about the video |


## Event Handlers

You can listen for PollMedia events using:

```typescript
// Type-specific handler
bot.onPollMedia(async (pollmedia: PollMedia) => {
  console.log('Received:', pollmedia);
});

// Generic handler
bot.on('pollmedia', async (data: PollMedia) => {
  // Same as above
});
```

## API Documentation

For more details, see the official [Telegram Bot API documentation](https://core.telegram.org/bots/api#PollMedia).
