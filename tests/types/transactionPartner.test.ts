import { TransactionPartner } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('TransactionPartner', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: 'example text',
      transaction_type: 'example text',
      user: {} as any,
      affiliate: {} as any,
      invoice_payload: 'example text',
      subscription_period: 123,
      paid_media: [{} as any],
      paid_media_payload: 'example text',
      gift: {} as any,
      premium_subscription_duration: 123,
    };

    const instance = new TransactionPartner(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.type ?? instance.raw?.type).toEqual('example text');
    expect(instance.transactionType ?? instance.raw?.transaction_type).toEqual('example text');
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.affiliate ?? instance.raw?.affiliate).toEqual({} as any);
    expect(instance.invoicePayload ?? instance.raw?.invoice_payload).toEqual('example text');
    expect(instance.subscriptionPeriod ?? instance.raw?.subscription_period).toEqual(123);
    expect(instance.paidMedia ?? instance.raw?.paid_media).toEqual([{} as any]);
    expect(instance.paidMediaPayload ?? instance.raw?.paid_media_payload).toEqual('example text');
    expect(instance.gift ?? instance.raw?.gift).toEqual({} as any);
    expect(
      instance.premiumSubscriptionDuration ?? instance.raw?.premium_subscription_duration
    ).toEqual(123);
  });
});
