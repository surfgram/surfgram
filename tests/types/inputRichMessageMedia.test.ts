import { InputRichMessageMedia } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InputRichMessageMedia', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: "example text",
      media: {} as any,
    };

    const instance = new InputRichMessageMedia(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.id ?? instance.raw?.id).toEqual("example text");
    expect(instance.media ?? instance.raw?.media).toEqual({} as any);
  });
});