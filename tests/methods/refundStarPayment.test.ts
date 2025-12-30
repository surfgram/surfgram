import { refundStarPayment } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('refundStarPayment', () => {
  it('should call callApi with correct parameters', async () => {
    const mockBot = { callApi: jest.fn().mockResolvedValue({} as any) } as unknown as Bot;

    await refundStarPayment.call(mockBot, 123, "example text");

    expect(mockBot.callApi).toHaveBeenCalledWith('refundStarPayment', {
      user_id: 123,
      telegram_payment_charge_id: "example text",
    });
  });
});