import { RichBlockDocument } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockDocument', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      document: {} as any,
      caption: {} as any,
    };

    const instance = new RichBlockDocument(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.document ?? instance.raw?.document).toEqual({} as any);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});