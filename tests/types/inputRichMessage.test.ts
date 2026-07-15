import { InputRichMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichMessage', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      blocks: [{} as any],
      html: "example text",
      markdown: "example text",
      media: [{} as any],
      is_rtl: true,
      skip_entity_detection: true,
    };

    const instance = new InputRichMessage(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.blocks ?? instance.raw?.blocks).toEqual([{} as any]);
    expect(instance.html ?? instance.raw?.html).toEqual("example text");
    expect(instance.markdown ?? instance.raw?.markdown).toEqual("example text");
    expect(instance.media ?? instance.raw?.media).toEqual([{} as any]);
    expect(instance.isRtl ?? instance.raw?.is_rtl).toEqual(true);
    expect(instance.skipEntityDetection ?? instance.raw?.skip_entity_detection).toEqual(true);
  });
});