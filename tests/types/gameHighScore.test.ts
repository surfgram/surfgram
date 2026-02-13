import { GameHighScore } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('GameHighScore', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      position: 123,
      user: {} as any,
      score: 123,
    };

    const instance = new GameHighScore(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.position ?? instance.raw?.position).toEqual(123);
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.score ?? instance.raw?.score).toEqual(123);
  });
});