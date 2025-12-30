import { unbanChatMember } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unbanChatMember', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unbanChatMember.call(mockBot, 123, 123, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('unbanChatMember', {
      chat_id: 123,
      user_id: 123,
      only_if_banned: true,
    });
  });
});