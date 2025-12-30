import { deleteForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteForumTopic.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteForumTopic', {
      chat_id: 123,
      message_thread_id: 123,
    });
  });
});