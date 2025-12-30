import { setChatMenuButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setChatMenuButton', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setChatMenuButton.call(mockBot, 123, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('setChatMenuButton', {
      chat_id: 123,
      menu_button: {} as any,
    });
  });
});