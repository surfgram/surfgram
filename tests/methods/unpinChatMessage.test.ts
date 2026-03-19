import { unpinChatMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('unpinChatMessage', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await unpinChatMessage.call(mockBot, 123, "example text", 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('unpinChatMessage', {
      chat_id: 123,
      business_connection_id: "example text",
      message_id: 123,
    });
  });
});