import { setBusinessAccountGiftSettings } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('setBusinessAccountGiftSettings', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await setBusinessAccountGiftSettings.call(mockBot, "example text", true, {} as any);

    expect(mockBot.callApi).toHaveBeenCalledWith('setBusinessAccountGiftSettings', {
      business_connection_id: "example text",
      show_gift_button: true,
      accepted_gift_types: {} as any,
    });
  });
});