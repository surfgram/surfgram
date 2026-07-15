import { InputRichBlockCollage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockCollage', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      blocks: [{} as any],
      caption: {} as any,
    };

    const instance = new InputRichBlockCollage(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.blocks ?? instance.raw?.blocks).toEqual([{} as any]);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});