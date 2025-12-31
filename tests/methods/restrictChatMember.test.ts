import { restrictChatMember } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('restrictChatMember', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      chatId: 123,
      userId: 123,
      permissions: {} as any,
      useIndependentChatPermissions: true,
      untilDate: 123,
    };

    await restrictChatMember.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('restrictChatMember', {
      chat_id: 123,
      user_id: 123,
      permissions: {} as any,
      use_independent_chat_permissions: true,
      until_date: 123,
    });
  });
});