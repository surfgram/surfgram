import { pinChatMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('pinChatMessage', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await pinChatMessage.call(mockBot, 123, 123, 'example text', true);

    expect(mockBot.callApi).toHaveBeenCalledWith('pinChatMessage', {
      chat_id: 123,
      message_id: 123,
      business_connection_id: 'example text',
      disable_notification: true,
    });
  });
});
