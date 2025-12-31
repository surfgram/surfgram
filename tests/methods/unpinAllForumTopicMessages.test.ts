import { unpinAllForumTopicMessages } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unpinAllForumTopicMessages', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unpinAllForumTopicMessages.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('unpinAllForumTopicMessages', {
      chat_id: 123,
      message_thread_id: 123,
    });
  });
});
