import { ChatBoostUpdated } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('ChatBoostUpdated', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      boost: {} as any,
    };

    const instance = new ChatBoostUpdated(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);

    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.boost ?? instance.raw?.boost).toEqual({} as any);
  });
});
