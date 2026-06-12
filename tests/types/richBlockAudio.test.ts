import { RichBlockAudio } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockAudio', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      audio: {} as any,
      caption: {} as any,
    };

    const instance = new RichBlockAudio(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.audio ?? instance.raw?.audio).toEqual({} as any);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});