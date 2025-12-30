import { VideoChatParticipantsInvited } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('VideoChatParticipantsInvited', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      users: [{} as any],
    };

    const instance = new VideoChatParticipantsInvited(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.users ?? instance.raw?.users).toEqual([{} as any]);
  });
});