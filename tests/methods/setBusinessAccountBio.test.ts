import { setBusinessAccountBio } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setBusinessAccountBio', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setBusinessAccountBio.call(mockBot, 'example text', 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setBusinessAccountBio', {
      business_connection_id: 'example text',
      bio: 'example text',
    });
  });
});
