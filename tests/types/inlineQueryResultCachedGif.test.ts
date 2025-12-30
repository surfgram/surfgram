import { InlineQueryResultCachedGif } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultCachedGif', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      gif_file_id: 'example text',
      title: 'example text',
      caption: 'example text',
      parse_mode: 'example text',
      caption_entities: [{} as any],
      show_caption_above_media: true,
      reply_markup: {} as any,
      input_message_content: {} as any,
    };

    const instance = new InlineQueryResultCachedGif(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.gifFileId ?? instance.raw?.gif_file_id).toEqual('example text');
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.caption ?? instance.raw?.caption).toEqual('example text');
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual('example text');
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(instance.showCaptionAboveMedia ?? instance.raw?.show_caption_above_media).toEqual(true);
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
  });
});
