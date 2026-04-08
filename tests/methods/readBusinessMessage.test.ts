import { readBusinessMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('readBusinessMessage', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await readBusinessMessage.call(mockBot, "example text", 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('readBusinessMessage', {
      business_connection_id: "example text",
      chat_id: 123,
      message_id: 123,
    });
  });
});