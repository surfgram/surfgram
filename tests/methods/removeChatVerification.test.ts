import { removeChatVerification } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('removeChatVerification', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await removeChatVerification.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('removeChatVerification', {
      chat_id: 123,
    });
  });
});
