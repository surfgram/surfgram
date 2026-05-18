import { getManagedBotAccessSettings } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getManagedBotAccessSettings', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getManagedBotAccessSettings.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getManagedBotAccessSettings', {
      user_id: 123,
    });
  });
});