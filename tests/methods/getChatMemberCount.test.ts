import { getChatMemberCount } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getChatMemberCount', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getChatMemberCount.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getChatMemberCount', {
      chat_id: 123,
    });
  });
});
