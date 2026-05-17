import { setManagedBotAccessSettings } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setManagedBotAccessSettings', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setManagedBotAccessSettings.call(mockBot, 123, true, [123]);

    expect(mockBot.callApi).toHaveBeenCalledWith('setManagedBotAccessSettings', {
      user_id: 123,
      is_access_restricted: true,
      added_user_ids: [123],
    });
  });
});