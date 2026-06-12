import { RichBlockAnchor } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockAnchor', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      name: "example text",
    };

    const instance = new RichBlockAnchor(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.name ?? instance.raw?.name).toEqual("example text");
  });
});