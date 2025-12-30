import { BusinessLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BusinessLocation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      address: 'example text',
      location: {} as any,
    };

    const instance = new BusinessLocation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.address ?? instance.raw?.address).toEqual('example text');
    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
  });
});
