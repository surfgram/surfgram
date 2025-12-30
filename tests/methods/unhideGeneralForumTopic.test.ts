import { unhideGeneralForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unhideGeneralForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unhideGeneralForumTopic.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('unhideGeneralForumTopic', {
      chat_id: 123,
    });
  });
});
