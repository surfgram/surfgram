import { InlineQueryResultVideo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultVideo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      id: "example text",
      video_url: "example text",
      mime_type: "example text",
      thumbnail_url: "example text",
      title: "example text",
      caption: "example text",
      parse_mode: "example text",
      caption_entities: [{} as any],
      show_caption_above_media: true,
      video_width: 123,
      video_height: 123,
      video_duration: 123,
      description: "example text",
      reply_markup: {} as any,
      input_message_content: {} as any,
    };

    const instance = new InlineQueryResultVideo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.id ?? instance.raw?.id).toEqual("example text");
    expect(instance.videoUrl ?? instance.raw?.video_url).toEqual("example text");
    expect(instance.mimeType ?? instance.raw?.mime_type).toEqual("example text");
    expect(instance.thumbnailUrl ?? instance.raw?.thumbnail_url).toEqual("example text");
    expect(instance.title ?? instance.raw?.title).toEqual("example text");
    expect(instance.caption ?? instance.raw?.caption).toEqual("example text");
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual("example text");
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(instance.showCaptionAboveMedia ?? instance.raw?.show_caption_above_media).toEqual(true);
    expect(instance.videoWidth ?? instance.raw?.video_width).toEqual(123);
    expect(instance.videoHeight ?? instance.raw?.video_height).toEqual(123);
    expect(instance.videoDuration ?? instance.raw?.video_duration).toEqual(123);
    expect(instance.description ?? instance.raw?.description).toEqual("example text");
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
  });
});