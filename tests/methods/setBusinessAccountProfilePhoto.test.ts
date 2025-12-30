import { setBusinessAccountProfilePhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setBusinessAccountProfilePhoto', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setBusinessAccountProfilePhoto.call(mockBot, "example text", {} as any, true);

    expect(mockBot.callApi).toHaveBeenCalledWith('setBusinessAccountProfilePhoto', {
      business_connection_id: "example text",
      photo: {} as any,
      is_public: true,
    });
  });
});