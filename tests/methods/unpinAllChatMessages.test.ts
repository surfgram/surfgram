import { unpinAllChatMessages } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unpinAllChatMessages', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unpinAllChatMessages.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('unpinAllChatMessages', {
      chat_id: 123,
    });
  });
});