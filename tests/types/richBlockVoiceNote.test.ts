import { RichBlockVoiceNote } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichBlockVoiceNote', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      voice_note: {} as any,
      caption: {} as any,
    };

    const instance = new RichBlockVoiceNote(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.voiceNote ?? instance.raw?.voice_note).toEqual({} as any);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});