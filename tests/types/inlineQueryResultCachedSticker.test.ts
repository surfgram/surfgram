import { InlineQueryResultCachedSticker } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQueryResultCachedSticker', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      id: 'example text',
      sticker_file_id: 'example text',
      reply_markup: {} as any,
      input_message_content: {} as any,
    };

    const instance = new InlineQueryResultCachedSticker(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.stickerFileId ?? instance.raw?.sticker_file_id).toEqual('example text');
    expect(instance.replyMarkup ?? instance.raw?.reply_markup).toEqual({} as any);
    expect(instance.inputMessageContent ?? instance.raw?.input_message_content).toEqual({} as any);
  });
});
