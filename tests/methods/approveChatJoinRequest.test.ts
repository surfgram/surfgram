import { approveChatJoinRequest } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('approveChatJoinRequest', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await approveChatJoinRequest.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('approveChatJoinRequest', {
      chat_id: 123,
      user_id: 123,
    });
  });
});
