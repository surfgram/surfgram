import { setChatDescription } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatDescription', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatDescription.call(mockBot, 123, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatDescription', {
      chat_id: 123,
      description: 'example text',
    });
  });
});
