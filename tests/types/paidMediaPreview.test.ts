import { PaidMediaPreview } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('PaidMediaPreview', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      width: 123,
      height: 123,
      duration: 123,
    };

    const instance = new PaidMediaPreview(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.width ?? instance.raw?.width).toEqual(123);
    expect(instance.height ?? instance.raw?.height).toEqual(123);
    expect(instance.duration ?? instance.raw?.duration).toEqual(123);
  });
});