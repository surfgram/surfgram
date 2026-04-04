import { replaceManagedBotToken } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('replaceManagedBotToken', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await replaceManagedBotToken.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('replaceManagedBotToken', {
      user_id: 123,
    });
  });
});