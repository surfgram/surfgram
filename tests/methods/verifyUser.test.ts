import { verifyUser } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('verifyUser', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await verifyUser.call(mockBot, 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('verifyUser', {
      user_id: 123,
      custom_description: "example text",
    });
  });
});