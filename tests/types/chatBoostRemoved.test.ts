import { ChatBoostRemoved } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatBoostRemoved', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      boost_id: "example text",
      remove_date: 123,
      source: {} as any,
    };

    const instance = new ChatBoostRemoved(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.boostId ?? instance.raw?.boost_id).toEqual("example text");
    expect(instance.removeDate ?? instance.raw?.remove_date).toEqual(123);
    expect(instance.source ?? instance.raw?.source).toEqual({} as any);
  });
});