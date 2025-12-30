import { getGameHighScores } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getGameHighScores', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getGameHighScores.call(mockBot, 123, 123, 123, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('getGameHighScores', {
      user_id: 123,
      chat_id: 123,
      message_id: 123,
      inline_message_id: 'example text',
    });
  });
});
