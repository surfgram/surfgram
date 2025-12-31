import { answerShippingQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('answerShippingQuery', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await answerShippingQuery.call(mockBot, 'example text', true, [{} as any], 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('answerShippingQuery', {
      shipping_query_id: 'example text',
      ok: true,
      shipping_options: [{} as any],
      error_message: 'example text',
    });
  });
});
