import { ShippingQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ShippingQuery', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: "example text",
      from: {} as any,
      invoice_payload: "example text",
      shipping_address: {} as any,
    };

    const instance = new ShippingQuery(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.id ?? instance.raw?.id).toEqual("example text");
    expect(instance.from ?? instance.raw?.from).toEqual({} as any);
    expect(instance.invoicePayload ?? instance.raw?.invoice_payload).toEqual("example text");
    expect(instance.shippingAddress ?? instance.raw?.shipping_address).toEqual({} as any);
  });
});