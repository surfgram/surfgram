import { RichBlockSectionHeading } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockSectionHeading', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      size: 123,
    };

    const instance = new RichBlockSectionHeading(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.size ?? instance.raw?.size).toEqual(123);
  });
});