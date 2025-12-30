import { BusinessIntro } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BusinessIntro', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      title: "example text",
      message: "example text",
      sticker: {} as any,
    };

    const instance = new BusinessIntro(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.title ?? instance.raw?.title).toEqual("example text");
    expect(instance.message ?? instance.raw?.message).toEqual("example text");
    expect(instance.sticker ?? instance.raw?.sticker).toEqual({} as any);
  });
});