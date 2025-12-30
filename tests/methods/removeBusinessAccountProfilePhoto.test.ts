import { removeBusinessAccountProfilePhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('removeBusinessAccountProfilePhoto', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await removeBusinessAccountProfilePhoto.call(mockBot, 'example text', true);

    expect(mockBot.callApi).toHaveBeenCalledWith('removeBusinessAccountProfilePhoto', {
      business_connection_id: 'example text',
      is_public: true,
    });
  });
});
