import { answerPreCheckoutQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('answerPreCheckoutQuery', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await answerPreCheckoutQuery.call(mockBot, 'example text', true, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('answerPreCheckoutQuery', {
      pre_checkout_query_id: 'example text',
      ok: true,
      error_message: 'example text',
    });
  });
});
