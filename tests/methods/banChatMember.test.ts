import { banChatMember } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('banChatMember', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await banChatMember.call(mockBot, 123, 123, 123, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('banChatMember', {
      chat_id: 123,
      user_id: 123,
      until_date: 123,
      revoke_messages: true,
    });
  });
});
