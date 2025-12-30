import { setGameScore } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setGameScore', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      userId: 123,
      score: 123,
      force: true,
      disableEditMessage: true,
      chatId: 123,
      messageId: 123,
      inlineMessageId: 'example text',
    };

    await setGameScore.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('setGameScore', {
      user_id: 123,
      score: 123,
      force: true,
      disable_edit_message: true,
      chat_id: 123,
      message_id: 123,
      inline_message_id: 'example text',
    });
  });
});
