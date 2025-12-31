import { unbanChatSenderChat } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unbanChatSenderChat', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unbanChatSenderChat.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('unbanChatSenderChat', {
      chat_id: 123,
      sender_chat_id: 123,
    });
  });
});