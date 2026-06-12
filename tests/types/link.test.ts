import { Link } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('Link', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      url: "example text",
    };

    const instance = new Link(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.url ?? instance.raw?.url).toEqual("example text");
  });
});