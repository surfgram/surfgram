import { answerWebAppQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('answerWebAppQuery', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      webAppQueryId: "example text",
      result: {} as any,
    };

    await answerWebAppQuery.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('answerWebAppQuery', {
      web_app_query_id: "example text",
      result: {} as any,
    });
  });
});