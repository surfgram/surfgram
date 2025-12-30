import { InlineQueryResultDocument } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultDocument', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      title: 'example text',
      caption: 'example text',
      parse_mode: 'example text',
      caption_entities: [{} as any],
      document_url: 'example text',
      mime_type: 'example text',
      description: 'example text',
      reply_markup: {} as any,
      input_message_content: {} as any,
      thumbnail_url: 'example text',
      thumbnail_width: 123,
      thumbnail_height: 123,
    };

    const instance = new InlineQueryResultDocument(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.caption ?? instance.raw?.caption).toEqual('example text');
    expect(instance.parseMode ?? instance.raw?.parse_mode).toEqual('example text');
    expect(instance.captionEntities ?? instance.raw?.caption_entities).toEqual([{} as any]);
    expect(instance.documentUrl ?? instance.raw?.document_url).toEqual('example text');
    expect(instance.mimeType ?? instance.raw?.mime_type).toEqual('example text');
    expect(instance.description ?? instance.raw?.description).toEqual('example text');
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
    expect(instance.thumbnailUrl ?? instance.raw?.thumbnail_url).toEqual('example text');
    expect(instance.thumbnailWidth ?? instance.raw?.thumbnail_width).toEqual(123);
    expect(instance.thumbnailHeight ?? instance.raw?.thumbnail_height).toEqual(123);
  });
});
