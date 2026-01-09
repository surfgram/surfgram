import { OrderInfo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('OrderInfo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      name: "example text",
      phone_number: "example text",
      email: "example text",
      shipping_address: {} as any,
    };

    const instance = new OrderInfo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.name ?? instance.raw?.name).toEqual("example text");
    expect(instance.phoneNumber ?? instance.raw?.phone_number).toEqual("example text");
    expect(instance.email ?? instance.raw?.email).toEqual("example text");
    expect(instance.shippingAddress ?? instance.raw?.shipping_address).toEqual({} as any);
  });
});