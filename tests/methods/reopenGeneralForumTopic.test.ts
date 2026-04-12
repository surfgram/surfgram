import { reopenGeneralForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('reopenGeneralForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await reopenGeneralForumTopic.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('reopenGeneralForumTopic', {
      chat_id: 123,
    });
  });
});