import { closeGeneralForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('closeGeneralForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await closeGeneralForumTopic.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('closeGeneralForumTopic', {
      chat_id: 123,
    });
  });
});
