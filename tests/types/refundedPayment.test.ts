import { RefundedPayment } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RefundedPayment', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      currency: 'example text',
      total_amount: 123,
      invoice_payload: 'example text',
      telegram_payment_charge_id: 'example text',
      provider_payment_charge_id: 'example text',
    };

    const instance = new RefundedPayment(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.currency ?? instance.raw?.currency).toEqual('example text');
    expect(instance.totalAmount ?? instance.raw?.total_amount).toEqual(123);
    expect(instance.invoicePayload ?? instance.raw?.invoice_payload).toEqual('example text');
    expect(instance.telegramPaymentChargeId ?? instance.raw?.telegram_payment_charge_id).toEqual(
      'example text'
    );
    expect(instance.providerPaymentChargeId ?? instance.raw?.provider_payment_charge_id).toEqual(
      'example text'
    );
  });
});
