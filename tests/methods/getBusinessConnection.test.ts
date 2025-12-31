import { getBusinessConnection } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('getBusinessConnection', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await getBusinessConnection.call(mockBot, 'example text');

    expect(mockBot.callApi).toHaveBeenCalledWith('getBusinessConnection', {
      business_connection_id: 'example text',
    });
  });
});
