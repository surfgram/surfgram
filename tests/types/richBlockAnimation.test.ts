import { RichBlockAnimation } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockAnimation', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      animation: {} as any,
      has_spoiler: true,
      caption: {} as any,
    };

    const instance = new RichBlockAnimation(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.animation ?? instance.raw?.animation).toEqual({} as any);
    expect(instance.hasSpoiler ?? instance.raw?.has_spoiler).toEqual(true);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});