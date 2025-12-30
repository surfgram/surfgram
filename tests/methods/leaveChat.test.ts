import { leaveChat } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('leaveChat', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await leaveChat.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('leaveChat', {
      chat_id: 123,
    });
  });
});
