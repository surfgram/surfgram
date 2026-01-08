import { MessageReactionUpdated } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MessageReactionUpdated', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      message_id: 123,
      user: {} as any,
      actor_chat: {} as any,
      date: 123,
      old_reaction: [{} as any],
      new_reaction: [{} as any],
    };

    const instance = new MessageReactionUpdated(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.messageId ?? instance.raw?.message_id).toEqual(123);
    expect(instance.user ?? instance.raw?.user).toEqual({} as any);
    expect(instance.actorChat ?? instance.raw?.actor_chat).toEqual({} as any);
    expect(instance.date ?? instance.raw?.date).toEqual(123);
    expect(instance.oldReaction ?? instance.raw?.old_reaction).toEqual([{} as any]);
    expect(instance.newReaction ?? instance.raw?.new_reaction).toEqual([{} as any]);
  });
});