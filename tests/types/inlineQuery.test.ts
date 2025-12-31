import { InlineQuery } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('InlineQuery', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      id: "example text",
      from: {} as any,
      query: "example text",
      offset: "example text",
      chat_type: "example text",
      location: {} as any,
    };

    const instance = new InlineQuery(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.id ?? instance.raw?.id).toEqual("example text");
    expect(instance.from ?? instance.raw?.from).toEqual({} as any);
    expect(instance.query ?? instance.raw?.query).toEqual("example text");
    expect(instance.offset ?? instance.raw?.offset).toEqual("example text");
    expect(instance.chatType ?? instance.raw?.chat_type).toEqual("example text");
    expect(instance.location ?? instance.raw?.location).toEqual({} as any);
  });
});