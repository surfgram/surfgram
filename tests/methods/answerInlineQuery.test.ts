import { answerInlineQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('answerInlineQuery', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      inlineQueryId: 'example text',
      results: [{} as any],
      cacheTime: 123,
      isPersonal: true,
      nextOffset: 'example text',
      button: {} as any,
    };

    await answerInlineQuery.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('answerInlineQuery', {
      inline_query_id: 'example text',
      results: [{} as any],
      cache_time: 123,
      is_personal: true,
      next_offset: 'example text',
      button: {} as any,
    });
  });
});
