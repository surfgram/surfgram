import { setMessageReaction } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setMessageReaction', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setMessageReaction.call(mockBot, 123, 123, [{} as any], true);

    expect(mockBot.callApi).toHaveBeenCalledWith('setMessageReaction', {
      chat_id: 123,
      message_id: 123,
      reaction: [{} as any],
      is_big: true,
    });
  });
});
