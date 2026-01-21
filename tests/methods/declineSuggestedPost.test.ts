import { declineSuggestedPost } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('declineSuggestedPost', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await declineSuggestedPost.call(mockBot, 123, 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('declineSuggestedPost', {
      chat_id: 123,
      message_id: 123,
      comment: "example text",
    });
  });
});