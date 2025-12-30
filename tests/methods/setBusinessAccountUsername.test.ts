import { setBusinessAccountUsername } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setBusinessAccountUsername', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setBusinessAccountUsername.call(mockBot, 'example text', 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setBusinessAccountUsername', {
      business_connection_id: 'example text',
      username: 'example text',
    });
  });
});
