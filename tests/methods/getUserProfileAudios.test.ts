import { getUserProfileAudios } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getUserProfileAudios', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getUserProfileAudios.call(mockBot, 123, 123, 123);

    expect(mockBot.callApi).toHaveBeenCalledWith('getUserProfileAudios', {
      user_id: 123,
      offset: 123,
      limit: 123,
    });
  });
});