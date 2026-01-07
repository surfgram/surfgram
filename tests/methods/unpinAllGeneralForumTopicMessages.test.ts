import { unpinAllGeneralForumTopicMessages } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unpinAllGeneralForumTopicMessages', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unpinAllGeneralForumTopicMessages.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('unpinAllGeneralForumTopicMessages', {
      chat_id: 123,
    });
  });
});