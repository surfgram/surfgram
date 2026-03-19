import { editUserStarSubscription } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('editUserStarSubscription', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await editUserStarSubscription.call(mockBot, 123, "example text", true);

    expect(mockBot.callApi).toHaveBeenCalledWith('editUserStarSubscription', {
      user_id: 123,
      telegram_payment_charge_id: "example text",
      is_canceled: true,
    });
  });
});