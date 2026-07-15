import { InputRichBlockAnimation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockAnimation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      animation: {} as any,
      caption: {} as any,
    };

    const instance = new InputRichBlockAnimation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.animation ?? instance.raw?.animation).toEqual({} as any);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});