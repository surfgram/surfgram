import { ShippingAddress } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ShippingAddress', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      country_code: 'example text',
      state: 'example text',
      city: 'example text',
      street_line1: 'example text',
      street_line2: 'example text',
      post_code: 'example text',
    };

    const instance = new ShippingAddress(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.countryCode ?? instance.raw?.country_code).toEqual('example text');
    expect(instance.state ?? instance.raw?.state).toEqual('example text');
    expect(instance.city ?? instance.raw?.city).toEqual('example text');
    expect(instance.streetLine1 ?? instance.raw?.street_line1).toEqual('example text');
    expect(instance.streetLine2 ?? instance.raw?.street_line2).toEqual('example text');
    expect(instance.postCode ?? instance.raw?.post_code).toEqual('example text');
  });
});
