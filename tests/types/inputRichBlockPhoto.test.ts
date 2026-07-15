import { InputRichBlockPhoto } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichBlockPhoto', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      type: "example text",
      photo: {} as any,
      caption: {} as any,
    };

    const instance = new InputRichBlockPhoto(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.type ?? instance.raw?.type).toEqual("example text");
    expect(instance.photo ?? instance.raw?.photo).toEqual({} as any);
    expect(instance.caption ?? instance.raw?.caption).toEqual({} as any);
  });
});