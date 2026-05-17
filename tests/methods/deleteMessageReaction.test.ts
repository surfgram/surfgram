import { deleteMessageReaction } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('deleteMessageReaction', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await deleteMessageReaction.call(mockBot, 123, 123, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('deleteMessageReaction', {
      chat_id: 123,
      message_id: 123,
      user_id: 123,
      actor_chat_id: 123,
    });
  });
});