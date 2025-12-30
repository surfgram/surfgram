import { transferBusinessAccountStars } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('transferBusinessAccountStars', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await transferBusinessAccountStars.call(mockBot, "example text", 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('transferBusinessAccountStars', {
      business_connection_id: "example text",
      star_count: 123,
    });
  });
});