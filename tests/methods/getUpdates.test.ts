import { getUpdates } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getUpdates', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    const params = {
      offset: 123,
      limit: 123,
      timeout: 123,
      allowedUpdates: ['example text'],
    };

    await getUpdates.call(mockBot, params);

    expect(mockBot.callApi).toHaveBeenCalledWith('getUpdates', {
      offset: 123,
      limit: 123,
      timeout: 123,
      allowed_updates: ['example text'],
    });
  });
});
