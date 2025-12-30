import { getMyStarBalance } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMyStarBalance', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getMyStarBalance.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getMyStarBalance', {
      offset: 123,
      limit: 123,
    });
  });
});
