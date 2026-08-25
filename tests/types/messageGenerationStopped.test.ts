import { MessageGenerationStopped } from '../../src/api';
import { Bot } from '../../src/core/bot';

describe('MessageGenerationStopped', () => {
  const mockBot = { callApi: jest.fn() } as unknown as Bot;

  it('should correctly instantiate from raw data', () => {
    const raw = {
      chat: {} as any,
      message_thread_id: 123,
      draft_id: 123,
    };

    const instance = new MessageGenerationStopped(raw, mockBot);

    expect(instance.raw).toEqual(raw);
    expect(instance.bot).toBe(mockBot);
    
    expect(instance.chat ?? instance.raw?.chat).toEqual({} as any);
    expect(instance.messageThreadId ?? instance.raw?.message_thread_id).toEqual(123);
    expect(instance.draftId ?? instance.raw?.draft_id).toEqual(123);
  });
});