import { getUserChatBoosts } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getUserChatBoosts', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getUserChatBoosts.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getUserChatBoosts', {
      chat_id: 123,
      user_id: 123,
    });
  });
});
