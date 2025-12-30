import { InputMediaVideo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputMediaVideo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      media: 'example text',
      thumbnail: 'example text',
      cover: 'example text',
      start_timestamp: 123,
      caption: 'example text',
      parse_mode: 'example text',
      caption_entities: [{} as any],
      show_caption_above_media: true,
      width: 123,
      height: 123,
      duration: 123,
      supports_streaming: true,
      has_spoiler: true,
    };

    const instance = new InputMediaVideo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.media ?? instance.raw?.media).toEqual('example text');
    expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual('example text');
    expect(instance.cover ?? instance.raw?.cover).toEqual('example text');
    expect(instance.startTimestamp ?? instance.raw?.start_timestamp).toEqual(123);
    expect(instance.caption ?? instance.raw?.caption).toEqual('example text');
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual('example text');
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(instance.showCaptionAboveMedia ?? instance.raw?.show_caption_above_media).toEqual(true);
    expect(instance.width ?? instance.raw?.width).toEqual(123);
    expect(instance.height ?? instance.raw?.height).toEqual(123);
    expect(instance.duration ?? instance.raw?.duration).toEqual(123);
    expect(instance.supportsStreaming ?? instance.raw?.supports_streaming).toEqual(true);
    expect(instance.hasSpoiler ?? instance.raw?.has_spoiler).toEqual(true);
  });
});
