import { LinkPreviewOptions } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('LinkPreviewOptions', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      is_disabled: true,
      url: "example text",
      prefer_small_media: true,
      prefer_large_media: true,
      show_above_text: true,
    };

    const instance = new LinkPreviewOptions(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.isDisabled ?? instance.raw?.is_disabled).toEqual(true);
    expect(instance.url ?? instance.raw?.url).toEqual("example text");
    expect(instance.preferSmallMedia ?? instance.raw?.prefer_small_media).toEqual(true);
    expect(instance.preferLargeMedia ?? instance.raw?.prefer_large_media).toEqual(true);
    expect(instance.showAboveText ?? instance.raw?.show_above_text).toEqual(true);
  });
});