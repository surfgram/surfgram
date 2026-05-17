import { BotAccessSettings } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('BotAccessSettings', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      is_access_restricted: true,
      added_users: [{} as any],
    };

    const instance = new BotAccessSettings(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.isAccessRestricted ?? instance.raw?.is_access_restricted).toEqual(true);
    expect(instance.addedUsers ?? instance.raw?.added_users).toEqual([{} as any]);
  });
});