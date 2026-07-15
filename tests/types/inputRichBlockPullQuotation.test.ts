import { InputRichBlockPullQuotation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockPullQuotation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      credit: {} as any,
    };

    const instance = new InputRichBlockPullQuotation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.credit ?? instance.raw?.credit).toEqual({} as any);
  });
});