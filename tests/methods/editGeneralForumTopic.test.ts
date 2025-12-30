import { editGeneralForumTopic } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editGeneralForumTopic', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await editGeneralForumTopic.call(mockBot, 123, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('editGeneralForumTopic', {
      chat_id: 123,
      name: 'example text',
    });
  });
});
