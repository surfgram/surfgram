import { stopPoll } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('stopPoll', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await stopPoll.call(mockBot, 123, 123, 'example text', {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('stopPoll', {
      chat_id: 123,
      message_id: 123,
      business_connection_id: 'example text',
      reply_markup: {} as any,
    });
  });
});
