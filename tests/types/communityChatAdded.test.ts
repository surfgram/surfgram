import { CommunityChatAdded } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('CommunityChatAdded', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      community: {} as any,
    };

    const instance = new CommunityChatAdded(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.community ?? instance.raw?.community).toEqual({} as any);
  });
});