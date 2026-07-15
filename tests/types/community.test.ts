import { Community } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Community', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: 123,
      name: "example text",
    };

    const instance = new Community(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.id ?? instance.raw?.id).toEqual(123);
    expect(instance.name ?? instance.raw?.name).toEqual("example text");
  });
});