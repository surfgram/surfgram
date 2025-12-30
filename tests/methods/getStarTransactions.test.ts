import { getStarTransactions } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getStarTransactions', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getStarTransactions.call(mockBot, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getStarTransactions', {
      offset: 123,
      limit: 123,
    });
  });
});
