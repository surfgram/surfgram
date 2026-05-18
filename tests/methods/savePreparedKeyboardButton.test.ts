import { savePreparedKeyboardButton } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('savePreparedKeyboardButton', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await savePreparedKeyboardButton.call(mockBot, 123, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('savePreparedKeyboardButton', {
      user_id: 123,
      button: {} as any,
    });
  });
});