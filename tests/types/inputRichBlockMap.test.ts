import { InputRichBlockMap } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockMap', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      location: {} as any,
      zoom: 123,
      width: 123,
      height: 123,
      caption: {} as any,
    };

    const instance = new InputRichBlockMap(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
    expect(instance.zoom ?? instance.raw?.zoom).toEqual(123);
    expect(instance.width ?? instance.raw?.width).toEqual(123);
    expect(instance.height ?? instance.raw?.height).toEqual(123);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});