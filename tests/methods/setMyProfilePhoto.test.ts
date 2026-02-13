import { setMyProfilePhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setMyProfilePhoto', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setMyProfilePhoto.call(mockBot, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('setMyProfilePhoto', {
      photo: {} as any,
    });
  });
});