import { answerShippingQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('answerShippingQuery', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      shippingQueryId: "example text",
      ok: true,
      shippingOptions: [{} as any],
      errorMessage: "example text",
    };

    await answerShippingQuery.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('answerShippingQuery', {
      shipping_query_id: "example text",
      ok: true,
      shipping_options: [{} as any],
      error_message: "example text",
    });
  });
});