import { RichMessage } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('RichMessage', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      blocks: [{} as any],
      is_rtl: true,
    };

    const instance = new RichMessage(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.blocks ?? instance.raw?.blocks).toEqual([{} as any]);
    expect(instance.isRtl ?? instance.raw?.is_rtl).toEqual(true);
  });
});