import { approveSuggestedPost } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('approveSuggestedPost', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await approveSuggestedPost.call(mockBot, 123, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('approveSuggestedPost', {
      chat_id: 123,
      message_id: 123,
      send_date: 123,
    });
  });
});
