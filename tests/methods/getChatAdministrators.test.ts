import { getChatAdministrators } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getChatAdministrators', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getChatAdministrators.call(mockBot, 123, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('getChatAdministrators', {
      chat_id: 123,
      return_bots: true,
    });
  });
});