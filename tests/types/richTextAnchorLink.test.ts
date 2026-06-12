import { RichTextAnchorLink } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichTextAnchorLink', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      text: {} as any,
      anchor_name: "example text",
    };

    const instance = new RichTextAnchorLink(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.text ?? instance.raw?.text).toEqual({} as any);
    expect(instance.anchorName ?? instance.raw?.anchor_name).toEqual("example text");
  });
});