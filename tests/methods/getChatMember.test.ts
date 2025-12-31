import { getChatMember } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getChatMember', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getChatMember.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getChatMember', {
      chat_id: 123,
      user_id: 123,
    });
  });
});
