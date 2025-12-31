import { getMyDescription } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getMyDescription', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getMyDescription.call(mockBot, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('getMyDescription', {
      language_code: 'example text',
    });
  });
});
