import { InputMediaLink } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputMediaLink', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      url: "example text",
    };

    const instance = new InputMediaLink(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.url ?? instance.raw?.url).toEqual("example text");
  });
});