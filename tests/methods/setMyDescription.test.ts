import { setMyDescription } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setMyDescription', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setMyDescription.call(mockBot, 'example text', 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setMyDescription', {
      description: 'example text',
      language_code: 'example text',
    });
  });
});
