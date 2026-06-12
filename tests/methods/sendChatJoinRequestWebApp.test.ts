import { sendChatJoinRequestWebApp } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('sendChatJoinRequestWebApp', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await sendChatJoinRequestWebApp.call(mockBot, "example text", "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('sendChatJoinRequestWebApp', {
      chat_join_request_query_id: "example text",
      web_app_url: "example text",
    });
  });
});