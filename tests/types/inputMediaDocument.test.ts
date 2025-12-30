import { InputMediaDocument } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputMediaDocument', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      media: 'example text',
      thumbnail: 'example text',
      caption: 'example text',
      parse_mode: 'example text',
      caption_entities: [{} as any],
      disable_content_type_detection: true,
    };

    const instance = new InputMediaDocument(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.media ?? instance.raw?.media).toEqual('example text');
    expect(instance.thumbnail ?? instance.raw?.thumbnail).toEqual('example text');
    expect(instance.caption ?? instance.raw?.caption).toEqual('example text');
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual('example text');
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(
      instance.disableContentTypeDetection ?? instance.raw?.disable_content_type_detection
    ).toEqual(true);
  });
});
