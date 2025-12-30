import { Invoice } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Invoice', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      title: 'example text',
      description: 'example text',
      start_parameter: 'example text',
      currency: 'example text',
      total_amount: 123,
    };

    const instance = new Invoice(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.description ?? instance.raw?.description).toEqual('example text');
    expect(instance.startParameter ?? instance.raw?.start_parameter).toEqual('example text');
    expect(instance.currency ?? instance.raw?.currency).toEqual('example text');
    expect(instance.totalAmount ?? instance.raw?.total_amount).toEqual(123);
  });
});
