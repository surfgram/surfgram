import { createForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('createForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await createForumTopic.call(mockBot, 123, "example text", 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('createForumTopic', {
      chat_id: 123,
      name: "example text",
      icon_color: 123,
      icon_custom_emoji_id: "example text",
    });
  });
});