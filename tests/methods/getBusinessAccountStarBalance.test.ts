import { getBusinessAccountStarBalance } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getBusinessAccountStarBalance', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getBusinessAccountStarBalance.call(mockBot, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('getBusinessAccountStarBalance', {
      business_connection_id: "example text",
    });
  });
});