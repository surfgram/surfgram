import { RichBlockList } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockList', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      items: [{} as any],
    };

    const instance = new RichBlockList(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.items ?? instance.raw?.items).toEqual([{} as any]);
  });
});