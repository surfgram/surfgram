import { ShippingOption } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ShippingOption', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: 'example text',
      title: 'example text',
      prices: [{} as any],
    };

    const instance = new ShippingOption(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.id ?? instance.raw?.id).toEqual('example text');
    expect(instance.title ?? instance.raw?.title).toEqual('example text');
    expect(instance.prices ?? instance.raw?.prices).toEqual([{} as any]);
  });
});
