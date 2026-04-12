import { ChatLocation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatLocation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      location: {} as any,
      address: "example text",
    };

    const instance = new ChatLocation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
    expect(instance.address ?? instance.raw?.address).toEqual("example text");
  });
});