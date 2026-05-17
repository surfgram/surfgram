import { getUserPersonalChatMessages } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getUserPersonalChatMessages', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getUserPersonalChatMessages.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getUserPersonalChatMessages', {
      user_id: 123,
      limit: 123,
    });
  });
});