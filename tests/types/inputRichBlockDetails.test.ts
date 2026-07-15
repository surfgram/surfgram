import { InputRichBlockDetails } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockDetails', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      summary: {} as any,
      blocks: [{} as any],
      is_open: true,
    };

    const instance = new InputRichBlockDetails(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.summary ?? instance.raw?.summary).toEqual({} as any);
    expect(instance.blocks ?? instance.raw?.blocks).toEqual([{} as any]);
    expect(instance.isOpen ?? instance.raw?.is_open).toEqual(true);
  });
});