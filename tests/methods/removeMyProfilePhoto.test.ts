import { removeMyProfilePhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('removeMyProfilePhoto', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await removeMyProfilePhoto.call(mockBot, 123, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('removeMyProfilePhoto', {
      chat_id: 123,
      menu_button: {} as any,
    });
  });
});