import { removeUserVerification } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('removeUserVerification', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await removeUserVerification.call(mockBot, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('removeUserVerification', {
      user_id: 123,
    });
  });
});