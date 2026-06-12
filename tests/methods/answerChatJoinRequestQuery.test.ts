import { answerChatJoinRequestQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('answerChatJoinRequestQuery', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await answerChatJoinRequestQuery.call(mockBot, "example text", "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('answerChatJoinRequestQuery', {
      chat_join_request_query_id: "example text",
      result: "example text",
    });
  });
});