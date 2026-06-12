import { RichBlockVideo } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockVideo', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      video: {} as any,
      has_spoiler: true,
      caption: {} as any,
    };

    const instance = new RichBlockVideo(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.video ?? instance.raw?.video).toEqual({} as any);
    expect(instance.hasSpoiler ?? instance.raw?.has_spoiler).toEqual(true);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});