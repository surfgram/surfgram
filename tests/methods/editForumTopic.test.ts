import { editForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await editForumTopic.call(mockBot, 123, 123, "example text", "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('editForumTopic', {
      chat_id: 123,
      message_thread_id: 123,
      name: "example text",
      icon_custom_emoji_id: "example text",
    });
  });
});